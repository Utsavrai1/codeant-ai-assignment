import { Sidebar } from "./components/sidebar";
import { RepositoryList } from "./components/repository-list";
import { MobileNav } from "./components/mobile-nav";
import { codeantai } from "./assets";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar className="hidden lg:flex lg:w-72 lg:flex-col" />
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between gap-4 border-b bg-white px-4 sm:px-6 lg:px-8 md:hidden">
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
}
