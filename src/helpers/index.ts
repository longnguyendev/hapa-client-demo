import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const calculateDaysLeft = (
  nextChange: string
): {
  diffDays: string;
  bgColor: string;
  labelBgColor: string;
  labelBorder: string;
  labelColor: string;
  color: string;
  labelFontWeight: number;
} => {
  const nextChangeDate = dayjs(nextChange, "DD/MM/YYYY").toDate();
  const today = new Date();

  const diffTime = nextChangeDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) {
    return {
      diffDays: `trễ ${Math.abs(diffDays)} ngày`,
      bgColor: "#FFAEB8",
      labelBgColor: "#FFFFFF",
      color: "#333333",
      labelBorder: "#FFAEB8",
      labelFontWeight: 700,
      labelColor: "#FF0041",
    };
  } else if (diffDays <= 15) {
    return {
      diffDays: `chỉ còn ${Math.abs(diffDays)} ngày`,
      bgColor: "#FFFCE9",
      labelBgColor: "#FFFCE9",
      color: "#999999",
      labelBorder: "#FEE99C",
      labelFontWeight: 700,
      labelColor: "#E9A30B",
    };
  } else {
    return {
      diffDays: `còn ${Math.abs(diffDays)} ngày`,
      bgColor: "#FFFFFF",
      color: "#999999",
      labelBgColor: "#F0FDF9",
      labelBorder: "#82FCD1",
      labelFontWeight: 400,
      labelColor: "#00CB77",
    };
  }
};
