import { Stack } from "@mui/material";
import { Formik, Form as FormikForm } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button } from "../Button";
import { FormField } from "./FormField";
import type { FormConfig } from "./Form.types";

interface FormProps<T extends z.ZodType> {
  config: FormConfig<T>;
}

export function Form<T extends z.ZodType>({ config }: FormProps<T>) {
  const {
    fields,
    validationSchema,
    onSubmit,
    submitButtonText = "Отправить",
    initialValues = {},
  } = config;

  const initialFormValues = fields.reduce((acc, field) => {
    acc[field.name] = (initialValues as Record<string, any>)[field.name] ?? "";
    return acc;
  }, {} as Record<string, any>);

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={toFormikValidationSchema(validationSchema)}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await onSubmit(values as z.infer<T>);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {(formikProps) => (
        <FormikForm>
          <Stack spacing={2}>
            {fields.map((field) => (
              <FormField key={field.name} fieldConfig={field} />
            ))}
            <Button
              variant="contained"
              fullWidth
              loading={formikProps.isSubmitting}
              disabled={formikProps.isSubmitting}
              onClick={formikProps.submitForm}
            >
              {submitButtonText}
            </Button>
          </Stack>
        </FormikForm>
      )}
    </Formik>
  );
}
