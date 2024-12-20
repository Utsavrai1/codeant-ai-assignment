import {
  Home,
  Code2,
  Cloud,
  Settings,
  BookTextIcon,
  Phone,
  LogOut,
} from "lucide-react";
import { cn } from "../lib/utils";
import { codeantai } from "@/assets";
import UsernameSelection from "./username";

interface SidebarProps {
  className?: string;
}
export function Sidebar({ className }: SidebarProps) {
  const navigation = [
    { name: "Repositories", icon: Home, current: true },
    { name: "AI Code Review", icon: Code2, current: false },
    { name: "Cloud Security", icon: Cloud, current: false },
    { name: "How to Use", icon: BookTextIcon, current: false },
    { name: "Settings", icon: Settings, current: false },
  ];

  const bottomNav = [
    { name: "Support", icon: Phone },
    { name: "Logout", icon: LogOut },
  ];

  return (
    <div className={cn("flex h-full flex-col bg-white", className)}>
      <div className="flex h-16 shrink-0 items-center gap-2 px-4">
        <img className="h-8 w-8" src={codeantai} alt="CodeAnt AI" />
        <span className="font-semibold">CodeAnt AI</span>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-2">
        <UsernameSelection />
        {navigation.map((item) => (
          <a
            key={item.name}
            href="#"
            className={cn(
              item.current
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-300",
              "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium"
            )}
          >
            <item.icon
              className={cn(
                item.current
                  ? "text-white"
                  : "text-gray-400 group-hover:text-gray-500",
                "h-5 w-5 shrink-0"
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </nav>
      <nav className="space-y-1 px-2 pb-2">
        {bottomNav.map((item) => (
          <a
            key={item.name}
            href="#"
            className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <item.icon
              className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
