import type { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Olexandr Tantsiura CV",
  description: "Olexandr Tantsiura -- Software Development Engineer (Front-End) -- CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
