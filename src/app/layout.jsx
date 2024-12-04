import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Navbar from "../components/NavBar/Navbar";
import AppTheme from "@/MuiTheme/AppTheme";
import SwrConfigProvider from "@/services/SwrConfigProvider";
import { AuthProvider } from "@/components/Auth/AuthProvider";

export const metadata = {
  title: "City Vibe",
  description: "Explore, save, and share your favorite urban destinations.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <SwrConfigProvider>
            <AuthProvider>
              <AppTheme>
                <Navbar />
                {children}
              </AppTheme>
            </AuthProvider>
          </SwrConfigProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
