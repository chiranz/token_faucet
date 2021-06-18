/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NeedToken } from "./NeedToken";

export class NeedTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<NeedToken> {
    return super.deploy(name, symbol, overrides || {}) as Promise<NeedToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): NeedToken {
    return super.attach(address) as NeedToken;
  }
  connect(signer: Signer): NeedTokenFactory {
    return super.connect(signer) as NeedTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NeedToken {
    return new Contract(address, _abi, signerOrProvider) as NeedToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "minted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620024a3380380620024a3833981810160405281019062000037919062000347565b818181600390805190602001906200005192919062000225565b5080600490805190602001906200006a92919062000225565b505050620000aa3362000082620000b260201b60201c565b600a6200009091906200057c565b60646200009e9190620006b9565b620000bb60201b60201c565b505062000837565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200012e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000125906200040d565b60405180910390fd5b62000142600083836200022060201b60201c565b8060026000828254620001569190620004c4565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001ad9190620004c4565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200021491906200042f565b60405180910390a35050565b505050565b828054620002339062000767565b90600052602060002090601f016020900481019282620002575760008555620002a3565b82601f106200027257805160ff1916838001178555620002a3565b82800160010185558215620002a3579182015b82811115620002a257825182559160200191906001019062000285565b5b509050620002b29190620002b6565b5090565b5b80821115620002d1576000816000905550600101620002b7565b5090565b6000620002ec620002e68462000480565b6200044c565b9050828152602081018484840111156200030557600080fd5b6200031284828562000731565b509392505050565b600082601f8301126200032c57600080fd5b81516200033e848260208601620002d5565b91505092915050565b600080604083850312156200035b57600080fd5b600083015167ffffffffffffffff8111156200037657600080fd5b62000384858286016200031a565b925050602083015167ffffffffffffffff811115620003a257600080fd5b620003b0858286016200031a565b9150509250929050565b6000620003c9601f83620004b3565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b62000407816200071a565b82525050565b600060208201905081810360008301526200042881620003ba565b9050919050565b6000602082019050620004466000830184620003fc565b92915050565b6000604051905081810181811067ffffffffffffffff82111715620004765762000475620007fb565b5b8060405250919050565b600067ffffffffffffffff8211156200049e576200049d620007fb565b5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b6000620004d1826200071a565b9150620004de836200071a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200051657620005156200079d565b5b828201905092915050565b6000808291508390505b600185111562000573578086048111156200054b576200054a6200079d565b5b60018516156200055b5780820291505b80810290506200056b856200082a565b94506200052b565b94509492505050565b600062000589826200071a565b9150620005968362000724565b9250620005c57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620005cd565b905092915050565b600082620005df5760019050620006b2565b81620005ef5760009050620006b2565b8160018114620006085760028114620006135762000649565b6001915050620006b2565b60ff8411156200062857620006276200079d565b5b8360020a9150848211156200064257620006416200079d565b5b50620006b2565b5060208310610133831016604e8410600b8410161715620006835782820a9050838111156200067d576200067c6200079d565b5b620006b2565b62000692848484600162000521565b92509050818404811115620006ac57620006ab6200079d565b5b81810290505b9392505050565b6000620006c6826200071a565b9150620006d3836200071a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156200070f576200070e6200079d565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b60005b838110156200075157808201518184015260208101905062000734565b8381111562000761576000848401525b50505050565b600060028204905060018216806200078057607f821691505b60208210811415620007975762000796620007cc565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008160011c9050919050565b611c5c80620008476000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b4114610287578063a457c2d7146102a5578063a9059cbb146102d5578063dd62ed3e14610305576100ea565b806339509351146101f757806342966c681461022757806370a0823114610257576100ea565b806318160ddd116100c857806318160ddd1461015b5780631e7269c51461017957806323b872dd146101a9578063313ce567146101d9576100ea565b806306fdde03146100ef578063095ea7b31461010d5780631249c58b1461013d575b600080fd5b6100f7610335565b6040516101049190611699565b60405180910390f35b6101276004803603810190610122919061119d565b6103c7565b604051610134919061167e565b60405180910390f35b6101456103e5565b604051610152919061167e565b60405180910390f35b6101636104fc565b604051610170919061181b565b60405180910390f35b610193600480360381019061018e91906110e9565b610506565b6040516101a0919061167e565b60405180910390f35b6101c360048036038101906101be919061114e565b610526565b6040516101d0919061167e565b60405180910390f35b6101e161061e565b6040516101ee9190611836565b60405180910390f35b610211600480360381019061020c919061119d565b610627565b60405161021e919061167e565b60405180910390f35b610241600480360381019061023c91906111d9565b6106d3565b60405161024e919061167e565b60405180910390f35b610271600480360381019061026c91906110e9565b6106e8565b60405161027e919061181b565b60405180910390f35b61028f610730565b60405161029c9190611699565b60405180910390f35b6102bf60048036038101906102ba919061119d565b6107c2565b6040516102cc919061167e565b60405180910390f35b6102ef60048036038101906102ea919061119d565b6108ad565b6040516102fc919061167e565b60405180910390f35b61031f600480360381019061031a9190611112565b6108cb565b60405161032c919061181b565b60405180910390f35b60606003805461034490611b4a565b80601f016020809104026020016040519081016040528092919081815260200182805461037090611b4a565b80156103bd5780601f10610392576101008083540402835291602001916103bd565b820191906000526020600020905b8154815290600101906020018083116103a057829003601f168201915b5050505050905090565b60006103db6103d4610952565b848461095a565b6001905092915050565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610474576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046b906117bb565b60405180910390fd5b61049d3361048061061e565b600a61048c9190611916565b60646104989190611a34565b610b25565b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001905090565b6000600254905090565b60056020528060005260406000206000915054906101000a900460ff1681565b6000610533848484610c79565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061057e610952565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156105fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f59061173b565b60405180910390fd5b6106128561060a610952565b85840361095a565b60019150509392505050565b60006012905090565b60006106c9610634610952565b848460016000610642610952565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546106c4919061186d565b61095a565b6001905092915050565b60006106df3383610eef565b60019050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461073f90611b4a565b80601f016020809104026020016040519081016040528092919081815260200182805461076b90611b4a565b80156107b85780601f1061078d576101008083540402835291602001916107b8565b820191906000526020600020905b81548152906001019060200180831161079b57829003601f168201915b5050505050905090565b600080600160006107d1610952565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561088e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610885906117db565b60405180910390fd5b6108a2610899610952565b8585840361095a565b600191505092915050565b60006108c16108ba610952565b8484610c79565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c19061179b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a31906116fb565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b18919061181b565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8c906117fb565b60405180910390fd5b610ba1600083836110ba565b8060026000828254610bb3919061186d565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c08919061186d565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c6d919061181b565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ce9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce09061177b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d50906116bb565b60405180910390fd5b610d648383836110ba565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610dea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de19061171b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e7d919061186d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ee1919061181b565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f569061175b565b60405180910390fd5b610f6b826000836110ba565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ff1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe8906116db565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546110489190611a8e565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110ad919061181b565b60405180910390a3505050565b505050565b6000813590506110ce81611bf8565b92915050565b6000813590506110e381611c0f565b92915050565b6000602082840312156110fb57600080fd5b6000611109848285016110bf565b91505092915050565b6000806040838503121561112557600080fd5b6000611133858286016110bf565b9250506020611144858286016110bf565b9150509250929050565b60008060006060848603121561116357600080fd5b6000611171868287016110bf565b9350506020611182868287016110bf565b9250506040611193868287016110d4565b9150509250925092565b600080604083850312156111b057600080fd5b60006111be858286016110bf565b92505060206111cf858286016110d4565b9150509250929050565b6000602082840312156111eb57600080fd5b60006111f9848285016110d4565b91505092915050565b61120b81611ad4565b82525050565b600061121c82611851565b611226818561185c565b9350611236818560208601611b17565b61123f81611bda565b840191505092915050565b600061125760238361185c565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006112bd60228361185c565b91507f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008301527f63650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061132360228361185c565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061138960268361185c565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006113ef60288361185c565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b600061145560218361185c565b91507f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008301527f73000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006114bb60258361185c565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061152160248361185c565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611587601e8361185c565b91507f4e4545443a20596f75206861766520616c726561647920636c61696d656400006000830152602082019050919050565b60006115c760258361185c565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061162d601f8361185c565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b61166981611b00565b82525050565b61167881611b0a565b82525050565b60006020820190506116936000830184611202565b92915050565b600060208201905081810360008301526116b38184611211565b905092915050565b600060208201905081810360008301526116d48161124a565b9050919050565b600060208201905081810360008301526116f4816112b0565b9050919050565b6000602082019050818103600083015261171481611316565b9050919050565b600060208201905081810360008301526117348161137c565b9050919050565b60006020820190508181036000830152611754816113e2565b9050919050565b6000602082019050818103600083015261177481611448565b9050919050565b60006020820190508181036000830152611794816114ae565b9050919050565b600060208201905081810360008301526117b481611514565b9050919050565b600060208201905081810360008301526117d48161157a565b9050919050565b600060208201905081810360008301526117f4816115ba565b9050919050565b6000602082019050818103600083015261181481611620565b9050919050565b60006020820190506118306000830184611660565b92915050565b600060208201905061184b600083018461166f565b92915050565b600081519050919050565b600082825260208201905092915050565b600061187882611b00565b915061188383611b00565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118b8576118b7611b7c565b5b828201905092915050565b6000808291508390505b600185111561190d578086048111156118e9576118e8611b7c565b5b60018516156118f85780820291505b808102905061190685611beb565b94506118cd565b94509492505050565b600061192182611b00565b915061192c83611b0a565b92506119597fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611961565b905092915050565b6000826119715760019050611a2d565b8161197f5760009050611a2d565b8160018114611995576002811461199f576119ce565b6001915050611a2d565b60ff8411156119b1576119b0611b7c565b5b8360020a9150848211156119c8576119c7611b7c565b5b50611a2d565b5060208310610133831016604e8410600b8410161715611a035782820a9050838111156119fe576119fd611b7c565b5b611a2d565b611a1084848460016118c3565b92509050818404811115611a2757611a26611b7c565b5b81810290505b9392505050565b6000611a3f82611b00565b9150611a4a83611b00565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611a8357611a82611b7c565b5b828202905092915050565b6000611a9982611b00565b9150611aa483611b00565b925082821015611ab757611ab6611b7c565b5b828203905092915050565b6000611acd82611ae0565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611b35578082015181840152602081019050611b1a565b83811115611b44576000848401525b50505050565b60006002820490506001821680611b6257607f821691505b60208210811415611b7657611b75611bab565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b611c0181611ac2565b8114611c0c57600080fd5b50565b611c1881611b00565b8114611c2357600080fd5b5056fea26469706673582212206b5bdbde226c739720629e1c7c937d8346566ddffa853d015bb0eca7c0f24fbd64736f6c63430008000033";
