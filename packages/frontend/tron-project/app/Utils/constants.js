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