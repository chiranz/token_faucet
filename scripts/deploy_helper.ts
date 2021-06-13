import { Contract } from "ethers";
import fs from "fs-extra";
import path from "path";
import { networkName } from "../helpers/hardhat_helpers";

type DeployedProps = {
  contractName: string;
  contract: Contract;
};

type DeployedAddressProps = {
  address: string;
  network: string;
};

type DeployedDetailsProps = [
  {
    name: string;
    deployedAddress: DeployedAddressProps[];
  }
];

export const saveDeployedAddress = ({
  contractName,
  contract,
}: DeployedProps) => {
  const { chainId } = contract.deployTransaction;
  const { address } = contract;
  const network = networkName[chainId];

  // Read JSON data
  const deployedAddressPath = path.resolve(__dirname, "deployedAddress.json");
  // create a file if it doesn't exist
  fs.ensureFileSync(deployedAddressPath);

  const data = fs.readFileSync(deployedAddressPath, "utf-8");
  let deployedContracts: DeployedDetailsProps;
  // Check file is empty or not
  if (data) {
    deployedContracts = JSON.parse(data) as DeployedDetailsProps;
  } else {
    deployedContracts = [{}] as DeployedDetailsProps;
  }

  // If details gets saved set this to true
  let saved = false;
  for (let contract of deployedContracts) {
    if (contract.name === contractName) {
      for (let detail of contract.deployedAddress) {
        if (detail.network === network) {
          detail.address = address;
          saved = true;
          break;
        }
      }
      // Push deployed details to contract's deployed address
      if (!saved) {
        contract.deployedAddress.push({
          network,
          address,
        });
        saved = true;
      }
    }
  }
  // Push Contract details along with deployed details to new Contract details
  if (!saved) {
    deployedContracts.push({
      name: contractName,
      deployedAddress: [{ network, address }],
    });
  }

  // Finally write updated object to JSON file
  fs.writeFileSync(deployedAddressPath, JSON.stringify(deployedContracts));
};
