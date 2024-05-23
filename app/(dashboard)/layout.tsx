import { Header } from "@/components/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">
        <h1>Dashboard Layout</h1>
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
