export interface Project {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  contractCount?: number;
  links?: {
    website?: string;
    twitter?: string;
    github?: string;
    docs?: string;
  };
}

export const categories = [
  { id: 'ai', name: 'AI', color: '#00d4ff', description: 'AI agents and infrastructure' },
  { id: 'defi', name: 'DeFi', color: '#ffa500', description: 'Decentralized finance protocols' },
  { id: 'gaming', name: 'Gaming', color: '#ff1493', description: 'Blockchain games and metaverse' },
  { id: 'infrastructure', name: 'Infrastructure', color: '#00ffd0', description: 'Core blockchain infrastructure' },
  { id: 'nft', name: 'NFTs', color: '#7fff00', description: 'NFT marketplaces and collections' },
  { id: 'depin', name: 'DePIN', color: '#9370db', description: 'Decentralized physical infrastructure' },
  { id: 'consumer', name: 'Consumer', color: '#ff6b6b', description: 'Consumer applications' },
];

export const projects: Project[] = [
  // AI Projects
  {
    id: 'cycle-network',
    name: 'Cycle Network',
    category: 'ai',
    subcategory: 'Abstraction Infrastructure',
    description: 'Infrastructure layer for AI applications with ZkEVM capabilities',
    contractCount: 2,
  },
  {
    id: 'kodeus',
    name: 'Kodeus',
    category: 'ai',
    subcategory: 'Consumer AI',
    description: 'AI agents platform with comprehensive metrics tracking',
    contractCount: 2,
  },
  {
    id: 'blazpay',
    name: 'Blazpay',
    category: 'ai',
    subcategory: 'Abstraction Infrastructure',
    description: 'Smart contract abstraction infrastructure with multiple product implementations',
    contractCount: 4,
  },
  {
    id: 'gm-agents',
    name: 'GM Agents',
    category: 'ai',
    subcategory: 'Agent Launchpad',
    description: 'Platform for launching AI agent applications',
    contractCount: 1,
  },
  {
    id: 'monad-baby',
    name: 'Monad Baby',
    category: 'ai',
    subcategory: 'Agent Launchpad',
    description: 'Agent launchpad implementation on Monad',
    contractCount: 1,
  },
  {
    id: 'aicraft',
    name: 'aiCraft.fun',
    category: 'ai',
    subcategory: 'Agent Launchpad',
    description: 'Interactive AI crafting platform',
    contractCount: 1,
  },
  {
    id: 'proof-of-skill',
    name: 'Proof-of-Skill',
    category: 'ai',
    subcategory: 'Consumer AI',
    description: 'Skill verification and validation protocol',
    contractCount: 1,
  },
  {
    id: 'codatta',
    name: 'Codatta',
    category: 'ai',
    subcategory: 'Data',
    description: 'Data collection and labeling infrastructure',
    contractCount: 2,
  },

  // DeFi - DEX
  {
    id: 'uniswap',
    name: 'Uniswap',
    category: 'defi',
    subcategory: 'DEX',
    description: 'Full-featured DEX with V2/V3 pools, universal router, and position management',
    contractCount: 25,
  },
  {
    id: 'pancakeswap',
    name: 'PancakeSwap',
    category: 'defi',
    subcategory: 'DEX',
    description: 'Multi-version DEX with routing and quoter functions',
    contractCount: 15,
  },
  {
    id: 'clober',
    name: 'Clober',
    category: 'defi',
    subcategory: 'DEX',
    description: 'Order book DEX with advanced routing capabilities',
    contractCount: 8,
  },
  {
    id: 'skate-amm',
    name: 'Skate AMM',
    category: 'defi',
    subcategory: 'DEX',
    description: 'AMM with periphery management and specific pool pairs',
    contractCount: 5,
  },
  {
    id: 'swaap',
    name: 'Swaap',
    category: 'defi',
    subcategory: 'DEX',
    description: 'Safeguard vault-based DEX protocol',
    contractCount: 3,
  },
  {
    id: 'balancer',
    name: 'Balancer',
    category: 'defi',
    subcategory: 'DEX',
    description: 'Multi-token liquidity protocol',
    contractCount: 12,
  },
  {
    id: 'ambient',
    name: 'Ambient',
    category: 'defi',
    subcategory: 'DEX',
    description: 'Concentrated liquidity DEX',
    contractCount: 6,
  },
  {
    id: 'monadex',
    name: 'Monadex',
    category: 'defi',
    subcategory: 'DEX',
    description: 'Native Monad DEX implementation',
    contractCount: 10,
  },

  // DeFi - Aggregators
  {
    id: 'eisen',
    name: 'Eisen',
    category: 'defi',
    subcategory: 'DEX Aggregator',
    description: 'DEX aggregation with diamond proxy architecture',
    contractCount: 4,
  },

  // DeFi - Lending
  {
    id: 'neverland',
    name: 'Neverland',
    category: 'defi',
    subcategory: 'Lending',
    description: 'Comprehensive lending platform with 80+ token markets, aTokens, and debt tokens',
    contractCount: 85,
  },
  {
    id: 'timeswap',
    name: 'Timeswap',
    category: 'defi',
    subcategory: 'Lending',
    description: 'Options-based lending with liquidity tokens and periphery contracts',
    contractCount: 12,
  },
  {
    id: 'townsquare',
    name: 'TownSquare',
    category: 'defi',
    subcategory: 'Lending',
    description: 'Cross-chain lending hub with spoke architecture',
    contractCount: 8,
  },
  {
    id: 'euler',
    name: 'Euler',
    category: 'defi',
    subcategory: 'Lending',
    description: 'Multi-collateral lending protocol',
    contractCount: 15,
  },
  {
    id: 'kinza',
    name: 'Kinza Finance',
    category: 'defi',
    subcategory: 'Lending',
    description: 'Lending pool implementation',
    contractCount: 10,
  },

  // DeFi - Liquid Staking
  {
    id: 'magma',
    name: 'Magma',
    category: 'defi',
    subcategory: 'Liquid Staking',
    description: 'Staking management system',
    contractCount: 5,
  },
  {
    id: 'stakestone',
    name: 'StakeStone',
    category: 'defi',
    subcategory: 'Liquid Staking',
    description: 'Yield-bearing staked asset token',
    contractCount: 3,
  },
  {
    id: 'renzo',
    name: 'Renzo',
    category: 'defi',
    subcategory: 'Liquid Staking',
    description: 'Liquid restaking protocol',
    contractCount: 4,
  },

  // DeFi - Perpetuals
  {
    id: 'kiloex',
    name: 'KiloEx',
    category: 'defi',
    subcategory: 'Perpetuals',
    description: 'Full-featured perpetual futures exchange',
    contractCount: 18,
  },
  {
    id: 'leverup',
    name: 'LeverUp',
    category: 'defi',
    subcategory: 'Perpetuals',
    description: 'Perpetuals and derivatives with stablecoin issuance',
    contractCount: 8,
  },
  {
    id: 'zaros',
    name: 'Zaros',
    category: 'defi',
    subcategory: 'Perpetuals',
    description: 'Market making and perps engines',
    contractCount: 12,
  },
  {
    id: 'pingu',
    name: 'Pingu Exchange',
    category: 'defi',
    subcategory: 'Perpetuals',
    description: 'GMX-style perpetuals exchange',
    contractCount: 10,
  },

  // DeFi - Other
  {
    id: 'flap',
    name: 'Flap',
    category: 'defi',
    subcategory: 'Launchpad',
    description: 'Token launchpad with tax token implementations',
    contractCount: 3,
  },
  {
    id: 'enjoyoors',
    name: 'Enjoyoors',
    category: 'defi',
    subcategory: 'Yield',
    description: 'Yield vaults with withdrawal approval',
    contractCount: 2,
  },
  {
    id: 'usdc',
    name: 'Circle USDC',
    category: 'defi',
    subcategory: 'Stablecoin',
    description: 'USDC stablecoin deployment',
    contractCount: 1,
  },
  {
    id: 'bima',
    name: 'Bima',
    category: 'defi',
    subcategory: 'CDP',
    description: 'Collateralized debt position protocol',
    contractCount: 6,
  },

  // Gaming
  {
    id: 'legends-of-elysium',
    name: 'Legends of Elysium',
    category: 'gaming',
    description: 'Full-featured card game ecosystem with avatars, heroes, and marketplace',
    contractCount: 25,
  },
  {
    id: 'showdown',
    name: 'Showdown',
    category: 'gaming',
    description: 'Competitive gaming platform (CS2, Chess, Tournaments)',
    contractCount: 8,
  },
  {
    id: 'atdawn',
    name: 'AtDawn',
    category: 'gaming',
    description: 'RPG with weapons, props, and settlements',
    contractCount: 15,
  },
  {
    id: 'monix',
    name: 'Monix',
    category: 'gaming',
    description: 'Metaverse gaming with NFT ownership',
    contractCount: 12,
  },
  {
    id: 'treasure-dwarf',
    name: 'Treasure Dwarf Battles',
    category: 'gaming',
    description: 'Mining and battle system game',
    contractCount: 10,
  },

  // Infrastructure - Interoperability
  {
    id: 'axelar',
    name: 'Axelar',
    category: 'infrastructure',
    subcategory: 'Interoperability',
    description: 'Cross-chain messaging with gas service',
    contractCount: 6,
  },
  {
    id: 'chainlink-ccip',
    name: 'Chainlink CCIP',
    category: 'infrastructure',
    subcategory: 'Interoperability',
    description: 'Cross-chain interoperability protocol',
    contractCount: 8,
  },
  {
    id: 'circle-cctp',
    name: 'Circle CCTP',
    category: 'infrastructure',
    subcategory: 'Interoperability',
    description: 'Cross-chain transfer protocol',
    contractCount: 3,
  },
  {
    id: 'layerzero',
    name: 'LayerZero',
    category: 'infrastructure',
    subcategory: 'Interoperability',
    description: 'Cross-chain messaging protocol',
    contractCount: 12,
  },
  {
    id: 'wormhole',
    name: 'Wormhole',
    category: 'infrastructure',
    subcategory: 'Interoperability',
    description: 'Multi-chain messaging and token bridge',
    contractCount: 10,
  },

  // Infrastructure - Oracles
  {
    id: 'chainlink',
    name: 'Chainlink',
    category: 'infrastructure',
    subcategory: 'Oracles',
    description: '50+ price feeds for major assets',
    contractCount: 55,
  },
  {
    id: 'chronicle',
    name: 'Chronicle',
    category: 'infrastructure',
    subcategory: 'Oracles',
    description: '30+ price oracle feeds',
    contractCount: 32,
  },
  {
    id: 'pyth',
    name: 'Pyth Network',
    category: 'infrastructure',
    subcategory: 'Oracles',
    description: 'Real-time price feeds with entropy',
    contractCount: 15,
  },
  {
    id: 'stork',
    name: 'Stork',
    category: 'infrastructure',
    subcategory: 'Oracles',
    description: 'Data feed infrastructure',
    contractCount: 5,
  },
  {
    id: 'switchboard',
    name: 'Switchboard',
    category: 'infrastructure',
    subcategory: 'Oracles',
    description: 'Oracle aggregation service',
    contractCount: 8,
  },

  // Infrastructure - Wallets
  {
    id: 'safe',
    name: 'Safe',
    category: 'infrastructure',
    subcategory: 'Wallets',
    description: 'Multi-signature wallet infrastructure',
    contractCount: 12,
  },
  {
    id: 'gelato',
    name: 'Gelato',
    category: 'infrastructure',
    subcategory: 'Account Abstraction',
    description: 'Relay infrastructure for ERC-2771 transactions',
    contractCount: 6,
  },
  {
    id: 'pimlico',
    name: 'Pimlico',
    category: 'infrastructure',
    subcategory: 'Account Abstraction',
    description: 'EntryPoint and Paymaster implementations',
    contractCount: 4,
  },

  // Infrastructure - Identity
  {
    id: 'mon-name-service',
    name: 'Mon Name Service',
    category: 'infrastructure',
    subcategory: 'Identity',
    description: 'Domain naming protocol for Monad',
    contractCount: 3,
  },
  {
    id: 'anima',
    name: 'Anima',
    category: 'infrastructure',
    subcategory: 'Identity',
    description: 'Identity verification protocol',
    contractCount: 2,
  },

  // NFTs
  {
    id: 'poply',
    name: 'Poply',
    category: 'nft',
    description: 'NFT drop factory and marketplace platform',
    contractCount: 6,
  },
  {
    id: 'magic-eden',
    name: 'Magic Eden',
    category: 'nft',
    description: 'Multi-contract NFT marketplace implementation',
    contractCount: 15,
  },
  {
    id: 'nfts2me',
    name: 'NFTs2Me',
    category: 'nft',
    description: 'Mass minting infrastructure',
    contractCount: 4,
  },
  {
    id: 'demask',
    name: 'Demask Financial',
    category: 'nft',
    subcategory: 'NFT Finance',
    description: 'Fractional NFT trading and launchpad',
    contractCount: 8,
  },

  // Consumer
  {
    id: 'm0narch',
    name: 'M0narch',
    category: 'consumer',
    subcategory: 'Betting',
    description: 'Multi-game betting and prediction platform',
    contractCount: 12,
  },
  {
    id: 'opinion-labs',
    name: 'Opinion Labs',
    category: 'consumer',
    subcategory: 'Prediction Markets',
    description: 'Conditional token prediction market',
    contractCount: 6,
  },
  {
    id: 'talentum',
    name: 'Talentum',
    category: 'consumer',
    subcategory: 'Social',
    description: 'Community engagement and payroll system',
    contractCount: 5,
  },
  {
    id: 'moseiki',
    name: 'Moseiki',
    category: 'consumer',
    subcategory: 'Social',
    description: 'Social handle and post minting',
    contractCount: 3,
  },
  {
    id: 'blocklive',
    name: 'Blocklive',
    category: 'consumer',
    subcategory: 'Ticketing',
    description: 'Event ticketing on blockchain',
    contractCount: 4,
  },

  // DePIN
  {
    id: 'acurast',
    name: 'Acurast',
    category: 'depin',
    description: 'Decentralized compute infrastructure',
    contractCount: 8,
  },
  {
    id: 'vape-labs',
    name: 'The Vape Labs',
    category: 'depin',
    description: 'Data collection network',
    contractCount: 5,
  },
  {
    id: 'skytrade',
    name: 'SkyTrade',
    category: 'depin',
    description: 'RWA and infrastructure registry',
    contractCount: 6,
  },
];
