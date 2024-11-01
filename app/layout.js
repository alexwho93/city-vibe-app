import "./globals.css";

export const metadata = {
  title: "City Vibe",
  description: "Explore, save, and share your favorite urban destinations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
