import { useCallback, useState } from "react";
import { useDeployedContractInfo } from "./scaffold-eth";
import { parseUnits } from "viem";
import { useContractWrite } from "wagmi";
import { ContractName } from "~~/utils/scaffold-eth/contract";
import { getAllContracts } from "~~/utils/scaffold-eth/contractsData";

const contractsData = getAllContracts();
const contractNames = Object.keys(contractsData) as ContractName[];
const contractName = contractNames[0];

export function useBaseFlow() {
  const { data: deployedContractData } = useDeployedContractInfo(contractName);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
  };
}
