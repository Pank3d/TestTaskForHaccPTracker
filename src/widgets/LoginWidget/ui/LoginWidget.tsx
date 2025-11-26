import { Box, Container, Typography, Paper } from '@mui/material';
import { Form } from '@shared/ui';
import { useLogin } from '../model/useLogin';
import { loginFormFields, loginValidationSchema } from '../config/loginForm.config';

export const LoginWidget = () => {
  const { handleSubmit } = useLogin();

  const formConfig = {
    fields: loginFormFields,
    validationSchema: loginValidationSchema,
    onSubmit: handleSubmit,
    submitButtonText: 'Войти',
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" sx={{ mb: 3 }}>
            Вход в систему
          </Typography>
          <Form config={formConfig} />
        </Paper>
      </Box>
    </Container>
  );
};
