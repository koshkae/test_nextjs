import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import MenuContextProvider from "@/context/MenuContext";

export const metadata = {
  title: "NextJS tailwind sandbok",
  description: "hope i can kill it for only 2 days",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
