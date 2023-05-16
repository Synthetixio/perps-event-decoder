export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_events",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marginAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_futuresMarketManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_systemStatus",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gelato",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ops",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EthWithdrawalFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
    ],
    name: "InsufficientFreeMargin",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "commandType",
        type: "uint256",
      },
    ],
    name: "InvalidCommandType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegateAddress",
        type: "address",
      },
    ],
    name: "InvalidDelegateAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPrice",
    type: "error",
  },
  {
    inputs: [],
    name: "LengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyOps",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroSizeDelta",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "DelegatedAccountAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "DelegatedAccountRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "ETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GELATO",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_delegate",
        type: "address",
      },
    ],
    name: "addDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_conditionalOrderId",
        type: "uint256",
      },
    ],
    name: "checker",
    outputs: [
      {
        internalType: "bool",
        name: "canExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execPayload",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committedMargin",
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
    inputs: [],
    name: "conditionalOrderId",
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
        name: "delegate",
        type: "address",
      },
    ],
    name: "delegates",
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
    inputs: [
      {
        internalType: "enum IAccount.Command[]",
        name: "_commands",
        type: "uint8[]",
      },
      {
        internalType: "bytes[]",
        name: "_inputs",
        type: "bytes[]",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_conditionalOrderId",
        type: "uint256",
      },
    ],
    name: "executeConditionalOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "freeMargin",
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
        name: "_conditionalOrderId",
        type: "uint256",
      },
    ],
    name: "getConditionalOrder",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "marketKey",
            type: "bytes32",
          },
          {
            internalType: "int256",
            name: "marginDelta",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "sizeDelta",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "targetPrice",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "gelatoTaskId",
            type: "bytes32",
          },
          {
            internalType: "enum IAccount.ConditionalOrderTypes",
            name: "conditionalOrderType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "desiredFillPrice",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "reduceOnly",
            type: "bool",
          },
        ],
        internalType: "struct IAccount.ConditionalOrder",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_marketKey",
        type: "bytes32",
      },
    ],
    name: "getDelayedOrder",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isOffchain",
            type: "bool",
          },
          {
            internalType: "int128",
            name: "sizeDelta",
            type: "int128",
          },
          {
            internalType: "uint128",
            name: "desiredFillPrice",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "targetRoundId",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "commitDeposit",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "keeperDeposit",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "executableAtTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "intentionTime",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "trackingCode",
            type: "bytes32",
          },
        ],
        internalType: "struct IPerpsV2MarketConsolidated.DelayedOrder",
        name: "order",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_marketKey",
        type: "bytes32",
      },
    ],
    name: "getPosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "id",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastFundingIndex",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "margin",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "lastPrice",
            type: "uint128",
          },
          {
            internalType: "int128",
            name: "size",
            type: "int128",
          },
        ],
        internalType: "struct IPerpsV2MarketConsolidated.Position",
        name: "position",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isAuth",
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
    name: "isOwner",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_delegate",
        type: "address",
      },
    ],
    name: "removeDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setInitialOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
