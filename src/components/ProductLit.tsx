import { DataType } from "@/types";
import { Box } from "@mui/material";
import { useState } from "react";
import { Flex } from "./Flex";
import { ProductItem } from "./ProductItem";

type ProductListProps = DataType;

const tabs = [
  {
    label: "Tạo bởi shop",
    value: 1,
  },
  {
    label: "Tạo bởi tôi",
    value: 2,
  },
];

export function ProductList({ data }: { data: ProductListProps }) {
  const [tabValue, setTabValue] = useState(tabs[0].value);

  const handleClickTab = (value: number) => {
    setTabValue(value);
  };

  return (
    <Box>
      {tabs.map((item) => (
        <Box
          key={item.value}
          component="div"
          onClick={() => handleClickTab(item.value)}
          sx={{
            cursor: "pointer",
            py: 2,
            px: 4,
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            display: "inline-block",
            fontSize: 18,
            lineHeight: "28px",
            fontWeight: 700,
            fontFamily: "Inter",
            backgroundColor: tabValue === item.value ? "#fff" : "#E8EAEB",
            color: tabValue === item.value ? "#0076DC" : "#666666",
          }}
        >
          {item.label}
        </Box>
      ))}
      <Flex flexDirection="column" gap={{ xs: 1, lg: 5 }}>
        {data.map((item, index) => (
          <ProductItem key={item.name} {...item} index={index} />
        ))}
      </Flex>
    </Box>
  );
}
