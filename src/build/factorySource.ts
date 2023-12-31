const accountAbi = {
  ABIversion: 2,
  version: "2.2",
  header: ["pubkey", "time", "expire"],
  functions: [
    { name: "constructor", inputs: [], outputs: [] },
    {
      name: "sendTransaction",
      inputs: [
        { name: "dest", type: "address" },
        { name: "value", type: "uint128" },
        { name: "bounce", type: "bool" },
        { name: "flags", type: "uint8" },
        { name: "payload", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "transferOwnership",
      inputs: [{ name: "newOwner", type: "uint256" }],
      outputs: [],
    },
    {
      name: "owner",
      inputs: [],
      outputs: [{ name: "owner", type: "uint256" }],
    },
    {
      name: "_randomNonce",
      inputs: [],
      outputs: [{ name: "_randomNonce", type: "uint256" }],
    },
  ],
  data: [{ key: 1, name: "_randomNonce", type: "uint256" }],
  events: [
    {
      name: "OwnershipTransferred",
      inputs: [
        { name: "previousOwner", type: "uint256" },
        { name: "newOwner", type: "uint256" },
      ],
      outputs: [],
    },
  ],
  fields: [
    { name: "_pubkey", type: "uint256" },
    { name: "_timestamp", type: "uint64" },
    { name: "_constructorFlag", type: "bool" },
    { name: "owner", type: "uint256" },
    { name: "_randomNonce", type: "uint256" },
  ],
} as const;
const collectionWithRoyaltyAbi = {
  ABIversion: 2,
  version: "2.2",
  header: ["pubkey", "time", "expire"],
  functions: [
    {
      name: "constructor",
      inputs: [
        { name: "codeNft", type: "cell" },
        { name: "codeIndex", type: "cell" },
        { name: "codeIndexBasis", type: "cell" },
        { name: "owner", type: "address" },
        { name: "remainOnNft", type: "uint128" },
        { name: "json", type: "string" },
      ],
      outputs: [],
    },
    {
      name: "codeDepth",
      inputs: [],
      outputs: [{ name: "value0", type: "uint16" }],
    },
    {
      name: "mintNft",
      inputs: [
        { name: "_owner", type: "address" },
        { name: "_json", type: "string" },
        {
          components: [
            { name: "numerator", type: "uint128" },
            { name: "denominator", type: "uint128" },
            { name: "receiver", type: "address" },
          ],
          name: "_royalty",
          type: "tuple",
        },
      ],
      outputs: [],
    },
    {
      name: "totalMinted",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "count", type: "uint256" }],
    },
    {
      name: "batchMintNft",
      inputs: [
        { name: "_owner", type: "address" },
        { name: "_jsons", type: "string[]" },
        {
          components: [
            { name: "numerator", type: "uint128" },
            { name: "denominator", type: "uint128" },
            { name: "receiver", type: "address" },
          ],
          name: "_royalty",
          type: "tuple",
        },
      ],
      outputs: [],
    },
    {
      name: "setRemainOnNft",
      inputs: [{ name: "remainOnNft", type: "uint128" }],
      outputs: [],
    },
    {
      name: "resolveIndexCodeHash",
      inputs: [
        { name: "collection", type: "address" },
        { name: "owner", type: "address" },
      ],
      outputs: [{ name: "hash", type: "uint256" }],
    },
    {
      name: "acceptNftBurn",
      inputs: [
        { name: "_id", type: "uint256" },
        { name: "_owner", type: "address" },
        { name: "_manager", type: "address" },
        { name: "_sendGasTo", type: "address" },
        { name: "_callbackTo", type: "address" },
        { name: "_callbackPayload", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "owner",
      inputs: [],
      outputs: [{ name: "value0", type: "address" }],
    },
    {
      name: "transferOwnership",
      inputs: [{ name: "newOwner", type: "address" }],
      outputs: [],
    },
    {
      name: "indexBasisCode",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "code", type: "cell" }],
    },
    {
      name: "indexBasisCodeHash",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "hash", type: "uint256" }],
    },
    {
      name: "resolveIndexBasis",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "indexBasis", type: "address" }],
    },
    {
      name: "indexCode",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "code", type: "cell" }],
    },
    {
      name: "indexCodeHash",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "hash", type: "uint256" }],
    },
    {
      name: "getJson",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "json", type: "string" }],
    },
    {
      name: "totalSupply",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "count", type: "uint128" }],
    },
    {
      name: "nftCode",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "code", type: "cell" }],
    },
    {
      name: "nftCodeHash",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "codeHash", type: "uint256" }],
    },
    {
      name: "nftAddress",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "id", type: "uint256" },
      ],
      outputs: [{ name: "nft", type: "address" }],
    },
    {
      name: "supportsInterface",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "interfaceID", type: "uint32" },
      ],
      outputs: [{ name: "value0", type: "bool" }],
    },
  ],
  data: [{ key: 1, name: "nonce_", type: "uint64" }],
  events: [
    {
      name: "OwnershipTransferred",
      inputs: [
        { name: "oldOwner", type: "address" },
        { name: "newOwner", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "NftCreated",
      inputs: [
        { name: "id", type: "uint256" },
        { name: "nft", type: "address" },
        { name: "owner", type: "address" },
        { name: "manager", type: "address" },
        { name: "creator", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "NftBurned",
      inputs: [
        { name: "id", type: "uint256" },
        { name: "nft", type: "address" },
        { name: "owner", type: "address" },
        { name: "manager", type: "address" },
      ],
      outputs: [],
    },
  ],
  fields: [
    { name: "_pubkey", type: "uint256" },
    { name: "_timestamp", type: "uint64" },
    { name: "_constructorFlag", type: "bool" },
    { name: "_supportedInterfaces", type: "optional(cell)" },
    { name: "_codeNft", type: "cell" },
    { name: "_totalSupply", type: "uint128" },
    { name: "_json", type: "string" },
    { name: "_codeIndex", type: "cell" },
    { name: "_codeIndexBasis", type: "cell" },
    { name: "_indexDeployValue", type: "uint128" },
    { name: "_indexDestroyValue", type: "uint128" },
    { name: "_deployIndexBasisValue", type: "uint128" },
    { name: "owner_", type: "address" },
    { name: "nonce_", type: "uint64" },
    { name: "_remainOnNft", type: "uint128" },
    { name: "_totalMinted", type: "uint256" },
  ],
} as const;
const indexAbi = {
  ABIversion: 2,
  version: "2.2",
  header: ["time"],
  functions: [
    {
      name: "constructor",
      inputs: [{ name: "collection", type: "address" }],
      outputs: [],
    },
    {
      name: "getInfo",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [
        { name: "collection", type: "address" },
        { name: "owner", type: "address" },
        { name: "nft", type: "address" },
      ],
    },
    {
      name: "destruct",
      inputs: [{ name: "gasReceiver", type: "address" }],
      outputs: [],
    },
  ],
  data: [{ key: 1, name: "_nft", type: "address" }],
  events: [],
  fields: [
    { name: "_pubkey", type: "uint256" },
    { name: "_timestamp", type: "uint64" },
    { name: "_constructorFlag", type: "bool" },
    { name: "_nft", type: "address" },
    { name: "_collection", type: "address" },
    { name: "_owner", type: "address" },
  ],
} as const;
const indexBasisAbi = {
  ABIversion: 2,
  version: "2.2",
  header: ["time"],
  functions: [
    { name: "constructor", inputs: [], outputs: [] },
    {
      name: "getInfo",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "collection", type: "address" }],
    },
    {
      name: "destruct",
      inputs: [{ name: "gasReceiver", type: "address" }],
      outputs: [],
    },
  ],
  data: [{ key: 1, name: "_collection", type: "address" }],
  events: [],
  fields: [
    { name: "_pubkey", type: "uint256" },
    { name: "_timestamp", type: "uint64" },
    { name: "_constructorFlag", type: "bool" },
    { name: "_collection", type: "address" },
  ],
} as const;
const nftWithRoyaltyAbi = {
  ABIversion: 2,
  version: "2.2",
  header: ["pubkey", "time", "expire"],
  functions: [
    {
      name: "constructor",
      inputs: [
        { name: "owner", type: "address" },
        { name: "sendGasTo", type: "address" },
        { name: "remainOnNft", type: "uint128" },
        { name: "json", type: "string" },
        { name: "indexDeployValue", type: "uint128" },
        { name: "indexDestroyValue", type: "uint128" },
        { name: "codeIndex", type: "cell" },
        {
          components: [
            { name: "numerator", type: "uint128" },
            { name: "denominator", type: "uint128" },
            { name: "receiver", type: "address" },
          ],
          name: "royalty",
          type: "tuple",
        },
      ],
      outputs: [],
    },
    {
      name: "burn",
      inputs: [
        { name: "sendGasTo", type: "address" },
        { name: "callbackTo", type: "address" },
        { name: "callbackPayload", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "royaltyInfo",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "salePrice", type: "uint128" },
      ],
      outputs: [
        { name: "receiver", type: "address" },
        { name: "royaltyAmount", type: "uint128" },
      ],
    },
    {
      name: "indexCode",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "code", type: "cell" }],
    },
    {
      name: "indexCodeHash",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "hash", type: "uint256" }],
    },
    {
      name: "resolveIndex",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "collection", type: "address" },
        { name: "owner", type: "address" },
      ],
      outputs: [{ name: "index", type: "address" }],
    },
    {
      name: "getJson",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "json", type: "string" }],
    },
    {
      name: "transfer",
      inputs: [
        { name: "to", type: "address" },
        { name: "sendGasTo", type: "address" },
        {
          components: [
            { name: "value", type: "uint128" },
            { name: "payload", type: "cell" },
          ],
          name: "callbacks",
          type: "map(address,tuple)",
        },
      ],
      outputs: [],
    },
    {
      name: "changeOwner",
      inputs: [
        { name: "newOwner", type: "address" },
        { name: "sendGasTo", type: "address" },
        {
          components: [
            { name: "value", type: "uint128" },
            { name: "payload", type: "cell" },
          ],
          name: "callbacks",
          type: "map(address,tuple)",
        },
      ],
      outputs: [],
    },
    {
      name: "changeManager",
      inputs: [
        { name: "newManager", type: "address" },
        { name: "sendGasTo", type: "address" },
        {
          components: [
            { name: "value", type: "uint128" },
            { name: "payload", type: "cell" },
          ],
          name: "callbacks",
          type: "map(address,tuple)",
        },
      ],
      outputs: [],
    },
    {
      name: "getInfo",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [
        { name: "id", type: "uint256" },
        { name: "owner", type: "address" },
        { name: "manager", type: "address" },
        { name: "collection", type: "address" },
      ],
    },
    {
      name: "supportsInterface",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "interfaceID", type: "uint32" },
      ],
      outputs: [{ name: "value0", type: "bool" }],
    },
  ],
  data: [{ key: 1, name: "_id", type: "uint256" }],
  events: [
    {
      name: "NftCreated",
      inputs: [
        { name: "id", type: "uint256" },
        { name: "owner", type: "address" },
        { name: "manager", type: "address" },
        { name: "collection", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "OwnerChanged",
      inputs: [
        { name: "oldOwner", type: "address" },
        { name: "newOwner", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "ManagerChanged",
      inputs: [
        { name: "oldManager", type: "address" },
        { name: "newManager", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "NftBurned",
      inputs: [
        { name: "id", type: "uint256" },
        { name: "owner", type: "address" },
        { name: "manager", type: "address" },
        { name: "collection", type: "address" },
      ],
      outputs: [],
    },
  ],
  fields: [
    { name: "_pubkey", type: "uint256" },
    { name: "_timestamp", type: "uint64" },
    { name: "_constructorFlag", type: "bool" },
    { name: "_supportedInterfaces", type: "optional(cell)" },
    { name: "_id", type: "uint256" },
    { name: "_collection", type: "address" },
    { name: "_owner", type: "address" },
    { name: "_manager", type: "address" },
    { name: "_json", type: "string" },
    { name: "_indexDeployValue", type: "uint128" },
    { name: "_indexDestroyValue", type: "uint128" },
    { name: "_codeIndex", type: "cell" },
    {
      components: [
        { name: "numerator", type: "uint128" },
        { name: "denominator", type: "uint128" },
        { name: "receiver", type: "address" },
      ],
      name: "_royalty",
      type: "tuple",
    },
  ],
} as const;

export const factorySource = {
  Account: accountAbi,
  CollectionWithRoyalty: collectionWithRoyaltyAbi,
  Index: indexAbi,
  IndexBasis: indexBasisAbi,
  NftWithRoyalty: nftWithRoyaltyAbi,
} as const;

export type FactorySource = typeof factorySource;
export type AccountAbi = typeof accountAbi;
export type CollectionWithRoyaltyAbi = typeof collectionWithRoyaltyAbi;
export type IndexAbi = typeof indexAbi;
export type IndexBasisAbi = typeof indexBasisAbi;
export type NftWithRoyaltyAbi = typeof nftWithRoyaltyAbi;
