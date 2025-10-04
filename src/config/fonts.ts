import { Tajawal } from "next/font/google";

// Beautiful modern font for both Arabic and English
export const primaryFont = Tajawal({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  display: "swap"
});
