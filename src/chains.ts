const Ethereum = {
    hex: '0x1',
    name: 'Ethereum',
    rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/YY-_1LgNtTCU3yBKddZEjl3un7shBeft',
    ticker: "ETH"
};

const Solana = {
    hex: '0x2',
    name: 'Solana',
    rpcUrl: 'https://solana-mainnet.g.alchemy.com/v2/YY-_1LgNtTCU3yBKddZEjl3un7shBeft',
    ticker: "SOL"
};

const Bitcoin = {
    hex: '0x3',
    name: 'Bitcoin',
    rpcUrl: 'https://bitcoin-mainnet.public.blastapi.io',
    ticker: "BTC"
};

const Polygon = {
    hex: '0x89',
    name: 'Polygon',
    rpcUrl: 'https://polygon-mainnet.g.alchemy.com/v2/YY-_1LgNtTCU3yBKddZEjl3un7shBeft',
    ticker: "MATIC"
};

const Base = {
    hex: '0x6',
    name: 'Base',
    rpcUrl: 'https://base-mainnet.g.alchemy.com/v2/YY-_1LgNtTCU3yBKddZEjl3un7shBeft',
    ticker: "BASE"
};

const SolanaDevnet = {
    hex: '0x38',
    name: 'Solana',
    rpcUrl: 'https://solana-devnet.g.alchemy.com/v2/YY-_1LgNtTCU3yBKddZEjl3un7shBeft',
    ticker: "SOL"
};

const PolygonTestnet = {
    hex: '0x13881',
    name: 'Polygon',
    rpcUrl: 'https://polygonzkevm-cardona.g.alchemy.com/v2/YY-_1LgNtTCU3yBKddZEjl3un7shBeft',
    ticker: "MATIC"
};

const Holesky = {
    hex: '0x5',
    name: 'Holesky',
    rpcUrl: 'https://eth-holesky.g.alchemy.com/v2/YY-_1LgNtTCU3yBKddZEjl3un7shBeft',
    ticker: "ETH"
};

const Sepolia = {
    hex: '0x4',
    name: 'Sepolia (Ethereum)',
    rpcUrl: 'https://eth-sepolia.g.alchemy.com/v2/YY-_1LgNtTCU3yBKddZEjl3un7shBeft',
    ticker: "ETH"
};

export const CHAINS_CONFIG = {
    "0x1": Ethereum,
    "0x2": Solana,
    "0x3": Bitcoin,
    "0x89": Polygon,
    "0x6": Base,
    "0x38": SolanaDevnet,
    "0x13881": PolygonTestnet,
    "0x5": Holesky,
    "0x4": Sepolia,
};