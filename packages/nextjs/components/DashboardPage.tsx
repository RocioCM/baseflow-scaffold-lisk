import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { InventoryAgent } from "./agents/InventoryAgent";
import { MarketingAgent } from "./agents/MarketingAgent";
import { SalesAgent } from "./agents/SalesAgent";
import { MetricsWidget } from "./widgets/MetricsWidget";
import { MiniAppWidget } from "./widgets/MiniAppWidget";
import { WalletWidget } from "./widgets/WalletWidget";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useBaseFlow } from "~~/hooks/useBaseFlow";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const baseFlowHook = useBaseFlow();
  const { metrics, loading } = baseFlowHook;

  const renderContent = () => {
    switch (activeTab) {
      case "sales":
        return <SalesAgent baseFlow={baseFlowHook} />;
      case "inventory":
        return <InventoryAgent baseFlow={baseFlowHook} />;
      case "marketing":
        return <MarketingAgent />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <MetricsWidget metrics={metrics} loading={loading} />
            <MiniAppWidget />
            <WalletWidget metrics={metrics} loading={loading} />
          </div>
        );
    }
  };
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center justify-between bg-white border-b border-gray-200 py-4 px-6">
          <Header />
          <div className="flex items-center space-x-4">
            <ConnectButton accountStatus="address" chainStatus="icon" />
          </div>
        </div>
        <main className="flex-1 overflow-y-auto bg-gray-50">{renderContent()}</main>
      </div>
    </div>
  );
}
