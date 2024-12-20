import { Sidebar } from "@/components/dashboard/Sidebar";
import { RepositoryList } from "@/components/dashboard/RepositoryList";
import { MobileNav } from "@/components/dashboard/MobileNav";
import { codeantai } from "@/assets";

const Home = () => {
  return (
    <div className="flex h-screen bg-[#F5F5F5] overflow-hidden">
      <Sidebar className="hidden lg:flex lg:w-72 lg:flex-col" />
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between gap-4 border-b px-4 sm:px-6 lg:px-8 md:hidden">
          <div className="flex items-center gap-2 lg:hidden py-4">
            <img className="h-8 w-8" src={codeantai} alt="CodeAnt AI" />
            <span className="font-semibold">CodeAnt AI</span>
          </div>
          <MobileNav />
        </header>
        <main className="flex-1 overflow-hidden">
          <RepositoryList />
        </main>
      </div>
    </div>
  );
};

export default Home;
