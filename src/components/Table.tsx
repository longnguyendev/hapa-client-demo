import { Box, Chip, Typography } from "@mui/material";
import { Flex } from "./Flex";
import { calculateDaysLeft } from "@/helpers";
import { useResponsive } from "@/hooks";
import { Calender2, Circle, Clock2, Tag } from "@/assets/icons";

interface TableProps {
  image: string;
  name: string;
  items: Array<{
    id: number;
    image: string;
    name: string;
    lastChange: string;
    circle: string;
    nextChange: string;
    cost: number;
  }>;
}

export function Table({ image, name, items }: TableProps) {
  return (
    <Box
      component="table"
      style={{ width: "100%", borderCollapse: "collapse" }}
      sx={{
        backgroundColor: "#F6F6F6",
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
      }}
    >
      <Box
        component="thead"
        sx={{ display: { xs: "none", lg: "table-header-group" } }}
      >
        <Box
          component="tr"
          sx={{
            th: {
              color: "text.secondary",
              fontSize: "14px",
              py: "22px",
              px: "8px",
            },
            backgroundColor: "#fff",
          }}
        >
          <th style={{ width: "50px" }}></th>
          <th align="center">Sản phẩm dịch vụ</th>
          <th align="right">Ngày thay gần nhất</th>
          <th align="left">Chu kỳ thay thế</th>
          <th align="left">Ngày thay tiếp theo</th>
          <th align="left">Đơn giá</th>
          <th style={{ width: "16px" }}></th>
        </Box>
      </Box>
      <tbody>
        <Box
          component={"tr"}
          sx={{
            backgroundColor: "#F6F6F6",
            td: {
              py: "16px",
            },
          }}
        >
          <td colSpan={6} style={{ textAlign: "center", fontWeight: "bold" }}>
            <Flex alignItems="center">
              <Box
                sx={{
                  flexShrink: 0,
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginLeft: "16px",
                  marginRight: "8px",
                  width: "50px",
                  height: "50px",
                }}
              >
                <Box
                  component="img"
                  src={image}
                  sx={{
                    objectFit: "cover",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  textAlign: "left",
                  color: "text.secondary",
                  fontWeight: 300,
                  fontFamily: "Inter",
                  fontSize: { xs: 14, lg: 20 },
                }}
              >
                {name}
              </Typography>
            </Flex>
          </td>
        </Box>
        {Rows(items)}
        <tr>
          <Box
            component="td"
            colSpan={7}
            sx={{
              backgroundColor: "#F6F6F6",
              height: 16,
              borderBottomLeftRadius: "16px",
              borderBottomRightRadius: "16px",
            }}
          />
        </tr>
      </tbody>
    </Box>
  );
}

type RowsProps = Array<{
  id: number;
  image: string;
  name: string;
  lastChange: string;
  circle: string;
  nextChange: string;
  cost: number;
}>;

function Rows(rows: RowsProps) {
  const isMobile = useResponsive("down", "lg");

  return rows.map((item, index) => {
    const {
      diffDays,
      bgColor,
      labelColor,
      labelBgColor,
      labelBorder,
      labelFontWeight,
      color,
    } = calculateDaysLeft(item.nextChange);
    return (
      <Box
        key={item.id}
        component="tr"
        sx={{
          backgroundColor: bgColor,
          td: {
            p: "8px",
            fontSize: 16,
            fontWeight: 700,
            color,
          },
        }}
      >
        {index === 0 && (
          <Box
            component="td"
            rowSpan={rows.length}
            sx={{ backgroundColor: "#F6F6F6" }}
          />
        )}
        <Box
          component="td"
          sx={{
            borderTopLeftRadius: index === 0 ? "16px" : "0",
            borderBottomLeftRadius: index === rows.length - 1 ? "16px" : 0,
            ...(isMobile && {
              borderTopRightRadius: index === 0 ? "16px" : 0,
              borderBottomRightRadius: index === rows.length - 1 ? "16px" : 0,
            }),
          }}
          {...(isMobile && {
            colSpan: 5,
          })}
        >
          <Flex alignItems="center">
            <Box
              sx={{
                flexShrink: 0,
                backgroundColor: "#fff",
                borderRadius: "8px",
                overflow: "hidden",
                marginLeft: "16px",
                marginRight: "8px",
                width: "50px",
                height: "50px",
                mb: {
                  xs: "auto",
                  lg: "none",
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                sx={{
                  objectFit: "cover",
                  width: "50px",
                  height: "50px",
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "Inter",
                  color: "text.primary",
                  fontSize: {
                    xs: "14px",
                    lg: "16px",
                  },
                }}
              >
                {item.name}
              </Typography>
              {isMobile && (
                <Box mt="13px">
                  <Flex alignItems="center" columnGap={1}>
                    <Circle sx={{ fontSize: 12 }} />
                    <Typography variant="caption" sx={{ lineHeight: "28px" }}>
                      {item.lastChange}
                    </Typography>
                  </Flex>
                  <Flex alignItems="center" columnGap={1}>
                    <Clock2 sx={{ fontSize: 12 }} />
                    <Typography variant="caption" sx={{ lineHeight: "28px" }}>
                      {item.circle}
                    </Typography>
                  </Flex>
                  <Flex alignItems="center" columnGap={1}>
                    <Calender2 sx={{ fontSize: 12 }} />
                    <Flex alignItems="center" gap="6px">
                      <Typography
                        variant="caption"
                        sx={{
                          lineHeight: "28px",
                          color: labelColor,
                          fontWeight: 700,
                        }}
                      >
                        {item.nextChange}
                      </Typography>
                      <Chip
                        label={diffDays}
                        size="small"
                        variant="outlined"
                        sx={{
                          backgroundColor: labelBgColor,
                          borderColor: labelBorder,
                          color: labelColor,
                          height: 19,
                          fontWeight: labelFontWeight,
                          fontSize: "10px",
                        }}
                      />
                    </Flex>
                  </Flex>
                  <Flex alignItems="center" columnGap={1}>
                    <Tag sx={{ fontSize: 12 }} />
                    <Typography variant="caption" sx={{ lineHeight: "28px" }}>
                      {item.cost.toLocaleString("en-US")}đ
                    </Typography>
                  </Flex>
                </Box>
              )}
            </Box>
          </Flex>
        </Box>
        {!isMobile && (
          <>
            <td align="right">{item.lastChange}</td>
            <td align="left">{item.circle}</td>
            <td>
              <Flex alignItems="center" gap="6px">
                <Typography sx={{ color: labelColor, fontWeight: 700 }}>
                  {item.nextChange}
                </Typography>
                <Chip
                  label={diffDays}
                  size="small"
                  variant="outlined"
                  sx={{
                    backgroundColor: labelBgColor,
                    borderColor: labelBorder,
                    color: labelColor,
                    height: 28,
                    fontWeight: labelFontWeight,
                    px: 1,
                  }}
                />
              </Flex>
            </td>
            <Box
              component="td"
              sx={{
                borderTopRightRadius: index === 0 ? "16px" : "0",
                borderBottomRightRadius: index === rows.length - 1 ? "16px" : 0,
              }}
            >
              {item.cost.toLocaleString("en-US")}đ
            </Box>
          </>
        )}
      </Box>
    );
  });
}
