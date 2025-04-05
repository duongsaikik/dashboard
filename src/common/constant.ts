import { MenuItem } from "@/types";

export const LOGO =
  "https://s3-alpha-sig.figma.com/img/103f/c60d/7901bd954342f61923468c226115a911?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m2YaYPwTLW0H6B4~YiqSPoapYF58tKJVdC9u1RmkBmGtpWZPDYfcruvhfG1k5RJz0FaUjs4hPt2iCtFn~TInykNha1kWW4ZPt9pVz~5Og-5tN7ipK335t5zbRrQ4MvadRO7sQDy9qYdYDv-YuYMz3t1P~Jd~RTDtJHq9Igtf0j8PpYBEDr689orWBdygKMkfNE7qlM9miUcG1AQNro~JKl5~ly8aYEIumzD9k1EqoCvRRlyF8fcWcpaUHawETdiPTKvp2JA1ZP1Tlu6~BSlMY24QAddY--dn19wsn4kN~G4emXoYcEpnazwXwn6uJPe-i1C-b3Jm1OGZ54nqoo2umg__";

export const COLOR_CODES = {
  LIGHT_BLUE: "#0375F3",
  LIGHT_GREEN: "#1FC583",
  ORANGE: "#FF8F0D",
  PRIMARY: "#003DA0",
};

export const HEADER_MENU_ITEMS: MenuItem[] = [
  { value: "dashboard", label: "Doanh mục" },
  { value: "sales", label: "Bán & Xuất hàng" },
  { value: "purchases", label: "Mua & Nhập hàng" },
  { value: "inventory", label: "Kho & Sản xuất" },
  { value: "accounting", label: "Kế toán" },
  { value: "reports", label: "Báo cáo & Thống kê" },
  { value: "utilities", label: "Tiền ích" },
];

export const PATHS = {
  DASHBOARD: "/dashboard",
};

export const NO_DATA = 'Chưa có mặt hàng'