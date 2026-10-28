// @ts-expect-error CSS imports are handled by the Next.js bundler.
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
