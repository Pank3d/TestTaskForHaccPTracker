import { Box, Typography, Paper, Stack } from '@mui/material';
import { Dropdown } from '@shared/ui';
import { useSidebar } from '../model/useSidebar';

export const Sidebar = () => {
  const { user, enterpriseOptions, selectedEnterpriseId, handleEnterpriseChange } = useSidebar();

  return (
    <Paper
      sx={{
        width: 280,
        minHeight: '100vh',
        p: 3,
        borderRadius: 0,
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            Текущий пользователь
          </Typography>
          {user && (
            <Typography variant="body1" fontWeight={500}>
              {user.last_name} {user.first_name} {user.middle_name}
            </Typography>
          )}
        </Box>

        <Box>
          <Typography variant="caption" color="text.secondary" gutterBottom display="block" mb={1}>
            Выбор предприятия
          </Typography>
          <Dropdown<number>
            options={enterpriseOptions}
            value={selectedEnterpriseId as number}
            onChange={handleEnterpriseChange}
            placeholder="Выберите предприятие"
            size="small"
          />
        </Box>

        <Box>
          <Typography variant="caption" color="text.secondary" gutterBottom display="block">
            Сотрудники
          </Typography>
          <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
            (активный пункт меню)
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};
