import React from "react";
import { Calendar, Users, Zap } from "lucide-react";

export function MarketingAgent() {
  const socialMentions = [
    {
      id: "1",
      user: "@crypto_fan",
      message: "Just got my @merchant t-shirt! Love the quality!",
      engagement: 45,
      action: "Reply",
    },
    {
      id: "2",
      user: "@nft_collector",
      message: "Anyone tried @merchant hoodies? Worth it?",
      engagement: 23,
      action: "Reply",
    },
    {
      id: "3",
      user: "@web3_dev",
      message: "Working in my new @merchant gear today",
      engagement: 12,
      action: "Like",
    },
  ];
  const scheduledCampaigns = [
    {
      id: "1",
      name: "Summer Sale",
      date: "Jun 15",
      status: "Scheduled",
    },
    {
      id: "2",
      name: "New Collection Launch",
      date: "Jul 1",
      status: "Draft",
    },
    {
      id: "3",
      name: "Loyalty Rewards",
      date: "Active",
      status: "Running",
    },
  ];
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Marketing Agent</h1>
        <p className="text-gray-600">Your AI assistant for promotions and customer engagement</p>
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
                Good morning! Here are your marketing insights:
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Your brand mentions are up 23% this week</li>
                  <li>3 influencers mentioned your products</li>
                  <li>Your &quot;Summer Sale&quot; promotion has generated 15 orders</li>
                </ul>
                Would you like me to suggest some engagement opportunities?
              </div>
            </div>
            <div className="mb-3 text-right">
              <p className="text-xs text-gray-500 mb-1">You</p>
              <div className="bg-gray-200 p-2 rounded-md inline-block text-gray-800">
                Yes, please suggest some engagement opportunities
              </div>
            </div>
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">AI Assistant</p>
              <div className="bg-blue-50 p-2 rounded-md text-gray-800">
                Here are some opportunities:
                <br />
                1. @crypto_fan shared a positive review - I suggest offering them a 10% discount code as thanks
                <br />
                2. @nft_collector is considering a purchase - I can automatically respond with product details
                <br />
                3. Several customers liked your last post - Should I create a &quot;weekend flash sale&quot; for them?
                <br />
                <br />
                Which would you like me to action?
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
        {/* Marketing Stats */}
        <div className="space-y-6">
          {/* Social Mentions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <Users size={18} className="mr-2 text-blue-600" />
                Recent Mentions
              </h2>
              <button className="text-sm text-blue-600 hover:underline">View all</button>
            </div>
            <div className="divide-y divide-gray-200">
              {socialMentions.map(mention => (
                <div key={mention.id} className="py-3">
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-800">{mention.user}</p>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Zap size={12} className="mr-1 text-yellow-500" /> {mention.engagement}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{mention.message}</p>
                  <div className="mt-2 text-right">
                    <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">
                      {mention.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Campaigns */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <Calendar size={18} className="mr-2 text-blue-600" />
                Marketing Campaigns
              </h2>
              <button className="text-sm text-blue-600 hover:underline">New Campaign</button>
            </div>
            <div className="divide-y divide-gray-200">
              {scheduledCampaigns.map(campaign => (
                <div key={campaign.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{campaign.name}</p>
                    <p className="text-sm text-gray-600">{campaign.date}</p>
                  </div>
                  <div>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        campaign.status === "Running"
                          ? "bg-green-100 text-green-800"
                          : campaign.status === "Scheduled"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {campaign.status}
                    </span>
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
