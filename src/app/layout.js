import { Dancing_Script } from 'next/font/google';
import { Cutive } from 'next/font/google';

import "./globals.css";
import Banner from '@/Components/Banner/Banner';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'], // pesos que você vai usar
  display: 'swap',
  variable: '--font-primaria',
});

const cutive = Cutive({
  subsets: ['latin'],
  weight: ['400'], // pesos que você vai usar
  display: 'swap',
  variable: '--font-secundaria',
});

export const metadata = {
  title: "A cozinha da Jane",
  description: "site dedicado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${cutive.variable}`}>
      <body>
        <Banner/>
        {children}
      </body>
    </html>
  );
}
