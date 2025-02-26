import Box, { BoxProps } from "@mui/material/Box";
import { forwardRef, memo } from "react";

import { StyledRootScrollbar, StyledScrollbar } from "./styles";

type ScrollbarProps = {} & BoxProps;

const Scrollbar = forwardRef(({ sx, ...props }: ScrollbarProps, ref) => {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

  const mobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (mobile) {
    return <Box ref={ref} sx={{ overflow: "auto", ...sx }} {...props} />;
  }

  return (
    <StyledRootScrollbar>
      <Box
        component={StyledScrollbar}
        scrollableNodeProps={{
          ref,
        }}
        clickOnTrack={false}
        sx={sx}
        {...props}
      />
    </StyledRootScrollbar>
  );
});

export default memo(Scrollbar);
