import { assert, expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import { ethers } from "hardhat";
import { NeedToken, NeedTokenFactory } from "../types/generated";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

export function ethToWei(number: number) {
  return ethers.constants.WeiPerEther.mul(number).toString();
}
export function weiToEth(number: number) {
  return ethers.utils.formatEther(number);
}

let NeedContract: NeedTokenFactory;
let needContract: NeedToken;
let deployer: SignerWithAddress;
let signers: SignerWithAddress[];

beforeEach(async () => {
  [deployer, ...signers] = await ethers.getSigners();
  NeedContract = (await ethers.getContractFactory(
    "NeedToken"
  )) as unknown as NeedTokenFactory;
  needContract = await NeedContract.deploy("Need Token", "NEED");

  await needContract.deployed();
});

describe("Need Token", function () {
  it("Should mint tokens for the deployer", async function () {
    const deployerBalance = await needContract.balanceOf(deployer.address);
    expect(deployerBalance.toString()).to.equal(ethToWei(100));
  });

  it("should mint token for  different minters", async () => {
    const [minter, minter1] = signers;
    //     Minter one
    const contractWithMinter = needContract.connect(minter);
    await contractWithMinter.mint();
    const minterBalance = await contractWithMinter.balanceOf(minter.address);
    expect(minterBalance.toString()).to.equal(ethToWei(100));
    //     Minter two
    const contractWithMinter1 = needContract.connect(minter1);
    await contractWithMinter1.mint();
    const minter1Balance = await contractWithMinter1.balanceOf(minter1.address);
    expect(minter1Balance.toString()).to.equal(ethToWei(100));
  });
  it("should only mint token once", async () => {
    const [minter] = signers;
    //     Minter one
    const contractWithMinter = needContract.connect(minter);
    await contractWithMinter.mint();
    const minterBalance = await contractWithMinter.balanceOf(minter.address);
    expect(minterBalance.toString()).to.equal(ethToWei(100));
    try {
      await contractWithMinter.mint();
    } catch (err) {
      assert.isOk(true);
      return;
    }
    assert.isOk(false);
  });

  it("should allow to burn token if balance is enough", async () => {
    const [minter] = signers;
    //     Minter one
    const contractWithMinter = needContract.connect(minter);
    await contractWithMinter.mint();
    try {
      await contractWithMinter.burn(ethToWei(100));
    } catch (err) {
      assert.isOk(false);
      return;
    }
    assert.isOk(true);
  });
  it("should fail to burn when balance is not enough", async () => {
    const [minter] = signers;
    //     Minter one
    const contractWithMinter = needContract.connect(minter);
    await contractWithMinter.mint();
    try {
      await contractWithMinter.burn(ethToWei(101));
    } catch (err) {
      assert.isOk(true);
      return;
    }

    assert.isOk(false);
  });
});
