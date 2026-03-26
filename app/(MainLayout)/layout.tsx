import Navbar from "@/shared/navbar/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F9FA] dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
