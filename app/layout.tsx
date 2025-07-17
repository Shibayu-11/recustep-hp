import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'リクステップ | HP/LP制作、システム開発、採用業務の一括依頼',
  description: 'リクステップは、HP/LP制作、システム開発、Artbloom、採用業務の一括依頼、面接代行サービスを提供しています。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}