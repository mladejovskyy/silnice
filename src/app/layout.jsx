import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], style: ["normal"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--inter" });
const poppins = Poppins({ subsets: ["latin"], style: ["normal", "italic"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--poppins" });

export const metadata = {
    title: 'Opravy Silnic Vysočina | Nejlepší Kvalita Za Skvělé Ceny',
    description: 'Poskytujeme kvalitní a cenově dostupné opravy silnic na Vysočině. Naše služby zaručují nejlepší kvalitu za skvělé ceny. Kontaktujte nás pro spolehlivou opravu vašich komunikací!',
    keywords: 'Opravy silnic Vysočina',
}

export default function RootLayout({ children }) {
    return (
        <html lang="cs" className={[inter.variable, poppins.variable]} translate="no" suppressHydrationWarning={true}>
        <body>{children}</body>
        </html>
    );
}