import type {Metadata} from 'next';
import { Noto_Sans_JP } from 'next/font/google'; // Import Noto Sans JP
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// Configure Noto Sans JP
const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'], // Using 'latin' for broader character support; use 'japanese' if needed
  weight: ['400', '700'], // Regular and Bold weights
});

export const metadata: Metadata = {
  title: 'EQT Insights Wrapped',
  description: 'Discover performance insights for EQT sectors in a visually engaging way.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
