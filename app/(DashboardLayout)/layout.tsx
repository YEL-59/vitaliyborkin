import DashboardNavbar from "@/shared/navbar/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F9FA] dark:bg-gray-950 transition-colors duration-300">
      <DashboardNavbar />
      <div className="flex flex-1">
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
