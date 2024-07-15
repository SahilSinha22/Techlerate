import { Inter, Bebas_Neue, Josefin_Sans, Open_Sans, Poppins  } from "next/font/google";
import "./globals.css";
import Footer from "@/app/component/Footer"
import Navbar from "@/app/component/Navbar"
const inter = Inter({ subsets: ["latin"] });


const Bebas_Neue_init=Bebas_Neue({
  subsets: ['latin'],
  weight: '400' ,
  variable: '--font-Bebas_Neue',
});
const Poppins_init=Poppins({
  subsets: ['latin'],
  weight: '600' ,
  variable: '--font-Poppins',
});

const Open_Sans_init=Open_Sans({
  subsets: ['latin'],
  weight: '500' ,
  variable: '--font-Open_Sans',
});
const Josefin_Sans_init=Josefin_Sans({
  subsets: ['latin'],
  weight: '700' ,
  variable: '--font-Josefin_Sansa',
});

export const metadata = {
  title: "Techlerate",
  description: "Techlerate gone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${Open_Sans_init.variable} ${Bebas_Neue_init.variable} ${Poppins_init.variable} ${Josefin_Sans_init.variable}`}>
    <div className="lg:hidden"> 
      <Navbar/>
    </div>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
