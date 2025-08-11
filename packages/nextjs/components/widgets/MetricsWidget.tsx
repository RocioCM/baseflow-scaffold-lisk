import React from "react";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

export function MetricsWidget() {
  const metrics = [
    {
      id: "1",
      name: "Revenue",
      value: "0.85 ETH",
      change: "+12%",
      icon: <DollarSign size={20} className="text-blue-600" />,
    },
    {
      id: "2",
      name: "Orders",
      value: "24",
      change: "+8%",
      icon: <ShoppingCart size={20} className="text-green-600" />,
    },
    {
      id: "3",
      name: "Customers",
      value: "18",
      change: "+15%",
      icon: <Users size={20} className="text-purple-600" />,
    },
    {
      id: "4",
      name: "Conversion",
      value: "3.2%",
      change: "+0.5%",
      icon: <TrendingUp size={20} className="text-orange-600" />,
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map(metric => (
          <div key={metric.id} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-full bg-white">{metric.icon}</span>
              <span className="text-xs font-medium text-green-600">{metric.change}</span>
            </div>
            <p className="text-sm text-gray-600">{metric.name}</p>
            <p className="text-xl font-bold text-gray-800">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
