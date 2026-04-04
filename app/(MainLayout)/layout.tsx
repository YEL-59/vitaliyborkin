import LandingNavbar from "@/shared/navbar/LandingNavbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#F8F9FA] dark:bg-gray-950 transition-colors duration-300">
      <LandingNavbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
