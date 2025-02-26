import { Box, ListItemButton, alpha } from "@mui/material";

import { usePathname } from "@/hooks";

import { Icon, IconName } from "../Icon";
import { Link } from "react-router";

export function NavItem({
  item,
}: {
  item: {
    path: string;
    title: string;
    icon: IconName;
  };
}) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        color: "text.secondary",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          color: "primary.main",
          fontWeight: "fontWeightSemiBold",
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Icon name={item.icon} sx={{ width: 20, height: 20, mr: 2 }} />
      <Box
        component="span"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
        }}
      >
        {item.title}
      </Box>
    </ListItemButton>
  );
}
