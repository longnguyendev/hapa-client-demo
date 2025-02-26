import { CircularProgress } from "@mui/material";
import { Suspense, useState } from "react";

import { Flex, Header, Main } from "@/components";
import { Nav } from "@/components/Nav";

import { Outlet } from "react-router";

interface BaseLayoutProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export function BaseLayout({ window }: BaseLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <Header onOpenNav={handleDrawerToggle} />
      <Flex flexDirection={{ xs: "column", lg: "row" }} minHeight={1}>
        <Nav window={window} open={mobileOpen} onClose={handleDrawerToggle} />
        <Main>
          <Suspense
            fallback={
              <Flex
                sx={{
                  position: "absolute",
                  inset: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress color="primary" />
              </Flex>
            }
          >
            <Outlet />
          </Suspense>
        </Main>
      </Flex>
    </>
  );
}
