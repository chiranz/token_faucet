import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import { ethers } from "hardhat";
import { Greeter, GreeterFactory } from "../types/generated";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = (await ethers.getContractFactory(
      "Greeter"
    )) as unknown as GreeterFactory;
    const greeter: Greeter = await Greeter.deploy("Hello, world!");

    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
