import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 pt-20 max-w-5xl">
        {children}
      </main>{" "}
    </>
  );
}
