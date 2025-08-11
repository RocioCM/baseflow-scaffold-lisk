import React from "react";
import { ArrowDownLeft, ArrowUpRight, Clock, Package, Wallet } from "lucide-react";
import { formatUnits } from "viem";

interface WalletWidgetProps {
  metrics?: {
    revenue: number;
    recentTransactions: any[];
  };
  loading?: boolean;
}

export function WalletWidget({ metrics, loading }: WalletWidgetProps) {
  // Default transactions for fallback
  const defaultTransactions = [
    {
      id: "1",
      type: "received",
      amount: "0.05 ETH",
      from: "@customer1",
      time: "2h ago",
    },
    {
      id: "2",
      type: "sent",
      amount: "0.02 ETH",
      to: "Supplier",
      time: "1d ago",
    },
    {
      id: "3",
      type: "pending",
      amount: "0.01 ETH",
      from: "@customer2",
      time: "Pending",
    },
  ];

  const formatTransaction = (transaction: any) => {
    const formatTime = (timestamp: number) => {
      const diff = Date.now() - timestamp;
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(diff / 3600000);
      const days = Math.floor(diff / 86400000);

      if (minutes < 60) return `${minutes}m ago`;
      if (hours < 24) return `${hours}h ago`;
      return `${days}d ago`;
    };

    switch (transaction.type) {
      case "invoice_created":
        return {
          id: transaction.invoiceId,
          type: "pending",
          amount: `$${parseFloat(formatUnits(transaction.amount || 0n, 6)).toFixed(2)}`,
          from: transaction.customer?.slice(0, 10) + "...",
          time: formatTime(transaction.timestamp),
        };
      case "invoice_paid":
        return {
          id: transaction.invoiceId,
          type: "received",
          amount: `$${parseFloat(formatUnits(transaction.amount || 0n, 6)).toFixed(2)}`,
          from: transaction.customer?.slice(0, 10) + "...",
          time: formatTime(transaction.timestamp),
        };
      case "inventory_updated":
        return {
          id: transaction.itemId,
          type: "inventory",
          amount: `${transaction.quantity?.toString()} items`,
          from: `Item: ${transaction.itemId}`,
          time: formatTime(transaction.timestamp),
        };
      default:
        return transaction;
    }
  };

  const transactions = metrics?.recentTransactions?.length
    ? metrics.recentTransactions.map(formatTransaction)
    : defaultTransactions;

  const totalBalance = metrics ? metrics.revenue : 1700;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <Wallet size={18} className="mr-2 text-blue-600" />
          Base Smart Wallet
        </h2>
        <button className="text-sm text-blue-600 hover:underline">View Details</button>
      </div>

      {loading ? (
        <div className="animate-pulse">
          <div className="flex items-center justify-between mb-1">
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
            <div className="w-16 h-6 bg-gray-200 rounded"></div>
          </div>
          <div className="w-20 h-8 bg-gray-200 rounded mb-1"></div>
          <div className="w-28 h-4 bg-gray-200 rounded mb-4"></div>
        </div>
      ) : (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm text-gray-600">Available Balance</p>
            <button className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded hover:bg-blue-200">Withdraw</button>
          </div>
          <p className="text-2xl font-bold text-gray-800">${totalBalance.toFixed(2)} USDC</p>
          <p className="text-sm text-gray-600">≈ ${totalBalance.toFixed(2)} USD</p>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-gray-800">Recent Transactions</p>
          <button className="text-xs text-gray-500 hover:underline">View all</button>
        </div>

        {loading ? (
          <div className="divide-y divide-gray-200">
            {[1, 2, 3].map(i => (
              <div key={i} className="py-2 flex items-center justify-between animate-pulse">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
                  <div>
                    <div className="w-20 h-4 bg-gray-200 rounded mb-1"></div>
                    <div className="w-12 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {transactions.map((tx, index) => (
              <div key={tx.id || index} className="py-2 flex items-center justify-between">
                <div className="flex items-center">
                  {tx.type === "received" && <ArrowDownLeft size={16} className="mr-2 text-green-600" />}
                  {tx.type === "sent" && <ArrowUpRight size={16} className="mr-2 text-red-600" />}
                  {tx.type === "pending" && <Clock size={16} className="mr-2 text-yellow-600" />}
                  {tx.type === "inventory" && <Package size={16} className="mr-2 text-purple-600" />}
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {tx.type === "received"
                        ? `From ${tx.from}`
                        : tx.type === "sent"
                        ? `To ${tx.to}`
                        : tx.type === "pending"
                        ? `Pending from ${tx.from}`
                        : tx.from}
                    </p>
                    <p className="text-xs text-gray-500">{tx.time}</p>
                  </div>
                </div>
                <p
                  className={`font-medium ${
                    tx.type === "received"
                      ? "text-green-600"
                      : tx.type === "sent"
                      ? "text-red-600"
                      : tx.type === "pending"
                      ? "text-yellow-600"
                      : "text-purple-600"
                  }`}
                >
                  {tx.amount}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
