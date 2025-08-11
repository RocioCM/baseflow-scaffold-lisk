import React, { useState } from "react";
import { MessageSquare, Plus, ShoppingBag } from "lucide-react";

interface SalesAgentProps {
  baseFlow: {
    createInvoice: (customer: string, amount: string, dueDate: number, metadata: string) => Promise<void>;
    loading: boolean;
    error: string | null;
  };
}

export function SalesAgent({ baseFlow }: SalesAgentProps) {
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);
  const [message, setMessage] = useState("");
  const [invoiceForm, setInvoiceForm] = useState({
    customer: "",
    amount: "",
    description: "",
  });

  const handleCreateInvoice = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!invoiceForm.customer || !invoiceForm.amount) {
      setMessage("Please fill in all required fields");
      return;
    }

    try {
      // Due date: 30 days from now
      const dueDate = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60;

      await baseFlow.createInvoice(
        invoiceForm.customer,
        invoiceForm.amount,
        dueDate,
        invoiceForm.description || `Invoice for ${invoiceForm.customer}`,
      );

      setMessage(`Invoice for $${invoiceForm.amount} created successfully for ${invoiceForm.customer}`);
      setInvoiceForm({ customer: "", amount: "", description: "" });
      setShowCreateInvoice(false);

      // Clear message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Failed to create invoice:", error);
      setMessage("Failed to create invoice. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    }
  };
  const recentOrders = [
    {
      id: "1",
      customer: "@alex",
      items: "2 T-shirts",
      total: "50.00",
      status: "Paid",
    },
    {
      id: "2",
      customer: "@sarah",
      items: "1 Hoodie",
      total: "45.00",
      status: "Processing",
    },
    {
      id: "3",
      customer: "@mike",
      items: "3 Stickers",
      total: "7.50",
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
      {/* Success/Error Message */}
      {message && (
        <div className="mb-4 p-3 rounded-md bg-blue-50 border border-blue-200">
          <p className="text-sm text-blue-800">{message}</p>
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Sales Agent</h1>
            <p className="text-gray-600">Your AI assistant for orders, invoices, and customer service</p>
          </div>
          <button
            onClick={() => setShowCreateInvoice(!showCreateInvoice)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Plus size={16} className="mr-2" />
            Create Invoice
          </button>
        </div>
      </div>

      {/* Create Invoice Form */}
      {showCreateInvoice && (
        <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Create New Invoice</h3>
          <form onSubmit={handleCreateInvoice} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Customer Address</label>
              <input
                type="text"
                placeholder="0x... or customer@example.com"
                value={invoiceForm.customer}
                onChange={e => setInvoiceForm(prev => ({ ...prev, customer: e.target.value }))}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount (USDC)</label>
              <input
                type="number"
                step="0.01"
                placeholder="25.00"
                value={invoiceForm.amount}
                onChange={e => setInvoiceForm(prev => ({ ...prev, amount: e.target.value }))}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
              <input
                type="text"
                placeholder="2x T-shirts, size L"
                value={invoiceForm.description}
                onChange={e => setInvoiceForm(prev => ({ ...prev, description: e.target.value }))}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={baseFlow.loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {baseFlow.loading ? "Creating..." : "Create Invoice"}
              </button>
              <button
                type="button"
                onClick={() => setShowCreateInvoice(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

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
                  <li>Revenue: $102.50 USDC</li>
                </ul>
                What would you like me to help with today?
              </div>
            </div>
            <div className="mb-3 text-right">
              <p className="text-xs text-gray-500 mb-1">You</p>
              <div className="bg-gray-200 p-2 rounded-md inline-block text-gray-800">
                Create an invoice for @customer - 2 t-shirts for $50
              </div>
            </div>
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">AI Assistant</p>
              <div className="bg-blue-50 p-2 rounded-md text-gray-800">
                Invoice created for @customer:
                <br />
                - 2× T-shirts = $50.00 USDC
                <br />
                - Due: 30 days
                <br />
                <br />
                Smart contract invoice deployed! Customer can pay directly on-chain.
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
                    <p className="font-medium">${order.total}</p>
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
