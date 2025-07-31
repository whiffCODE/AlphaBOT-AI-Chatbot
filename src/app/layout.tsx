import "../styles/globals.css"; 
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"; // optional, only if using theme toggle

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AlphaBOT - Your AI Assistant",
  description: "Talk with AlphaBOT: Your real-time AI chatbot assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen flex flex-col items-center justify-start p-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
