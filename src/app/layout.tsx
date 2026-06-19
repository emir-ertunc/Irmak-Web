import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Irmak'ın Minik Atölyesi",
  description:
    "El yapımı minik figürler, neşeli küpeler ve kişiye özel tatlı aksesuarlar."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
