import "@nomiclabs/hardhat-ethers";
import hardhat, { ethers } from "hardhat";
import { networkName } from "../helpers/hardhat_helpers";
import { saveDeployedAddress } from "./deploy_helper";

async function main() {
  await hardhat.run("compile");
  // We get the contract to deploy
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);
  let { chainId } = greeter.deployTransaction;
  console.log("Network: " + networkName[chainId]);
  let contractName = "Greeter";

  // Save address as local file
  saveDeployedAddress({ contractName, contract: greeter });
  console.log(`${contractName} deployed details saved successfully.`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
