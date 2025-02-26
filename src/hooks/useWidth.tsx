import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export function useWidth(): Breakpoint {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse() as Breakpoint[];

  return (
    keys.reduce<Breakpoint | null>((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || "xs"
  );
}
