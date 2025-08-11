import React from "react";
import { LayoutDashboard, MessageSquare, Package2, Settings, ShoppingCart, TrendingUp } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      id: "sales",
      label: "Sales Agent",
      icon: <ShoppingCart size={20} />,
    },
    {
      id: "inventory",
      label: "Inventory Agent",
      icon: <Package2 size={20} />,
    },
    {
      id: "marketing",
      label: "Marketing Agent",
      icon: <TrendingUp size={20} />,
    },
    {
      id: "farcaster",
      label: "Farcaster",
      icon: <MessageSquare size={20} />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings size={20} />,
    },
  ];
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-blue-600">Base Commerce AI</h1>
        <p className="text-xs text-gray-500">Merchant Operating System</p>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                className={`w-full flex items-center p-2 rounded-md ${
                  activeTab === item.id ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
            M
          </div>
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-700">Merchant Store</p>
            <p className="text-xs text-gray-500">@merchant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
