import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { auth } from "@/services/auth";
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
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <AppTheme>
            <SwrConfigProvider>
              <AuthProvider>
                {session?.user && <Navbar />}
                {children}
              </AuthProvider>
            </SwrConfigProvider>
          </AppTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
