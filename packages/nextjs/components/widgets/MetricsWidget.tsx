import React from "react";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

interface MetricsWidgetProps {
  metrics?: {
    revenue: number;
    orders: number;
    customers: number;
  };
  loading?: boolean;
}

export function MetricsWidget({ metrics, loading }: MetricsWidgetProps) {
  // Fallback to default values if no metrics provided
  const defaultMetrics = [
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

  const metricsData = metrics
    ? [
        {
          id: "1",
          name: "Revenue",
          value: `$${metrics.revenue.toFixed(2)} USDC`,
          change: "+12%",
          icon: <DollarSign size={20} className="text-blue-600" />,
        },
        {
          id: "2",
          name: "Orders",
          value: metrics.orders.toString(),
          change: "+8%",
          icon: <ShoppingCart size={20} className="text-green-600" />,
        },
        {
          id: "3",
          name: "Customers",
          value: metrics.customers.toString(),
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
      ]
    : defaultMetrics;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Dashboard Overview</h2>
      {loading ? (
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100 animate-pulse">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="w-16 h-4 bg-gray-200 rounded mb-1"></div>
              <div className="w-12 h-6 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {metricsData.map(metric => (
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
      )}
    </div>
  );
}
