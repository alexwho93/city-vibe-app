import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar";
import AppTheme from "@/MuiTheme/AppTheme";
import SwrConfigProvider from "@/app/services/SwrConfigProvider";

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
            <SwrConfigProvider>
              <Navbar />
              {children}
            </SwrConfigProvider>
          </AppTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
