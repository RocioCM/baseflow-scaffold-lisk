import React from "react";
import { AlertTriangle, BarChart3, TrendingUp } from "lucide-react";

export function InventoryAgent() {
  const lowStockItems = [
    {
      id: "1",
      name: "Black T-shirt (L)",
      stock: 3,
      reorderPoint: 5,
    },
    {
      id: "2",
      name: "Logo Stickers",
      stock: 10,
      reorderPoint: 20,
    },
    {
      id: "3",
      name: "Hoodie (M)",
      stock: 2,
      reorderPoint: 5,
    },
  ];
  const topSellingItems = [
    {
      id: "1",
      name: "Black T-shirt",
      sold: 24,
      trend: "up",
    },
    {
      id: "2",
      name: "Logo Hoodie",
      sold: 18,
      trend: "up",
    },
    {
      id: "3",
      name: "Cap",
      sold: 12,
      trend: "down",
    },
    {
      id: "4",
      name: "Sticker Pack",
      sold: 10,
      trend: "stable",
    },
  ];
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Inventory Agent</h1>
        <p className="text-gray-600">Your AI assistant for stock management and demand forecasting</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Chat Interface */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">AI Assistant</h2>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Online</span>
          </div>
          <div className="h-64 border border-gray-200 rounded-md p-3 mb-4 overflow-y-auto bg-gray-50">
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">AI Assistant</p>
              <div className="bg-blue-50 p-2 rounded-md text-gray-800">
                I&lsquo;ve analyzed your inventory and have some updates:
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>3 items are running low on stock</li>
                  <li>Based on recent sales, you should reorder Black T-shirts</li>
                  <li>Your Logo Hoodies are selling faster than expected</li>
                </ul>
                Would you like me to prepare a restock order?
              </div>
            </div>
            <div className="mb-3 text-right">
              <p className="text-xs text-gray-500 mb-1">You</p>
              <div className="bg-gray-200 p-2 rounded-md inline-block text-gray-800">
                Yes, please prepare a restock order for all low stock items
              </div>
            </div>
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">AI Assistant</p>
              <div className="bg-blue-50 p-2 rounded-md text-gray-800">
                I&lsquo;ve prepared a restock order:
                <br />
                - 20× Black T-shirt (L) - $300
                <br />
                - 50× Logo Stickers - $75
                <br />
                - 15× Hoodie (M) - $450
                <br />
                <br />
                Total: $825
                <br />
                Should I submit this to your supplier?
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a command or question..."
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">Send</button>
          </div>
        </div>
        {/* Inventory Stats */}
        <div className="space-y-6">
          {/* Low Stock Alert */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <AlertTriangle size={18} className="mr-2 text-orange-500" />
                Low Stock Alert
              </h2>
              <button className="text-sm text-blue-600 hover:underline">Reorder All</button>
            </div>
            <div className="divide-y divide-gray-200">
              {lowStockItems.map(item => (
                <div key={item.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">Reorder point: {item.reorderPoint}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-orange-500">{item.stock} left</p>
                    <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">
                      Reorder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Top Selling Items */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <TrendingUp size={18} className="mr-2 text-blue-600" />
                Top Selling Items
              </h2>
              <button className="text-sm text-blue-600 hover:underline">Full Report</button>
            </div>
            <div className="divide-y divide-gray-200">
              {topSellingItems.map(item => (
                <div key={item.id} className="py-3 flex items-center justify-between">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <div className="flex items-center">
                    <p className="font-medium mr-2">{item.sold} sold</p>
                    {item.trend === "up" && <TrendingUp size={16} className="text-green-500" />}
                    {item.trend === "down" && <TrendingUp size={16} className="text-red-500 transform rotate-180" />}
                    {item.trend === "stable" && <BarChart3 size={16} className="text-blue-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
