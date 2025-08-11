import React from "react";
import { MessageSquare, ShoppingBag } from "lucide-react";

export function SalesAgent() {
  const recentOrders = [
    {
      id: "1",
      customer: "@alex",
      items: "2 T-shirts",
      total: "0.015 ETH",
      status: "Paid",
    },
    {
      id: "2",
      customer: "@sarah",
      items: "1 Hoodie",
      total: "0.025 ETH",
      status: "Processing",
    },
    {
      id: "3",
      customer: "@mike",
      items: "3 Stickers",
      total: "0.005 ETH",
      status: "Shipped",
    },
  ];
  const customerMessages = [
    {
      id: "1",
      customer: "@alex",
      message: "Do you have this in red?",
      time: "5m ago",
    },
    {
      id: "2",
      customer: "@taylor",
      message: "When will my order ship?",
      time: "20m ago",
    },
    {
      id: "3",
      customer: "@jordan",
      message: "Can I get a refund?",
      time: "1h ago",
    },
  ];
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Sales Agent</h1>
        <p className="text-gray-600">Your AI assistant for orders, invoices, and customer service</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chat Interface */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">AI Assistant</h2>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Online</span>
          </div>
          <div className="h-64 border border-gray-200 rounded-md p-3 mb-4 overflow-y-auto bg-gray-50">
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">AI Assistant</p>
              <div className="bg-blue-50 p-2 rounded-md text-gray-800">
                Good morning! Here&lsquo;s your sales summary:
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>5 new orders overnight</li>
                  <li>2 customers waiting for responses</li>
                  <li>Revenue: 0.15 ETH (≈$300)</li>
                </ul>
                What would you like me to help with today?
              </div>
            </div>
            <div className="mb-3 text-right">
              <p className="text-xs text-gray-500 mb-1">You</p>
              <div className="bg-gray-200 p-2 rounded-md inline-block text-gray-800">
                Process order for @customer - 2 t-shirts
              </div>
            </div>
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">AI Assistant</p>
              <div className="bg-blue-50 p-2 rounded-md text-gray-800">
                Processing order for @customer:
                <br />
                - 2× T-shirts at 0.005 ETH each
                <br />
                - Total: 0.01 ETH
                <br />
                <br />
                Payment link generated and sent via Farcaster DM.
                <br />
                I&lsquo;ll notify you when payment is received.
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
        {/* Recent Activity */}
        <div className="space-y-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <ShoppingBag size={18} className="mr-2 text-blue-600" />
                Recent Orders
              </h2>
              <button className="text-sm text-blue-600 hover:underline">View all</button>
            </div>
            <div className="divide-y divide-gray-200">
              {recentOrders.map(order => (
                <div key={order.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{order.customer}</p>
                    <p className="text-sm text-gray-600">{order.items}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.total}</p>
                    <p
                      className={`text-sm ${
                        order.status === "Paid"
                          ? "text-green-600"
                          : order.status === "Processing"
                          ? "text-yellow-600"
                          : "text-blue-600"
                      }`}
                    >
                      {order.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Customer Messages */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <MessageSquare size={18} className="mr-2 text-blue-600" />
                Customer Messages
              </h2>
              <button className="text-sm text-blue-600 hover:underline">View all</button>
            </div>
            <div className="divide-y divide-gray-200">
              {customerMessages.map(msg => (
                <div key={msg.id} className="py-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-800">{msg.customer}</p>
                    <p className="text-xs text-gray-500">{msg.time}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
