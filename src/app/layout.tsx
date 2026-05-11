import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Processware — AI-Driven Process Compliance Platform",
  description:
    "어떤 표준이든, 어떤 조직이든 — 수립부터 심사까지 AI가 운영하는 프로세스 컴플라이언스 플랫폼. ISO, IATF, ASPICE, CMMI를 29개 AI 에이전트로 자동화.",
  keywords: "Processware, AI, Process Compliance, ISO, ASPICE, CMMI, IATF, SaMD, QMS, PDCA",
  openGraph: {
    title: "Processware — AI-Driven Process Compliance Platform",
    description: "수립부터 심사까지 AI가 운영하는 프로세스 컴플라이언스 플랫폼",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0e1a] text-[#e8eaf0]">
        {children}
      </body>
    </html>
  );
}
