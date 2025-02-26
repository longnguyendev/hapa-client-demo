import Box, { BoxProps } from "@mui/material/Box";

import { NAV } from "@/constants";
import { useResponsive } from "@/hooks";

export function Main({ sx, ...props }: BoxProps) {
  const lgUp = useResponsive("up", "lg");

  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        flexGrow: 1,
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...props}
    />
  );
}
