import { Icon, IconifyIcon } from '@iconify/react';
import { Box } from '@mui/material';

type IconifyProps = {
  icon: string | IconifyIcon;
  sx?: Record<string, any>;
}

export default function Iconify({ icon, sx, ...other }: IconifyProps) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
