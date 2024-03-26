import type { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Olexandr Tantsiura",
  description: "Olexandr Tantsiura -- Software Development Engineer (Front-end) -- CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
