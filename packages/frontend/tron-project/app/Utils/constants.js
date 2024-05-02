// gnosis chiado rpc => https://rpc.chiadochain.net	
// gnosis pimlico url => https://api.pimlico.io/v2/10200/rpc?apikey=382125ba-467a-4a7a-8ac8-05dae90d873b
// gnosis pimlico api key => 382125ba-467a-4a7a-8ac8-05dae90d873b
// ss
export const accountFactoryABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "AccountCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "accounts",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "userName",
        "type": "string"
      }
    ],
    "name": "createAccount",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
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
    "name": "ownerToAccount",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

export const accountABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_userName",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
      }
    ],
    "name": "Log",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "attestTSD",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_projectName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_projectDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_dataURI",
        "type": "string"
      }
    ],
    "name": "createTSD",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "schemaId",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "spInstance",
    "outputs": [
      {
        "internalType": "contract ISP",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tsd",
    "outputs": [
      {
        "internalType": "contract TSD",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tsdCounter",
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tsds",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "userName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
        "name": "",
        "type": "tuple"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "validateUserOp",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "validationData",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
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

export const signprotocolABI = [
  {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "target",
              "type": "address"
          }
      ],
      "name": "AddressEmptyCode",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "AttestationAlreadyRevoked",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "AttestationInvalidDuration",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "AttestationIrrevocable",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "AttestationNonexistent",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "AttestationWrongAttester",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
          }
      ],
      "name": "ERC1967InvalidImplementation",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "ERC1967NonPayable",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "FailedInnerCall",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "InvalidDelegateSignature",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "InvalidInitialization",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "LegacySPRequired",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "NotInitializing",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "OffchainAttestationAlreadyRevoked",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "OffchainAttestationExists",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "OffchainAttestationNonexistent",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "Paused",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "SchemaNonexistent",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "SchemaWrongRegistrant",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "UUPSUnauthorizedCallContext",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
          }
      ],
      "name": "UUPSUnsupportedProxiableUUID",
      "type": "error"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint64",
              "name": "attestationId",
              "type": "uint64"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "indexingKey",
              "type": "string"
          }
      ],
      "name": "AttestationMade",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint64",
              "name": "attestationId",
              "type": "uint64"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "reason",
              "type": "string"
          }
      ],
      "name": "AttestationRevoked",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint64",
              "name": "version",
              "type": "uint64"
          }
      ],
      "name": "Initialized",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "string",
              "name": "attestationId",
              "type": "string"
          }
      ],
      "name": "OffchainAttestationMade",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "string",
              "name": "attestationId",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "reason",
              "type": "string"
          }
      ],
      "name": "OffchainAttestationRevoked",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint64",
              "name": "schemaId",
              "type": "uint64"
          }
      ],
      "name": "SchemaRegistered",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
          }
      ],
      "name": "Upgraded",
      "type": "event"
  },
  {
      "inputs": [],
      "name": "UPGRADE_INTERFACE_VERSION",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
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
                      "internalType": "uint64",
                      "name": "schemaId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "linkedAttestationId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "attestTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "revokeTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "address",
                      "name": "attester",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "validUntil",
                      "type": "uint64"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "bool",
                      "name": "revoked",
                      "type": "bool"
                  },
                  {
                      "internalType": "bytes[]",
                      "name": "recipients",
                      "type": "bytes[]"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct Attestation",
              "name": "attestation",
              "type": "tuple"
          },
          {
              "internalType": "contract IERC20",
              "name": "resolverFeesERC20Token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "resolverFeesERC20Amount",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "indexingKey",
              "type": "string"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "attest",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint64",
                      "name": "schemaId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "linkedAttestationId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "attestTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "revokeTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "address",
                      "name": "attester",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "validUntil",
                      "type": "uint64"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "bool",
                      "name": "revoked",
                      "type": "bool"
                  },
                  {
                      "internalType": "bytes[]",
                      "name": "recipients",
                      "type": "bytes[]"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct Attestation",
              "name": "attestation",
              "type": "tuple"
          },
          {
              "internalType": "string",
              "name": "indexingKey",
              "type": "string"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "attest",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint64",
                      "name": "schemaId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "linkedAttestationId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "attestTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "revokeTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "address",
                      "name": "attester",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "validUntil",
                      "type": "uint64"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "bool",
                      "name": "revoked",
                      "type": "bool"
                  },
                  {
                      "internalType": "bytes[]",
                      "name": "recipients",
                      "type": "bytes[]"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct Attestation",
              "name": "attestation",
              "type": "tuple"
          },
          {
              "internalType": "uint256",
              "name": "resolverFeesETH",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "indexingKey",
              "type": "string"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "attest",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint64",
                      "name": "schemaId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "linkedAttestationId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "attestTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "revokeTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "address",
                      "name": "attester",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "validUntil",
                      "type": "uint64"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "bool",
                      "name": "revoked",
                      "type": "bool"
                  },
                  {
                      "internalType": "bytes[]",
                      "name": "recipients",
                      "type": "bytes[]"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct Attestation[]",
              "name": "attestations",
              "type": "tuple[]"
          },
          {
              "internalType": "uint256[]",
              "name": "resolverFeesETH",
              "type": "uint256[]"
          },
          {
              "internalType": "string[]",
              "name": "indexingKeys",
              "type": "string[]"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "attestBatch",
      "outputs": [
          {
              "internalType": "uint64[]",
              "name": "attestationIds",
              "type": "uint64[]"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint64",
                      "name": "schemaId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "linkedAttestationId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "attestTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "revokeTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "address",
                      "name": "attester",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "validUntil",
                      "type": "uint64"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "bool",
                      "name": "revoked",
                      "type": "bool"
                  },
                  {
                      "internalType": "bytes[]",
                      "name": "recipients",
                      "type": "bytes[]"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct Attestation[]",
              "name": "attestations",
              "type": "tuple[]"
          },
          {
              "internalType": "contract IERC20[]",
              "name": "resolverFeesERC20Tokens",
              "type": "address[]"
          },
          {
              "internalType": "uint256[]",
              "name": "resolverFeesERC20Amount",
              "type": "uint256[]"
          },
          {
              "internalType": "string[]",
              "name": "indexingKeys",
              "type": "string[]"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "attestBatch",
      "outputs": [
          {
              "internalType": "uint64[]",
              "name": "attestationIds",
              "type": "uint64[]"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint64",
                      "name": "schemaId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "linkedAttestationId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "attestTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "revokeTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "address",
                      "name": "attester",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "validUntil",
                      "type": "uint64"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "bool",
                      "name": "revoked",
                      "type": "bool"
                  },
                  {
                      "internalType": "bytes[]",
                      "name": "recipients",
                      "type": "bytes[]"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct Attestation[]",
              "name": "attestations",
              "type": "tuple[]"
          },
          {
              "internalType": "string[]",
              "name": "indexingKeys",
              "type": "string[]"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "attestBatch",
      "outputs": [
          {
              "internalType": "uint64[]",
              "name": "attestationIds",
              "type": "uint64[]"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "offchainAttestationId",
              "type": "string"
          },
          {
              "internalType": "address",
              "name": "delegateAttester",
              "type": "address"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          }
      ],
      "name": "attestOffchain",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string[]",
              "name": "attestationIds",
              "type": "string[]"
          },
          {
              "internalType": "address",
              "name": "delegateAttester",
              "type": "address"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          }
      ],
      "name": "attestOffchainBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "attestationCounter",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64",
              "name": "attestationId",
              "type": "uint64"
          }
      ],
      "name": "getAttestation",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint64",
                      "name": "schemaId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "linkedAttestationId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "attestTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "revokeTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "address",
                      "name": "attester",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "validUntil",
                      "type": "uint64"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "bool",
                      "name": "revoked",
                      "type": "bool"
                  },
                  {
                      "internalType": "bytes[]",
                      "name": "recipients",
                      "type": "bytes[]"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct Attestation",
              "name": "",
              "type": "tuple"
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
                      "internalType": "uint64",
                      "name": "schemaId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "linkedAttestationId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "attestTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "revokeTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "address",
                      "name": "attester",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "validUntil",
                      "type": "uint64"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "bool",
                      "name": "revoked",
                      "type": "bool"
                  },
                  {
                      "internalType": "bytes[]",
                      "name": "recipients",
                      "type": "bytes[]"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct Attestation[]",
              "name": "attestations",
              "type": "tuple[]"
          }
      ],
      "name": "getDelegatedAttestBatchHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint64",
                      "name": "schemaId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "linkedAttestationId",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "attestTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "uint64",
                      "name": "revokeTimestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "address",
                      "name": "attester",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "validUntil",
                      "type": "uint64"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "bool",
                      "name": "revoked",
                      "type": "bool"
                  },
                  {
                      "internalType": "bytes[]",
                      "name": "recipients",
                      "type": "bytes[]"
                  },
                  {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct Attestation",
              "name": "attestation",
              "type": "tuple"
          }
      ],
      "name": "getDelegatedAttestHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string[]",
              "name": "offchainAttestationIds",
              "type": "string[]"
          }
      ],
      "name": "getDelegatedOffchainAttestBatchHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "offchainAttestationId",
              "type": "string"
          }
      ],
      "name": "getDelegatedOffchainAttestHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string[]",
              "name": "offchainAttestationIds",
              "type": "string[]"
          },
          {
              "internalType": "string[]",
              "name": "reasons",
              "type": "string[]"
          }
      ],
      "name": "getDelegatedOffchainRevokeBatchHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "offchainAttestationId",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "reason",
              "type": "string"
          }
      ],
      "name": "getDelegatedOffchainRevokeHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "registrant",
                      "type": "address"
                  },
                  {
                      "internalType": "bool",
                      "name": "revocable",
                      "type": "bool"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "uint64",
                      "name": "maxValidFor",
                      "type": "uint64"
                  },
                  {
                      "internalType": "contract ISPHook",
                      "name": "hook",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "timestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "string",
                      "name": "data",
                      "type": "string"
                  }
              ],
              "internalType": "struct Schema[]",
              "name": "schemas",
              "type": "tuple[]"
          }
      ],
      "name": "getDelegatedRegisterBatchHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "registrant",
                      "type": "address"
                  },
                  {
                      "internalType": "bool",
                      "name": "revocable",
                      "type": "bool"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "uint64",
                      "name": "maxValidFor",
                      "type": "uint64"
                  },
                  {
                      "internalType": "contract ISPHook",
                      "name": "hook",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "timestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "string",
                      "name": "data",
                      "type": "string"
                  }
              ],
              "internalType": "struct Schema",
              "name": "schema",
              "type": "tuple"
          }
      ],
      "name": "getDelegatedRegisterHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64[]",
              "name": "attestationIds",
              "type": "uint64[]"
          },
          {
              "internalType": "string[]",
              "name": "reasons",
              "type": "string[]"
          }
      ],
      "name": "getDelegatedRevokeBatchHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64",
              "name": "attestationId",
              "type": "uint64"
          },
          {
              "internalType": "string",
              "name": "reason",
              "type": "string"
          }
      ],
      "name": "getDelegatedRevokeHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "offchainAttestationId",
              "type": "string"
          }
      ],
      "name": "getOffchainAttestation",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "attester",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "timestamp",
                      "type": "uint64"
                  }
              ],
              "internalType": "struct OffchainAttestation",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64",
              "name": "schemaId",
              "type": "uint64"
          }
      ],
      "name": "getSchema",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "registrant",
                      "type": "address"
                  },
                  {
                      "internalType": "bool",
                      "name": "revocable",
                      "type": "bool"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "uint64",
                      "name": "maxValidFor",
                      "type": "uint64"
                  },
                  {
                      "internalType": "contract ISPHook",
                      "name": "hook",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "timestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "string",
                      "name": "data",
                      "type": "string"
                  }
              ],
              "internalType": "struct Schema",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64",
              "name": "schemaCounter_",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "attestationCounter_",
              "type": "uint64"
          }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "proxiableUUID",
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
                      "internalType": "address",
                      "name": "registrant",
                      "type": "address"
                  },
                  {
                      "internalType": "bool",
                      "name": "revocable",
                      "type": "bool"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "uint64",
                      "name": "maxValidFor",
                      "type": "uint64"
                  },
                  {
                      "internalType": "contract ISPHook",
                      "name": "hook",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "timestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "string",
                      "name": "data",
                      "type": "string"
                  }
              ],
              "internalType": "struct Schema",
              "name": "schema",
              "type": "tuple"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          }
      ],
      "name": "register",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "schemaId",
              "type": "uint64"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "registrant",
                      "type": "address"
                  },
                  {
                      "internalType": "bool",
                      "name": "revocable",
                      "type": "bool"
                  },
                  {
                      "internalType": "enum DataLocation",
                      "name": "dataLocation",
                      "type": "uint8"
                  },
                  {
                      "internalType": "uint64",
                      "name": "maxValidFor",
                      "type": "uint64"
                  },
                  {
                      "internalType": "contract ISPHook",
                      "name": "hook",
                      "type": "address"
                  },
                  {
                      "internalType": "uint64",
                      "name": "timestamp",
                      "type": "uint64"
                  },
                  {
                      "internalType": "string",
                      "name": "data",
                      "type": "string"
                  }
              ],
              "internalType": "struct Schema[]",
              "name": "schemas",
              "type": "tuple[]"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          }
      ],
      "name": "registerBatch",
      "outputs": [
          {
              "internalType": "uint64[]",
              "name": "schemaIds",
              "type": "uint64[]"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64",
              "name": "attestationId",
              "type": "uint64"
          },
          {
              "internalType": "string",
              "name": "reason",
              "type": "string"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "revoke",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64",
              "name": "attestationId",
              "type": "uint64"
          },
          {
              "internalType": "string",
              "name": "reason",
              "type": "string"
          },
          {
              "internalType": "contract IERC20",
              "name": "resolverFeesERC20Token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "resolverFeesERC20Amount",
              "type": "uint256"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "revoke",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64",
              "name": "attestationId",
              "type": "uint64"
          },
          {
              "internalType": "string",
              "name": "reason",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "resolverFeesETH",
              "type": "uint256"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "revoke",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64[]",
              "name": "attestationIds",
              "type": "uint64[]"
          },
          {
              "internalType": "string[]",
              "name": "reasons",
              "type": "string[]"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "revokeBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64[]",
              "name": "attestationIds",
              "type": "uint64[]"
          },
          {
              "internalType": "string[]",
              "name": "reasons",
              "type": "string[]"
          },
          {
              "internalType": "uint256[]",
              "name": "resolverFeesETH",
              "type": "uint256[]"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "revokeBatch",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64[]",
              "name": "attestationIds",
              "type": "uint64[]"
          },
          {
              "internalType": "string[]",
              "name": "reasons",
              "type": "string[]"
          },
          {
              "internalType": "contract IERC20[]",
              "name": "resolverFeesERC20Tokens",
              "type": "address[]"
          },
          {
              "internalType": "uint256[]",
              "name": "resolverFeesERC20Amount",
              "type": "uint256[]"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
          }
      ],
      "name": "revokeBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "offchainAttestationId",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "reason",
              "type": "string"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          }
      ],
      "name": "revokeOffchain",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string[]",
              "name": "offchainAttestationIds",
              "type": "string[]"
          },
          {
              "internalType": "string[]",
              "name": "reasons",
              "type": "string[]"
          },
          {
              "internalType": "bytes",
              "name": "delegateSignature",
              "type": "bytes"
          }
      ],
      "name": "revokeOffchainBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "schemaCounter",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "hook",
              "type": "address"
          }
      ],
      "name": "setGlobalHook",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bool",
              "name": "paused",
              "type": "bool"
          }
      ],
      "name": "setPause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
          },
          {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
          }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "version",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  }
]

export const signProxyABI = [
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
          },
          {
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
          }
      ],
      "stateMutability": "payable",
      "type": "constructor"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "target",
              "type": "address"
          }
      ],
      "name": "AddressEmptyCode",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
          }
      ],
      "name": "ERC1967InvalidImplementation",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "ERC1967NonPayable",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "FailedInnerCall",
      "type": "error"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
          }
      ],
      "name": "Upgraded",
      "type": "event"
  },
  {
      "stateMutability": "payable",
      "type": "fallback"
  }
]

export const tsdABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_projectName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_projectDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_dataURI",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "dataURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isAttested",
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
    "name": "projectDescription",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "projectName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "userName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]