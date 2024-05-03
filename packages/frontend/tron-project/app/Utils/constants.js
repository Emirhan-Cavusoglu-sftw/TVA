// gnosis chiado rpc => https://rpc.chiadochain.net	
// gnosis pimlico url => https://api.pimlico.io/v2/10200/rpc?apikey=382125ba-467a-4a7a-8ac8-05dae90d873b
export const AF_ADDRESS="0xC799C71cB0397e3BC19525F157562152d5CE66e5"
export const accountControlAddress="TGBKjUS7QYXfuHHnPP8BzRSUY9zvEesdhQ"
// TB7mAnPUP7q2yKrEXHdg3WCArdM9enrk5M
// gnosis pimlico api key => 382125ba-467a-4a7a-8ac8-05dae90d873b

export const accountABI = [
    {
      "type": "constructor",
      "inputs": [
        { "name": "_owner", "type": "address", "internalType": "address" },
        { "name": "_userName", "type": "string", "internalType": "string" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "createTSD",
      "inputs": [
        { "name": "_projectName", "type": "string", "internalType": "string" },
        {
          "name": "_projectDescription",
          "type": "string",
          "internalType": "string"
        },
        { "name": "_dataURI", "type": "string", "internalType": "string" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getTsds",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address[]", "internalType": "address[]" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tsd",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "contract TSD" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tsdCounter",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tsds",
      "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "userName",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "validateUserOp",
      "inputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct PackedUserOperation",
          "components": [
            { "name": "sender", "type": "address", "internalType": "address" },
            { "name": "nonce", "type": "uint256", "internalType": "uint256" },
            { "name": "initCode", "type": "bytes", "internalType": "bytes" },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            {
              "name": "accountGasLimits",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "preVerificationGas",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "gasFees", "type": "bytes32", "internalType": "bytes32" },
            {
              "name": "paymasterAndData",
              "type": "bytes",
              "internalType": "bytes"
            },
            { "name": "signature", "type": "bytes", "internalType": "bytes" }
          ]
        },
        { "name": "", "type": "bytes32", "internalType": "bytes32" },
        { "name": "", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "validationData",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Log",
      "inputs": [
        {
          "name": "message",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "anonymous": false
    }
  ]
export const accountFactoryABI = [
    {
      "type": "function",
      "name": "accounts",
      "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "createAccount",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" },
        { "name": "userName", "type": "string", "internalType": "string" }
      ],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "hasAccount",
      "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownerToAccount",
      "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "AccountCreated",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "owner",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    }
  ]



export const entryPointABI=[
  {
      "inputs": [
          {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
          },
          {
              "internalType": "bytes",
              "name": "ret",
              "type": "bytes"
          }
      ],
      "name": "DelegateAndRevert",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "opIndex",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "reason",
              "type": "string"
          }
      ],
      "name": "FailedOp",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "opIndex",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "reason",
              "type": "string"
          },
          {
              "internalType": "bytes",
              "name": "inner",
              "type": "bytes"
          }
      ],
      "name": "FailedOpWithRevert",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "bytes",
              "name": "returnData",
              "type": "bytes"
          }
      ],
      "name": "PostOpReverted",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "sender",
              "type": "address"
          }
      ],
      "name": "SenderAddressResult",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "aggregator",
              "type": "address"
          }
      ],
      "name": "SignatureValidationFailed",
      "type": "error"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "userOpHash",
              "type": "bytes32"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "factory",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "paymaster",
              "type": "address"
          }
      ],
      "name": "AccountDeployed",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [],
      "name": "BeforeExecution",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "totalDeposit",
              "type": "uint256"
          }
      ],
      "name": "Deposited",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "userOpHash",
              "type": "bytes32"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "bytes",
              "name": "revertReason",
              "type": "bytes"
          }
      ],
      "name": "PostOpRevertReason",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "aggregator",
              "type": "address"
          }
      ],
      "name": "SignatureAggregatorChanged",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "totalStaked",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "unstakeDelaySec",
              "type": "uint256"
          }
      ],
      "name": "StakeLocked",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "withdrawTime",
              "type": "uint256"
          }
      ],
      "name": "StakeUnlocked",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "withdrawAddress",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "StakeWithdrawn",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "userOpHash",
              "type": "bytes32"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "paymaster",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "bool",
              "name": "success",
              "type": "bool"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "actualGasCost",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "actualGasUsed",
              "type": "uint256"
          }
      ],
      "name": "UserOperationEvent",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "userOpHash",
              "type": "bytes32"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
          }
      ],
      "name": "UserOperationPrefundTooLow",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "userOpHash",
              "type": "bytes32"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "bytes",
              "name": "revertReason",
              "type": "bytes"
          }
      ],
      "name": "UserOperationRevertReason",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "withdrawAddress",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "Withdrawn",
      "type": "event"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "unstakeDelaySec",
              "type": "uint32"
          }
      ],
      "name": "addStake",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "target",
              "type": "address"
          },
          {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
          }
      ],
      "name": "delegateAndRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "name": "depositTo",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "deposits",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "deposit",
              "type": "uint256"
          },
          {
              "internalType": "bool",
              "name": "staked",
              "type": "bool"
          },
          {
              "internalType": "uint112",
              "name": "stake",
              "type": "uint112"
          },
          {
              "internalType": "uint32",
              "name": "unstakeDelaySec",
              "type": "uint32"
          },
          {
              "internalType": "uint48",
              "name": "withdrawTime",
              "type": "uint48"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "name": "getDepositInfo",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "deposit",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bool",
                      "name": "staked",
                      "type": "bool"
                  },
                  {
                      "internalType": "uint112",
                      "name": "stake",
                      "type": "uint112"
                  },
                  {
                      "internalType": "uint32",
                      "name": "unstakeDelaySec",
                      "type": "uint32"
                  },
                  {
                      "internalType": "uint48",
                      "name": "withdrawTime",
                      "type": "uint48"
                  }
              ],
              "internalType": "struct IStakeManager.DepositInfo",
              "name": "info",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "internalType": "uint192",
              "name": "key",
              "type": "uint192"
          }
      ],
      "name": "getNonce",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes",
              "name": "initCode",
              "type": "bytes"
          }
      ],
      "name": "getSenderAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "nonce",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bytes",
                      "name": "initCode",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes",
                      "name": "callData",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "accountGasLimits",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint256",
                      "name": "preVerificationGas",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "gasFees",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "bytes",
                      "name": "paymasterAndData",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes",
                      "name": "signature",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct PackedUserOperation",
              "name": "userOp",
              "type": "tuple"
          }
      ],
      "name": "getUserOpHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "components": [
                          {
                              "internalType": "address",
                              "name": "sender",
                              "type": "address"
                          },
                          {
                              "internalType": "uint256",
                              "name": "nonce",
                              "type": "uint256"
                          },
                          {
                              "internalType": "bytes",
                              "name": "initCode",
                              "type": "bytes"
                          },
                          {
                              "internalType": "bytes",
                              "name": "callData",
                              "type": "bytes"
                          },
                          {
                              "internalType": "bytes32",
                              "name": "accountGasLimits",
                              "type": "bytes32"
                          },
                          {
                              "internalType": "uint256",
                              "name": "preVerificationGas",
                              "type": "uint256"
                          },
                          {
                              "internalType": "bytes32",
                              "name": "gasFees",
                              "type": "bytes32"
                          },
                          {
                              "internalType": "bytes",
                              "name": "paymasterAndData",
                              "type": "bytes"
                          },
                          {
                              "internalType": "bytes",
                              "name": "signature",
                              "type": "bytes"
                          }
                      ],
                      "internalType": "struct PackedUserOperation[]",
                      "name": "userOps",
                      "type": "tuple[]"
                  },
                  {
                      "internalType": "contract IAggregator",
                      "name": "aggregator",
                      "type": "address"
                  },
                  {
                      "internalType": "bytes",
                      "name": "signature",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct IEntryPoint.UserOpsPerAggregator[]",
              "name": "opsPerAggregator",
              "type": "tuple[]"
          },
          {
              "internalType": "address payable",
              "name": "beneficiary",
              "type": "address"
          }
      ],
      "name": "handleAggregatedOps",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "nonce",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bytes",
                      "name": "initCode",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes",
                      "name": "callData",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "accountGasLimits",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint256",
                      "name": "preVerificationGas",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "gasFees",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "bytes",
                      "name": "paymasterAndData",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes",
                      "name": "signature",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct PackedUserOperation[]",
              "name": "ops",
              "type": "tuple[]"
          },
          {
              "internalType": "address payable",
              "name": "beneficiary",
              "type": "address"
          }
      ],
      "name": "handleOps",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint192",
              "name": "key",
              "type": "uint192"
          }
      ],
      "name": "incrementNonce",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes",
              "name": "callData",
              "type": "bytes"
          },
          {
              "components": [
                  {
                      "components": [
                          {
                              "internalType": "address",
                              "name": "sender",
                              "type": "address"
                          },
                          {
                              "internalType": "uint256",
                              "name": "nonce",
                              "type": "uint256"
                          },
                          {
                              "internalType": "uint256",
                              "name": "verificationGasLimit",
                              "type": "uint256"
                          },
                          {
                              "internalType": "uint256",
                              "name": "callGasLimit",
                              "type": "uint256"
                          },
                          {
                              "internalType": "uint256",
                              "name": "paymasterVerificationGasLimit",
                              "type": "uint256"
                          },
                          {
                              "internalType": "uint256",
                              "name": "paymasterPostOpGasLimit",
                              "type": "uint256"
                          },
                          {
                              "internalType": "uint256",
                              "name": "preVerificationGas",
                              "type": "uint256"
                          },
                          {
                              "internalType": "address",
                              "name": "paymaster",
                              "type": "address"
                          },
                          {
                              "internalType": "uint256",
                              "name": "maxFeePerGas",
                              "type": "uint256"
                          },
                          {
                              "internalType": "uint256",
                              "name": "maxPriorityFeePerGas",
                              "type": "uint256"
                          }
                      ],
                      "internalType": "struct EntryPoint.MemoryUserOp",
                      "name": "mUserOp",
                      "type": "tuple"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "userOpHash",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint256",
                      "name": "prefund",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "contextOffset",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "preOpGas",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct EntryPoint.UserOpInfo",
              "name": "opInfo",
              "type": "tuple"
          },
          {
              "internalType": "bytes",
              "name": "context",
              "type": "bytes"
          }
      ],
      "name": "innerHandleOp",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "actualGasCost",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "internalType": "uint192",
              "name": "",
              "type": "uint192"
          }
      ],
      "name": "nonceSequenceNumber",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
          }
      ],
      "name": "supportsInterface",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "unlockStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address payable",
              "name": "withdrawAddress",
              "type": "address"
          }
      ],
      "name": "withdrawStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address payable",
              "name": "withdrawAddress",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "withdrawAmount",
              "type": "uint256"
          }
      ],
      "name": "withdrawTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "stateMutability": "payable",
      "type": "receive"
  }
]



export const tsdABI = [
    {
      "type": "constructor",
      "inputs": [
        { "name": "_name", "type": "string", "internalType": "string" },
        { "name": "_projectName", "type": "string", "internalType": "string" },
        {
          "name": "_projectDescription",
          "type": "string",
          "internalType": "string"
        },
        { "name": "_dataURI", "type": "string", "internalType": "string" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "dataURI",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isAttested",
      "inputs": [],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "projectDescription",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "projectName",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "userName",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    }
  ]

export const accountControlABI=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "evmAddress",
				"type": "string"
			}
		],
		"name": "createAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "hasAccount",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isAccountChecked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]