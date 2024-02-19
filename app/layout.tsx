import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akilesh Jayakumar",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-white-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          className="bg-[#fbe2e3] absolute top-[-20rem] 
        right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full 
        blur-[100rem] sm:w-[68.75rem] dark:bg-[#c6dd94]"
        ></div>
        <div
          className="bg-[#000000] absolute top-[-1rem] -z-10 left-[-35rem] 
        h-[31.25rem] w-[50rem] rounded-full blur-[100rem] sm:w-[68.75rem] md:left-[-33rem] 
        lg:left-[-2rem] xl:left-[-1rem] 2xl:left-[-5rem] dark:bg-[#e56262]"
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
