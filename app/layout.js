import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar";
import AppTheme from "@/MuiTheme/AppTheme";

export const metadata = {
  title: "City Vibe",
  description: "Explore, save, and share your favorite urban destinations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <AppTheme>
            <Navbar />
            {children}
          </AppTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
