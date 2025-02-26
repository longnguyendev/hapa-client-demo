import { Avatar, Box, Stack, Typography } from "@mui/material";

import { IconName } from "../Icon";
import { Logo } from "../Logo";
import Scrollbar from "../Scrollbar/scrollbar";
import { NavItem as Item } from "./NavItem";
import { Flex } from "../Flex";
import { MoneyBag } from "@/assets/icons";

import avatar from "@/assets/images/avatar.png";

export interface NavItem {
  title: string;
  path: string;
  icon: IconName;
}

const navItems: NavItem[] = [
  {
    title: "Trang chủ",
    path: "/",
    icon: "Home",
  },
  {
    title: "Thời gian thay lõi",
    path: "/calender",
    icon: "Calender",
  },
  {
    title: "Lịch sử đơn hàng",
    path: "/history",
    icon: "Clock",
  },
  {
    title: "Điểm tích lũy",
    path: "/point",
    icon: "MoneyBag",
  },
  {
    title: "Tài khoản",
    path: "/account",
    icon: "Account",
  },
  {
    title: "Tính năng khác",
    path: "/another",
    icon: "Another",
  },
];

export function Menu() {
  return (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Flex justifyContent="center" width="100%" pt={3} pb={4}>
        <Logo />
      </Flex>
      <Flex alignItems="center" gap="6px" sx={{ mx: 1, mb: 2 }}>
        <Avatar src={avatar} />
        <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
          Nguyễn Huỳnh Như
        </Typography>
      </Flex>
      <Stack component="nav" spacing={0.5} sx={{ px: 1 }}>
        {navItems.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </Stack>
      <Flex
        mt={9}
        alignItems="center"
        sx={{
          backgroundColor: "#FFF8D4",
          borderRadius: "12px",
          height: 55,
          mx: 1,
          px: 0.5,
        }}
      >
        <MoneyBag sx={{ fontSize: 30 }} />
        <Stack>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: 13,
              ml: 0.5,
            }}
          >
            Tổng điểm tích lũy{" "}
            <Typography
              component="span"
              sx={{
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              187.000
            </Typography>{" "}
            điểm
          </Typography>
        </Stack>
      </Flex>
      <Typography
        sx={{
          mt: 2,
          fontSize: 12,
          fontFamily: "Inter",
          fontWeight: 300,
          color: "text.secondary",
          textAlign: "center",
        }}
      >
        Hotline: 0977.190.775
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );
}
