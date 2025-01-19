"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { chainId } = useAccount();

  const { data: totalCounter } = useScaffoldReadContract({
    contractName: "Counter",
    functionName: "getCounter",
    watch: true,
  });
  console.log(totalCounter);
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract({ contractName: "Counter" });

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Test burner on two chains</span>
          </h1>
          <p className="text-center">
            <span className="block text-lg mb-2">Your chain: {chainId}</span>
            <p>Counter: {totalCounter?.toString()}</p>
            <button
              className="btn btn-primary"
              onClick={async () => {
                try {
                  await writeYourContractAsync({ functionName: "increment" });
                } catch (e) {
                  console.error("Error:", e);
                }
              }}
            >
              Click
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
