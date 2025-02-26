import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { HEADER } from "@/constants";
import { Flex } from "./Flex";
import { LogoMobile } from "./LogoMobile";

export function Header({ onOpenNav }: { onOpenNav: () => void }) {
  const theme = useTheme();

  const renderContent = (
    <Flex
      alignItems="center"
      flex={1}
      mb={2}
      sx={{ display: { xs: "flex", lg: "none" } }}
    >
      <LogoMobile />
      <Box sx={{ flexGrow: 1 }} />
      <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </Flex>
  );

  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
