import { Location } from "@/assets/icons";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Collapse, IconButton, Stack, Typography } from "@mui/material";
import { Flex } from "./Flex";
import { Table } from "./Table";
import { useState } from "react";
import { DataType } from "@/types";

type ProductItemProps = DataType[0] & {
  index: number;
};

export function ProductItem(data: ProductItemProps) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      width="100%"
      p={4}
      sx={{
        bgcolor: "#fff",
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
        boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.16);",
      }}
    >
      <Flex alignItems="center" flexGrow={1} justifyContent="space-between">
        <Flex alignItems="center" gap="12px">
          <Location sx={{ fontSize: 38 }} />
          <Stack spacing={1} sx={{ mb: { xs: 2, lg: 0 } }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: 20,
              }}
            >
              Address {data.index + 1}
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 400,
                color: "text.secondary",
              }}
            >
              {data.address}
            </Typography>
          </Stack>
        </Flex>
        <Flex alignSelf="flex-start">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
          <IconButton onClick={handleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Flex>
      </Flex>
      <Collapse in={open}>
        <Table {...data} />
      </Collapse>
    </Box>
  );
}
