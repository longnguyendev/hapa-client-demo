import { Box, Drawer } from "@mui/material";
import { useEffect } from "react";

import { NAV } from "@/constants";
import { usePathname, useResponsive } from "@/hooks";

import { Menu } from "./Menu";

interface NavProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  open: boolean;
  onClose: () => void;
  window?: () => Window;
}

export function Nav({ window, open, onClose }: NavProps) {
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const upLg = useResponsive("up", "lg");
  const pathname = usePathname();
  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <Menu />
        </Box>
      ) : (
        <Drawer
          container={container}
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          <Menu />
        </Drawer>
      )}
    </Box>
  );
}
