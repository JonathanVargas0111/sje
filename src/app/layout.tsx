
import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import "./globals.css";
import Footer from "@/components/ui/footer/Footer";
import { Sidebar } from "@/components/ui/sidebar/Sidebar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <TopMenu />
        <Sidebar />
        <div className="px-0 sm:px-7">
          {children}

        </div>
        <Footer />
      </body>
    </html >
  );
}
