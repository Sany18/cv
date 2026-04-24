import type { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Tantsiura Olexandr — CV",
  description: "Tantsiura Olexandr — Software Systems Engineer (Web / 3D) — CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
