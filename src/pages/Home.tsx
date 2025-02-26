import { Logo } from "@/assets/icons";
import { Flex, ProductList } from "@/components";
import { DataType } from "@/types";
import { Box, Typography } from "@mui/material";

const data: DataType = [
  {
    address:
      "***, Tân Hưng, Quận 7, TP. Hồ Chí Minh  ·  L******n   ·   *******975  ···  Plan ID: ABC12345",
    id: 1,
    image:
      "https://bizweb.dktcdn.net/100/075/453/products/kg107as.jpg?v=1646385601027",
    name: "Combo Máy Lọc Nước Đầu Nguồn 3M AP904 + Bộ Lọc Thô 3M",
    items: [
      {
        image:
          "https://bizweb.dktcdn.net/100/075/453/products/kg107as.jpg?v=1646385601027",
        name: "Lõi lọc 3M RT20B6G20NN 20”",
        lastChange: "18/06/2024",
        circle: "6 tháng",
        nextChange: "18/12/2024",
        cost: 880000,
        id: 1,
      },
      {
        image:
          "https://bizweb.dktcdn.net/100/075/453/products/kg107as.jpg?v=1646385601027",
        name: "Lõi lọc 3M RT20B6G20NN 20”",
        lastChange: "18/06/2024",
        circle: "6 tháng",
        nextChange: "18/06/2025",
        cost: 880000,
        id: 2,
      },
      {
        image:
          "https://bizweb.dktcdn.net/100/075/453/products/kg107as.jpg?v=1646385601027",
        name: "Lõi lọc 3M RT20B6G20NN 20”",
        lastChange: "18/06/2024",
        circle: "6 tháng",
        nextChange: "10/03/2025",
        cost: 880000,
        id: 3,
      },
    ],
  },
  {
    address:
      "***, Bến Thành, Quận 1, TP. Hồ Chí Minh  ·  T******c   ·   *******065  ···  Plan ID: ABC686868",
    id: 1,
    image:
      "https://bizweb.dktcdn.net/100/075/453/products/kg107as.jpg?v=1646385601027",
    name: "Máy Lọc Nước 3M BREW120-MS",
    items: [
      {
        image:
          "https://bizweb.dktcdn.net/100/075/453/products/kg107as.jpg?v=1646385601027",
        name: "Lõi lọc 3M HF20-MS",
        lastChange: "20/09/2024",
        circle: "12 tháng",
        nextChange: "20/09/2025",
        cost: 2580000,
        id: 1,
      },
    ],
  },
];

export function HomePage() {
  return (
    <>
      <Box
        position="absolute"
        sx={{
          overflow: "hidden",
          top: 0,
          left: 0,
          bottom: 0,
          height: 368,
          width: "100%",
          background:
            "linear-gradient(360deg, #F3F5F7 0%, #7AB6EA 25%, #0076DC 50%)",
          zIndex: -1,
        }}
      >
        <Typography
          pt={10}
          sx={{
            px: 5,
            fontSize: 40,
            fontWeight: 700,
            fontFamily: "Inter",
            color: "#fff",
          }}
        >
          Thay lõi lọc định kỳ
        </Typography>
        <Logo
          sx={{
            position: "absolute",
            top: 0,
            left: 700,
            width: 252,
            height: 316,
          }}
        />
      </Box>
      <Flex mx={5} flexDirection="column" gap={5} mt={25}>
        <ProductList data={data} />
      </Flex>
    </>
  );
}
