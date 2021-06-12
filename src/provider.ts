import { ethers, providers } from "ethers";

type Provider = providers.Web3Provider | providers.JsonRpcProvider;

export const getProvider = async () => {
  let provider: Provider;
  if (
    typeof window !== "undefined" &&
    typeof (window as any).ethereum !== "undefined"
  ) {
    console.log(process.env.INFURA_API);
    provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    ) as Provider;
  } else {
    provider = new ethers.providers.JsonRpcProvider(
      process.env.INFURA_API
    ) as Provider;
  }
  return provider;
};
export const getSignerAddress = async () => {
  const provider = await getProvider();
  try {
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    return signerAddress;
  } catch (err) {
    console.log(err.message);
  }
};

export const getSigner = async () => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  return signer;
};
