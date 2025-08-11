import { useCallback, useMemo, useState } from "react";
import { useDeployedContractInfo } from "./scaffold-eth";
import { formatUnits, parseUnits } from "viem";
import { useAccount, useContractEvent, useContractWrite } from "wagmi";
import { ContractName } from "~~/utils/scaffold-eth/contract";
import { getAllContracts } from "~~/utils/scaffold-eth/contractsData";

const contractsData = getAllContracts();
const contractNames = Object.keys(contractsData) as ContractName[];
const contractName = contractNames[0];

export function useBaseFlow() {
  const { data: deployedContractData } = useDeployedContractInfo(contractName);
  const { address: userAddress } = useAccount();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [invoiceEvents, setInvoiceEvents] = useState<any[]>([]);
  const [inventoryEvents, setInventoryEvents] = useState<any[]>([]);

  // Contract writes
  const { write: createInvoice } = useContractWrite({
    address: deployedContractData?.address as `0x${string}`,
    abi: deployedContractData?.abi,
    functionName: "createInvoice",
  });

  const { write: updateInventory } = useContractWrite({
    address: deployedContractData?.address as `0x${string}`,
    abi: deployedContractData?.abi,
    functionName: "updateInventory",
  });

  // Listen to invoice events
  useContractEvent({
    address: deployedContractData?.address as `0x${string}`,
    abi: deployedContractData?.abi,
    eventName: "InvoiceCreated",
    listener: logs => {
      const newEvents = logs.map(log => ({
        type: "invoice_created",
        invoiceId: log.args.invoiceId,
        merchant: log.args.merchant,
        customer: log.args.customer,
        amount: log.args.amount,
        timestamp: Date.now(),
      }));
      setInvoiceEvents(prev => [...newEvents, ...prev.slice(0, 9)]); // Keep last 10
    },
  });

  // Listen to payment events
  useContractEvent({
    address: deployedContractData?.address as `0x${string}`,
    abi: deployedContractData?.abi,
    eventName: "InvoicePaid",
    listener: logs => {
      const newEvents = logs.map(log => ({
        type: "invoice_paid",
        invoiceId: log.args.invoiceId,
        customer: log.args.customer,
        amount: log.args.amount,
        timestamp: Date.now(),
      }));
      setInvoiceEvents(prev => [...newEvents, ...prev.slice(0, 9)]); // Keep last 10
    },
  });

  // Listen to inventory events
  useContractEvent({
    address: deployedContractData?.address as `0x${string}`,
    abi: deployedContractData?.abi,
    eventName: "InventoryUpdated",
    listener: logs => {
      const newEvents = logs.map(log => ({
        type: "inventory_updated",
        merchant: log.args.merchant,
        itemId: log.args.itemId,
        quantity: log.args.quantity,
        price: log.args.price,
        timestamp: Date.now(),
      }));
      setInventoryEvents(prev => [...newEvents, ...prev.slice(0, 9)]); // Keep last 10
    },
  });

  // Calculate metrics from events
  const metrics = useMemo(() => {
    const userInvoices = invoiceEvents.filter(event => event.merchant?.toLowerCase() === userAddress?.toLowerCase());
    const paidInvoices = invoiceEvents.filter(
      event => event.type === "invoice_paid" && event.customer?.toLowerCase() === userAddress?.toLowerCase(),
    );

    const totalRevenue = paidInvoices.reduce((sum, event) => {
      return sum + parseFloat(formatUnits(event.amount || 0n, 6));
    }, 0);

    const totalOrders = userInvoices.filter(event => event.type === "invoice_created").length;

    const uniqueCustomers = new Set(userInvoices.map(event => event.customer?.toLowerCase()).filter(Boolean)).size;

    return {
      revenue: totalRevenue,
      orders: totalOrders,
      customers: uniqueCustomers,
      recentTransactions: [...invoiceEvents, ...inventoryEvents].sort((a, b) => b.timestamp - a.timestamp).slice(0, 5),
    };
  }, [invoiceEvents, inventoryEvents, userAddress]);

  const handleCreateInvoice = useCallback(
    async (customer: string, amount: string, dueDate: number, metadata: string) => {
      try {
        setLoading(true);
        setError(null);

        // Parse amount as USDC (6 decimals) instead of ETH (18 decimals)
        await createInvoice({
          args: [customer, parseUnits(amount, 6), BigInt(dueDate), metadata],
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to create invoice");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [createInvoice],
  );

  const handleUpdateInventory = useCallback(
    async (itemId: string, quantity: number, price: string) => {
      try {
        setLoading(true);
        setError(null);

        await updateInventory({
          args: [itemId, BigInt(quantity), parseUnits(price, 6)],
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to update inventory");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [updateInventory],
  );

  return {
    createInvoice: handleCreateInvoice,
    updateInventory: handleUpdateInventory,
    loading,
    error,
    metrics,
    contractAddress: deployedContractData?.address,
  };
}
