import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "moon — Brand & Digital Designer",
  description: "브랜드의 감각을 발견하고 디지털 경험과 시스템으로 완성하는 디자이너 moon입니다.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
