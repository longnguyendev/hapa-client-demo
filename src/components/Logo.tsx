import { Link } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { forwardRef } from "react";

import logoSVG from "../assets/images/hapa-logo.png";

interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

export const Logo = forwardRef(
  ({ disabledLink = false, sx, ...props }: LogoProps, ref) => {
    const logo = (
      <Box
        ref={ref}
        component="img"
        src={logoSVG}
        sx={{ width: 112, height: 24, cursor: "pointer", ...sx }}
        {...props}
      />
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link href="/" sx={{ display: "contents" }}>
        {logo}
      </Link>
    );
  }
);
