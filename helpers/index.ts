export const getEtherScanUrl = (txId: string) => {
  return `https://etherscan.io/tx/${txId}`;
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
