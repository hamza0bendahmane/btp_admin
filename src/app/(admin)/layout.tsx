import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/NavBar";
import SideBar from "@/components/shared/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-start">
      <SideBar />
      <div className="ml-[90px] w-full flex flex-col gap-4 bg-background ">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
}
