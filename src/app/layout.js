import RealtimeVFX from "@/components/layout/RealtimeVFX";

import { Geist, Geist_Mono, Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
;



const geistSans = Geist( {
  variable: "--font-geist-sans",
  subsets: ["latin"],
} );

const geistMono = Geist_Mono( {
  variable: "--font-geist-mono",
  subsets: ["latin"],
} );

const montserrat = Montserrat( {
  subsets: ["latin"]
} );

const poppins = Poppins( {
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
} );

const inter = Inter( {
  subsets: ["latin"]
} );

export const metadata = {
  title: "Real Time VFX",
  description: "At REAL TIME VFX, we see VFX as more than just a task—it’s an art form that demands passion, precision, and creativity. Unlike conventional studios, we approach every project as a unique opportunity to merge technical expertise with artistic vision. Our team of skilled artists and innovators ensures that every frame is crafted with dedication, bringing stories to life with unparalleled depth and realism.",
};

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} antialiased`}
      >
        <RealtimeVFX>
          {/* <ScrollContainer> */}


          {children}

          {/* </ScrollContainer> */}
        </RealtimeVFX>
      </body>
    </html>
  );
}
