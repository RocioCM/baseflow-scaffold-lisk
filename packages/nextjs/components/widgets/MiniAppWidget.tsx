import { ExternalLink, MessageSquare } from "lucide-react";

export function MiniAppWidget() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <MessageSquare size={18} className="mr-2 text-blue-600" />
          Farcaster MiniApp
        </h2>
        <button className="text-sm text-blue-600 hover:underline flex items-center">
          Configure <ExternalLink size={14} className="ml-1" />
        </button>
      </div>
      <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <MessageSquare size={18} className="text-purple-600" />
          </div>
          <div className="ml-3">
            <p className="font-medium text-gray-800">Merchant Store</p>
            <p className="text-xs text-gray-500">@merchant · Farcaster</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-800 mb-2">🚀 Just dropped our new summer collection! Check it out:</p>
          <div className="bg-white border border-gray-200 rounded-md p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-gray-800">Summer Collection</p>
              <p className="text-sm font-medium text-blue-600">0.05 ETH</p>
            </div>
            <div className="h-24 bg-gray-200 rounded-md mb-2 flex items-center justify-center">
              <img
                src="../assets/alan-bowman-65QPpnFIssE-unsplash.jpg"
                className="w-full h-full object-cover rounded-md"
                alt="Product"
              />
            </div>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">Buy Now</button>
          </div>
        </div>
        <div className="flex text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <MessageSquare size={14} className="mr-1" />
            <span>12 replies</span>
          </div>
          <div>
            <span>24 likes</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">MiniApp Performance</p>
        <div className="flex justify-between text-xs">
          <div>
            <p className="font-medium text-gray-800">15</p>
            <p className="text-gray-500">Orders</p>
          </div>
          <div>
            <p className="font-medium text-gray-800">320</p>
            <p className="text-gray-500">Impressions</p>
          </div>
          <div>
            <p className="font-medium text-gray-800">4.7%</p>
            <p className="text-gray-500">Conversion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
