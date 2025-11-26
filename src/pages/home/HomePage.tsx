import { Typography, CircularProgress, Box } from "@mui/material";
import { useCurrentUser, useStaffers } from "@entities/index";
import { Sidebar } from "@widgets/Sidebar";
import { StafferTable } from "@features/StafferTable";

export const HomePage = () => {
  const { data: user, isLoading: userLoading, error: userError } = useCurrentUser();
  const { data: staffers = [], isLoading: staffersLoading } = useStaffers();

  if (userLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (userError) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          Ошибка загрузки данных пользователя
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Сотрудники
        </Typography>
        <StafferTable data={staffers} isLoading={staffersLoading} />
      </Box>
    </Box>
  );
};
