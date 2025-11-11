export interface Project {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  contractCount?: number;
  logo?: string;
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
  {
    "id": "0x",
    "name": "0x",
    "category": "infrastructure",
    "description": "0x allows you to embed swaps in any onchain app. Tap into aggregated liquidity from 130+ sources, best prices & optimal trade execution.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9106b6ca74a7001624998_0x_logo.webp",
    "links": {
      "website": "https://0x.org/",
      "twitter": "https://x.com/0xProject"
    }
  },
  {
    "id": "ausd",
    "name": "AUSD",
    "category": "defi",
    "description": "Agora is a stablecoin issuer of AUSD, backed 1:1 by cash and cash equivalent reserves managed by VanEck and custodied by State Street.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c620f4a0bab10af98e0508_ausd.webp",
    "links": {
      "website": "https://agora.finance",
      "twitter": "https://x.com/withAUSD"
    }
  },
  {
    "id": "azex",
    "name": "AZEx",
    "category": "defi",
    "description": "Your A-Z DeFi Hub in One Click. Trade any asset as margin with 100x leverage. Multi-Chain Protocol. AI-Powered Copytrading.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67e316cec7faf77a521ebdc3_AZEX-icon-wht-background-300x300.webp",
    "links": {
      "website": "https://azex.io/home",
      "twitter": "https://x.com/azex_io"
    }
  },
  {
    "id": "aarna",
    "name": "Aarna",
    "category": "defi",
    "description": "Next-generation DeFi asset management platform via crypto structured products, merging AI and tokenization.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6834a164fae7947828580000_Twitter-Logo.webp",
    "links": {
      "website": "https://www.aarna.ai/",
      "twitter": "https://x.com/aarnasays"
    }
  },
  {
    "id": "accountable",
    "name": "Accountable",
    "category": "defi",
    "description": "YieldApp is the first yield marketplace backed by live, cryptographically verifiable data users can trust.",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68a7302c461b97699ee0f421_Profile%20Pic%20(7)%20(1).webp",
    "links": {
      "website": "https://yield.accountable.capital/",
      "twitter": "https://x.com/AccountableData"
    }
  },
  {
    "id": "across-protocol",
    "name": "Across Protocol",
    "category": "infrastructure",
    "description": "Across is the first intent-based crosschain bridge protocol. It's fast, cheap, and secure. Powering $30B+ in volume for 4M+ users.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68e035994e3c2ccadb2a907a_X-Logo.webp",
    "links": {
      "website": "https://across.to/",
      "twitter": "https://x.com/AcrossProtocol"
    }
  },
  {
    "id": "acurast",
    "name": "Acurast",
    "category": "depin",
    "description": "Confidential AI, hyper-personalized agents, and privacy-focused computation using thousands of smartphones worldwide.",
    "contractCount": 10,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b910bc10f685d8b1690a43_Acurast_logo.webp",
    "links": {
      "website": "https://acurast.com/",
      "twitter": "https://x.com/Acurast"
    }
  },
  {
    "id": "aethonswap",
    "name": "AethonSwap",
    "category": "defi",
    "description": "AethonSwap is a CLAMM V4 DEX combining next-gen tech with intelligent design, for low-slippage trading & efficient liquidity management",
    "contractCount": 1,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68e0395d301c8d49539f8fed_AethonSwap-icon-Twitter-1-2-.webp",
    "links": {
      "website": "https://www.aethonswap.com/",
      "twitter": "https://x.com/AethonSwap"
    }
  },
  {
    "id": "alchemy",
    "name": "Alchemy",
    "category": "infrastructure",
    "description": "Alchemy's end-to-end platform gives devs everything to build and scale web3 apps - from APIs to monitoring, across multiple chains.",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b910dc1f770571ff122b0c_Alchemy_logo.webp",
    "links": {
      "website": "https://alchemy.com",
      "twitter": "https://x.com/Alchemy"
    }
  },
  {
    "id": "alldomains",
    "name": "AllDomains",
    "category": "infrastructure",
    "description": "AllDomains: the web3 identity asset layer to create and trade web3 domains | Customizable for everyone.",
    "contractCount": 20,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67e316a9407f35c90acd3348_LoFnPgJa_400x400.webp",
    "links": {
      "website": "https://monad.alldomains.id/",
      "twitter": "https://x.com/alldomains"
    }
  },
  {
    "id": "allium",
    "name": "Allium",
    "category": "infrastructure",
    "description": "Allium delivers blockchain data for analytics, applications, and accounting use cases via dashboards, APIs, datashares, and data streams.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b910eaea5cc3512a8a1b8f_Allium_logo.webp",
    "links": {
      "website": "https://www.allium.so/",
      "twitter": "https://x.com/AlliumLabs"
    }
  },
  {
    "id": "ambient",
    "name": "Ambient",
    "category": "defi",
    "description": "Spot AMM with combining multiple liquidity types with modular hooks, dynamic fees and MEV protection.",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b910fa442716854f1f3390_Ambient_logo.webp",
    "links": {
      "website": "https://monad.ambient.finance",
      "twitter": "https://x.com/ambient_finance"
    }
  },
  {
    "id": "ambire-wallet",
    "name": "Ambire Wallet",
    "category": "infrastructure",
    "description": "Еasy and secure self-custody for smart accounts, EOAs, and hardware wallets. EIP-7702 ready wallet.",
    "contractCount": 20,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67f6640db8ed2eac26fe4faa_DAyumIRU_400x400.webp",
    "links": {
      "website": "https://www.ambire.com",
      "twitter": "https://x.com/ambirewallet"
    }
  },
  {
    "id": "amertis",
    "name": "Amertis",
    "category": "defi",
    "description": "Connecting users to deep liquidity across multiple sources, ensuring the best rates, minimal slippage, and an optimised DeFi experience.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67cb75a41f9084980878c240_amertis_logo.webp",
    "links": {
      "website": "https://amertis.exchange/",
      "twitter": "https://x.com/AmertisExchange"
    }
  },
  {
    "id": "ammalgam",
    "name": "Ammalgam",
    "category": "defi",
    "description": "Ammalgam is a new primitive that combines lending and trading into one protocol called a Decentralized Lending Exchange.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911051d1e917a4b1ab9b8_Ammalgam_logo.webp",
    "links": {
      "website": "https://alpha.ammalgam.xyz/",
      "twitter": "https://x.com/Ammalgam"
    }
  },
  {
    "id": "apebond",
    "name": "ApeBond",
    "category": "defi",
    "description": "The #1 Bonding Protocol in DeFi, with $20M+ bonded and 80k+ bonds sold, transforming how projects raise funds and secure liquidity.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67eff2c5822ee4e28e47f43b_logo.webp",
    "links": {
      "website": "https://ape.bond",
      "twitter": "https://x.com/apebond"
    }
  },
  {
    "id": "apriori",
    "name": "Apriori",
    "category": "defi",
    "description": "aPriori is an MEV infrastructure and liquid staking protocol, designed for the parallel execution era and natively built on Monad.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91139ebe3a25cc1bbc74f_Apriori_logo.webp",
    "links": {
      "website": "http://testnet-staking.apr.io",
      "twitter": "https://x.com/apriori"
    }
  },
  {
    "id": "atlantis",
    "name": "Atlantis",
    "category": "defi",
    "description": "Modular V4 DEX offering cross-chain swaps, DeFAI, a launchpad, farming, staking, fiat on-ramp, & more.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67d3a0a71b288e2e961f005f_400x400.webp",
    "links": {
      "website": "https://atlantisdex.xyz",
      "twitter": "https://x.com/atlantisdex_xyz"
    }
  },
  {
    "id": "atomic-wallet",
    "name": "Atomic Wallet",
    "category": "infrastructure",
    "description": "Manage, exchange, and stake 1000+ assets securely on desktop & mobile.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6806075774f1032f79627b16_c5FE7avh_400x400.webp",
    "links": {
      "website": "https://atomicwallet.io/",
      "twitter": "https://x.com/atomicwallet"
    }
  },
  {
    "id": "azaar",
    "name": "Azaar",
    "category": "defi",
    "description": "Azaar is a high-performance DEX aggregator and trading platform built for Monad.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91170f43c1f7d17690959_Azaar_logo.webp",
    "links": {
      "website": "https://azaar.com/",
      "twitter": "https://x.com/AzaarExchange"
    }
  },
  {
    "id": "backpack-wallet",
    "name": "Backpack Wallet",
    "category": "infrastructure",
    "description": "Backpack is a next-level wallet and exchange. Buy tokens, trade futures, and explore on-chain apps—seamlessly and securely. 🎒",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91182d6f6cc072b1dbb7e_Backpack%20Wallet_logo.webp",
    "links": {
      "website": "https://backpack.app/",
      "twitter": "https://x.com/Backpack"
    }
  },
  {
    "id": "balancer",
    "name": "Balancer",
    "category": "defi",
    "description": "Balancer is a decentralized automated market maker (AMM) protocol built on Ethereum.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91e5302389168368b4f29_Balancer%20logo.webp",
    "links": {
      "website": "https://balancer.fi/",
      "twitter": "https://x.com/Balancer"
    }
  },
  {
    "id": "band-protocol",
    "name": "Band Protocol",
    "category": "infrastructure",
    "description": "Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.",
    "contractCount": 1,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67e317a398baf3c13c00aa31_band-token-blue-1-logo.webp",
    "links": {
      "website": "https://www.bandprotocol.com/",
      "twitter": "https://x.com/BandProtocol"
    }
  },
  {
    "id": "bean-exchange",
    "name": "Bean Exchange",
    "category": "defi",
    "description": "Bean Exchange is a gamified decentralized spot & perpetual exchange natively built on Monad Network.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9118b1f770571ff12b289_Bean%20Exchange_logo.webp",
    "links": {
      "website": "https://bean.exchange/",
      "twitter": "https://x.com/Bean_DEX"
    }
  },
  {
    "id": "bebop",
    "name": "Bebop",
    "category": "defi",
    "description": "Seamless and efficient crypto trading for everyone. Web3 trading app and API that finds the best route for all your trades.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9119cddf104de2b1e6e20_Bebop_logo.webp",
    "links": {
      "website": "https://bebop.xyz/",
      "twitter": "https://x.com/bebop_dex/"
    }
  },
  {
    "id": "biconomy",
    "name": "Biconomy",
    "category": "infrastructure",
    "description": "Biconomy helps devs build user-friendly dApps with modular tools. Our stack powers 300+ dApps & 50M+ transactions, accelerating adoption.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911a9dec63edfce3e07fb_Biconomy_logo.webp",
    "links": {
      "website": "http://biconomy.io",
      "twitter": "https://x.com/biconomy"
    }
  },
  {
    "id": "bima",
    "name": "Bima",
    "category": "defi",
    "description": "BIMA is a DeFi platform that lets you earn yield on your BTC across multiple chains by using USBD, a Bitcoin-backed stablecoin.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911b7f19afa8887c82193_Bima_logo.webp",
    "links": {
      "website": "https://bima.money/",
      "twitter": "https://x.com/bimabtc"
    }
  },
  {
    "id": "birdeye",
    "name": "Birdeye",
    "category": "defi",
    "description": "The all-in-one trading data tool for alpha traders: real-time charts, smart money flows, gems & historical data across 300+ exchanges.",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4da7d3625a521dd18a_Group-17.webp",
    "links": {
      "website": "https://birdeye.so/",
      "twitter": "https://x.com/birdeye_so"
    }
  },
  {
    "id": "birdeye-data-services",
    "name": "Birdeye Data Services",
    "category": "infrastructure",
    "description": "High-performance onchain data provider with real-time, accurate data across tokens, wallets & protocols.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4d2971afdf6a18ab24_Group-18.webp",
    "links": {
      "website": "https://bds.birdeye.so/",
      "twitter": "https://x.com/birdeye_data"
    }
  },
  {
    "id": "bitget-wallet",
    "name": "Bitget Wallet",
    "category": "infrastructure",
    "description": "Bitget Wallet is a non-custodial wallet with advanced multi-chain capabilities and a powerful swap function.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911c2bfbd83279f12cf05_Bitget%20Wallet_logo.webp",
    "links": {
      "website": "https://web3.bitget.com",
      "twitter": "https://x.com/BitgetWallet"
    }
  },
  {
    "id": "blazpay",
    "name": "Blazpay",
    "category": "defi",
    "description": "Blazpay AI: Simplifying Crypto | 1.2M+ Users | AI-Swap | Portfolio | Alerts | Cross-Chain | Gamified Learning | Multi-Platform",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911d4f6be2d85fbd30525_Blazpay_logo.webp",
    "links": {
      "website": "https://blazpay.com",
      "twitter": "https://x.com/blazpaylabs"
    }
  },
  {
    "id": "blockstreet",
    "name": "BlockStreet",
    "category": "infrastructure",
    "description": "Unified liquidity layer for tokenized equities - delivering secure settlement, deep liquidity, and institutional-grade efficiency.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68b20be38a9f4a238e4ca802_monad-logo-400_400.webp",
    "links": {
      "website": "https://blockstreet.money/",
      "twitter": "https://x.com/blockst_hq"
    }
  },
  {
    "id": "blockvision",
    "name": "BlockVision",
    "category": "infrastructure",
    "description": "BlockVision provides blockchain infrastructure services, offering APIs, RPC services to empower developers and users alike.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911e5ebe3a25cc1bc45a5_BlockVision_logo.webp",
    "links": {
      "website": "https://blockvision.org/",
      "twitter": "https://x.com/blockvisionhq"
    }
  },
  {
    "id": "blockdaemon",
    "name": "Blockdaemon",
    "category": "infrastructure",
    "description": "Blockdaemon provides enterprise-grade web3 infrastructure, including dedicated nodes, APIs, staking, liquid staking, MPC wallets, and more.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911f1b0307a90b7b20ade_Blockdaemon_logo.webp",
    "links": {
      "website": "https://www.blockdaemon.com/",
      "twitter": "https://x.com/BlockdaemonHQ"
    }
  },
  {
    "id": "blocklive",
    "name": "Blocklive",
    "category": "nft",
    "description": "Blocklive is a platform for end-to-end onchain event management and ticketing, using proof of history to target and reward fans.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911fd7f3041834a53238c_Blocklive_logo.webp",
    "links": {
      "website": "https://blocklive.io",
      "twitter": "https://x.com/blocklive_/"
    }
  },
  {
    "id": "breath-of-estova",
    "name": "Breath of Estova",
    "category": "gaming",
    "description": "Breath of Estova is a play-to-earn 2D action-based MMORPG where classic nostalgia meets a vast open world.",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/687816c09a34ff481b1be028_estova%20logo%20_400x400.webp",
    "links": {
      "website": "https://www.breathofestova.com/",
      "twitter": "https://x.com/BreathOfEstova"
    }
  },
  {
    "id": "buzzing-app",
    "name": "Buzzing App",
    "category": "consumer",
    "description": "Buzzing Club is an app where users trade opinions on trending topics.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6878174f5c502efdbed88f8b_buzzing%20qbn4VqZ0_400x400.webp",
    "links": {
      "website": "https://www.buzzing.app/",
      "twitter": "https://x.com/BuzzingApp"
    }
  },
  {
    "id": "bybit-web3-wallet",
    "name": "Bybit Web3 Wallet",
    "category": "infrastructure",
    "description": "Bybit Web3 is your gateway to Web3. Explore DeFi offerings, and trade thousands of tokens across various networks.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b912533b92e175eb004a8c_Bybit%20Web3%20Wallet_logo.webp",
    "links": {
      "website": "https://www.bybit.com/en/web3",
      "twitter": "https://x.com/Bybit_Web3"
    }
  },
  {
    "id": "cplx",
    "name": "CPLX",
    "category": "defi",
    "description": "Institutional-grade DeFi derivatives exchange. Unified liquidity pools & pioneering RWA products. Built by TradFi exchange pioneers.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31a7a1418a2a81fc351_x_logo_4.webp",
    "links": {
      "website": "https://cplx.io",
      "twitter": "https://x.com/cplx_io"
    }
  },
  {
    "id": "cult",
    "name": "CULT",
    "category": "consumer",
    "description": "Cult is where culture meets crypto. A new reputation system rewards loyalty for holders, tokens, and creators alike.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/688e9f8173066eb8c97da18d_cult%20logo%20.webp",
    "links": {
      "website": "https://www.cult.trade/",
      "twitter": "https://x.com/cultdottrade"
    }
  },
  {
    "id": "caddy-finance",
    "name": "Caddy Finance",
    "category": "defi",
    "description": "Building Bitcoin yield vaults for retail, aggregated retail liquidity for institutional yields.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9125febe3a25cc1bc990d_Caddy%20Finance_logo.webp",
    "links": {
      "website": "https://caddy.finance/",
      "twitter": "https://x.com/caddyfi"
    }
  },
  {
    "id": "capa",
    "name": "Capa",
    "category": "infrastructure",
    "description": "Capa connects LATAM to global finance. It simplifies global payments, enabling companies to move money across borders via stablecoins.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68bb689f48ab3c3dcc9c43ff_capa%20logo.webp",
    "links": {
      "website": "https://capa.fi/",
      "twitter": "https://x.com/capa_fi"
    }
  },
  {
    "id": "castora",
    "name": "Castora",
    "category": "consumer",
    "description": "Funfair price prediction markets on Monad.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9127fa1ed529049cc5f52_Castora_logo.webp",
    "links": {
      "website": "https://castora.xyz",
      "twitter": "https://x.com/Castora_xyz"
    }
  },
  {
    "id": "catton-ai",
    "name": "Catton AI",
    "category": "ai",
    "description": "Catton AI, backed by Forj & Ape Accelerator, leads AI NPC gaming on Telegram with 900K users and 300k holders.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67eff2c59b8145c6ecb86f1b_CattonAiTokenLogo_400.webp",
    "links": {
      "website": "https://catton.ai/",
      "twitter": "https://x.com/Cattontw"
    }
  },
  {
    "id": "celeris",
    "name": "Celeris",
    "category": "defi",
    "description": "Celeris is the first fully on-chain orderbook Perps++ DEX that is fully permissionless with ultra-low latency & parallelized liquidity.",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6863135bff21aa78233f1aa0_IMG_20250624_015425_464.webp",
    "links": {
      "website": "https://celeris.exchange",
      "twitter": "https://x.com/0xCeleris"
    }
  },
  {
    "id": "chainbase",
    "name": "Chainbase",
    "category": "infrastructure",
    "description": "Chainbase enables AI-era data interoperability and access with a decentralized, composable, and incentivized economy.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9129b442716854f208d19_Chainbase_logo.webp",
    "links": {
      "website": "https://chainbase.com/",
      "twitter": "https://x.com/ChainbaseHQ"
    }
  },
  {
    "id": "chainlink",
    "name": "Chainlink",
    "category": "infrastructure",
    "description": "Chainlink is the standard for onchain finance, verifiable data, and cross-chain interoperability.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c4e79b975a193baa9b8f85_chainlink.webp",
    "links": {
      "website": "https://chain.link/",
      "twitter": "https://x.com/chainlink"
    }
  },
  {
    "id": "chainsight",
    "name": "Chainsight",
    "category": "infrastructure",
    "description": "Chainsight redefines oracles with no-code tools, lowering costs, reducing single-operator risks, and driving scalable, open innovation.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b912a9de3f023f51d195fb_Chainsight_logo.webp",
    "links": {
      "website": "https://chainsight.network/",
      "twitter": "https://x.com/Chainsight_"
    }
  },
  {
    "id": "chronicle",
    "name": "Chronicle",
    "category": "infrastructure",
    "description": "Decentralized, verifiable oracles. Chronicle connects product builders to realtime data & custom verification.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b912b4b64c5dc668f68208_Chronicle_logo.webp",
    "links": {
      "website": "https://chroniclelabs.org/",
      "twitter": "https://x.com/ChronicleLabs"
    }
  },
  {
    "id": "clober",
    "name": "Clober",
    "category": "defi",
    "description": "Clober is a fully on-chain CLOB DEX protocol with a gas-efficient matching engine optimized for on-chain execution.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67bebcb9cf681db7a60d2e22_clober.webp",
    "links": {
      "website": "https://alpha.clober.io",
      "twitter": "https://x.com/CloberDEX"
    }
  },
  {
    "id": "conft",
    "name": "CoNFT",
    "category": "nft",
    "description": "coNFT.app-NFT aggregator where users can create/trade NFT and register web3 domains.120k MAU. 1M+ mints. 70k+ web3 registrations.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c6400453e750640690be80_conft.webp",
    "links": {
      "website": "https://conft.app",
      "twitter": "https://x.com/ConftApp"
    }
  },
  {
    "id": "codex",
    "name": "Codex",
    "category": "infrastructure",
    "description": "The Codex API provides fast and accurate enriched data, meticulously structured to easily plug straight into your application.",
    "contractCount": 19,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b912df3b92e175eb00c2f8_Codex_logo.webp",
    "links": {
      "website": "https://www.codex.io",
      "twitter": "https://x.com/trycodex"
    }
  },
  {
    "id": "coin98-ai-wallet",
    "name": "Coin98 AI Wallet",
    "category": "ai",
    "description": "Crypto Messenger & AI Wallet. Everyone's Gateway to The Open Internet.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b912eaf20a63404b11b01c_Coin98%20AI%20Wallet_logo.webp",
    "links": {
      "website": "https://coin98.com/",
      "twitter": "https://x.com/coin98_wallet"
    }
  },
  {
    "id": "covenant",
    "name": "Covenant",
    "category": "defi",
    "description": "Lever up your favorite token, or earn yield, through liquid, tradeable debt markets.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91321ea5cc3512a8be053_Covenant_logo.webp",
    "links": {
      "website": "https://covenant.finance",
      "twitter": "https://x.com/covenantFi"
    }
  },
  {
    "id": "crust-finance",
    "name": "Crust Finance",
    "category": "defi",
    "description": "Crust Finance is a metadex with concentrated liquidity and native ALM support, built on Monad.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6802d4bfe173e30b685ba3ea__EZGsvtJ_400x400%20(1).webp",
    "links": {
      "website": "https://crust.finance",
      "twitter": "https://x.com/CrustFinance"
    }
  },
  {
    "id": "crystal",
    "name": "Crystal",
    "category": "defi",
    "description": "Crystal is a fully on-chain CLOB exchange that brings CEX-grade performance to the EVM without compromising on security or composability.",
    "contractCount": 20,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91338de4da514b3258311_Crystal_logo.webp",
    "links": {
      "website": "https://crystal.exchange",
      "twitter": "https://x.com/CrystalExch"
    }
  },
  {
    "id": "cult-markets",
    "name": "Cult Markets",
    "category": "nft",
    "description": "Gamified omnichain NFT marketplace powering dynamic drops, collectibles, and interactive shard-based campaigns.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6847444702a242ed322515e4_cultL.webp",
    "links": {
      "website": "https://testnet.cultmarkets.com/",
      "twitter": "https://x.com/cultmarkets"
    }
  },
  {
    "id": "curvance",
    "name": "Curvance",
    "category": "defi",
    "description": "Curvance is a multichain liquidity protocol that maximizes capital efficiency in DeFi.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9137ae970ab23ad8030be_Curvance_logo.webp",
    "links": {
      "website": "https://monad.curvance.com/monad",
      "twitter": "https://x.com/Curvance"
    }
  },
  {
    "id": "cycle-network",
    "name": "Cycle Network",
    "category": "infrastructure",
    "description": "Cycle Network offers bridgeless liquidity abstraction through verifiable state aggregation, supporting all BTC and EVM networks",
    "contractCount": 13,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91388b126dbefee6fe84d_Cycle%20Network_logo.webp",
    "links": {
      "website": "https://www.cyclenetwork.io/",
      "twitter": "https://x.com/cyclenetwork_GO"
    }
  },
  {
    "id": "cyferio",
    "name": "Cyferio",
    "category": "infrastructure",
    "description": "Award-winning Cyferio Hub offers modular FHE rollup tech for confidential, scalable blockchain computing and privacy-preserving apps.",
    "contractCount": 19,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91393ebe3a25cc1be0cc4_Cyferio_logo.webp",
    "links": {
      "website": "https://cyferio.com/",
      "twitter": "https://x.com/cyferio_labs"
    }
  },
  {
    "id": "dau-cards",
    "name": "DAU Cards",
    "category": "infrastructure",
    "description": "DAU Cards bridges your crypto to everyday spending in seconds. Our interface-agnostic platform unlocks access to 40M+ global merchants.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b913a278f79de0e7a62b38_DAU%20Cards_logo.webp",
    "links": {
      "website": "https://gmonad.daucards.com/",
      "twitter": "https://x.com/DAUCards"
    }
  },
  {
    "id": "drkvrs",
    "name": "DRKVRS",
    "category": "gaming",
    "description": "DRKVRS is a Web3 Multiplayer Action RPG game with innovative mechanics, set in a dystopian and brutalist world.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67d3a1aa464cdce0ecbee499_drkvrs%20jpg.webp",
    "links": {
      "website": "https://www.drkvrs.io",
      "twitter": "https://x.com/drkvrs"
    }
  },
  {
    "id": "drpc",
    "name": "DRPC",
    "category": "infrastructure",
    "description": "dRPC is an off-chain routing protocol for delivering reliable API infrastructure leveraging a distributed network of nodes.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b913b7b9188e59b9a50568_DRPC_logo.webp",
    "links": {
      "website": "https://drpc.org",
      "twitter": "https://x.com/drpcorg"
    }
  },
  {
    "id": "dashx",
    "name": "DashX",
    "category": "defi",
    "description": "DashX: One-click payments for everything. A DeFi platform with the fastest cross-chain transactions, ramps, and rewards!",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67bebd535f9f62cdf559f308_dashx%20logo.webp",
    "links": {
      "website": "https://dashx.xyz",
      "twitter": "https://x.com/dashxhq"
    }
  },
  {
    "id": "defined",
    "name": "Defined",
    "category": "infrastructure",
    "description": "Defined is the fastest charting platform serving 70+ networks and 25+ million tokens.",
    "contractCount": 1,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b913c47f3041834a5454df_Defined_logo.webp",
    "links": {
      "website": "https://defined.fi",
      "twitter": "https://x.com/definedfi"
    }
  },
  {
    "id": "demask-finance",
    "name": "Demask Finance",
    "category": "nft",
    "description": "Demask Finance is an on-chain AMM protocol that enables trading between NFT collectibles and native tokens.",
    "contractCount": 1,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b913d97f3041834a54624e_Demask%20Finance_logo.webp",
    "links": {
      "website": "https://demask.finance/",
      "twitter": "https://x.com/demaskfinance"
    }
  },
  {
    "id": "dialect",
    "name": "Dialect",
    "category": "infrastructure",
    "description": "A toolkit to integrate onchain experiences into your app, instantly.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b913e4c3ad7da1ddf1c27c_Dialect_logo.webp",
    "links": {
      "website": "http://www.dialect.to",
      "twitter": "https://x.com/saydialect"
    }
  },
  {
    "id": "diffuse",
    "name": "Diffuse",
    "category": "infrastructure",
    "description": "Diffuse is a zk serverless protocol that delivers fast, cost-efficient, and verifiable both on/off-chain data any project needs.",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b913ef859d08f0b8d743ef_Diffuse_logo.webp",
    "links": {
      "website": "https://www.diffuse.fi/",
      "twitter": "https://x.com/DiffuseFi"
    }
  },
  {
    "id": "dirol-protocol",
    "name": "Dirol Protocol",
    "category": "defi",
    "description": "Dirol is a native DeFi Hub on Monad with a full suite of DeFi features. You can do everything on Dirol.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67cb75a360ac4f826e2f7ec3_photo_2025-03-03_14-07-29.webp",
    "links": {
      "website": "https://dex.dirol.io/swap",
      "twitter": "https://x.com/DirolProtocol"
    }
  },
  {
    "id": "discocats",
    "name": "DiscoCats",
    "category": "defi",
    "description": "We make locked assets liquid, offering multi-layer yield through Liquid NFTs and Bribe mechanisms with our four products.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b913f93b92e175eb01aa03_DiscoCats_logo.webp",
    "links": {
      "website": "https://mydiscocats.com/",
      "twitter": "https://x.com/mydiscocats"
    }
  },
  {
    "id": "doppler",
    "name": "Doppler",
    "category": "infrastructure",
    "description": "Doppler is an easy to integrate token creation protocol. It automates finding fair prices and getting AMMs like Uniswap bootstrapped.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67bebd1b38a780964089324a_doppler.webp",
    "links": {
      "website": "https://doppler.lol/",
      "twitter": "https://x.com/dopplerprotocol"
    }
  },
  {
    "id": "drake",
    "name": "Drake",
    "category": "defi",
    "description": "Drake's hybrid CLOB unlocks CEX speed, DEX transparency, and frictionless yields, resulting in what matters most: perps that feel right",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6847444575685e46bfbc9a83_400x400-1-.webp",
    "links": {
      "website": "https://drake.exchange/",
      "twitter": "https://x.com/DrakeExchange"
    }
  },
  {
    "id": "dune",
    "name": "Dune",
    "category": "infrastructure",
    "description": "Dune is the leading data platform for onchain data, empowering users to query, visualize, and build across 90+ blockchains.",
    "contractCount": 13,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91412f9180e8745b286a5_Dune_logo.webp",
    "links": {
      "website": "http://dune.com/home",
      "twitter": "https://x.com/Dune"
    }
  },
  {
    "id": "dusted",
    "name": "Dusted",
    "category": "consumer",
    "description": "Connect with every community member in token-specific chat rooms, earn Dusted points, and win prizes from other Monad projects.",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9141c84cbdc367d620003_Dusted_logo.webp",
    "links": {
      "website": "https://www.dusted.app",
      "twitter": "https://x.com/dusted_app"
    }
  },
  {
    "id": "dynamic",
    "name": "Dynamic",
    "category": "infrastructure",
    "description": "Dynamic combines authentication, smart wallets, and secure key management into one flexible SDK.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91426859d08f0b8d76748_Dynamic_logo.webp",
    "links": {
      "website": "https://www.dynamic.xyz/",
      "twitter": "https://x.com/dynamic_xyz"
    }
  },
  {
    "id": "dyson-finance",
    "name": "Dyson Finance",
    "category": "defi",
    "description": "Dyson Finance makes DeFi more inclusive and profitable by combining dynamic AMM, Dual Investment, and a Membership Program.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67e316a97d15a048a0c7a43e_twitter_profile_1x.webp",
    "links": {
      "website": "https://dyson.finance/",
      "twitter": "https://x.com/DysonFinance"
    }
  },
  {
    "id": "elfi",
    "name": "ELFi",
    "category": "defi",
    "description": "ELFi is the first DEX with ultra portfolio margin & zero-risk stablecoin pool. No KYC. $1.62B volume, 32K users, up to 1000x leverage.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68474446020515eb7453f848_logo.webp",
    "links": {
      "website": "https://www.elfi.xyz/",
      "twitter": "https://x.com/ELFiProtocol"
    }
  },
  {
    "id": "eoracle",
    "name": "EOracle",
    "category": "infrastructure",
    "description": "eOracle provides decentralized price feeds through a cryptoeconomically secure oracle network.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b914331e79a03f6da4a7b7_EOracle_logo.webp",
    "links": {
      "website": "https://www.eoracle.io/",
      "twitter": "https://x.com/EO_Network"
    }
  },
  {
    "id": "eisen-finance",
    "name": "Eisen Finance",
    "category": "defi",
    "description": "Eisen is a multichain DEX aggregator expanding with V2 to unify CEX/DEX spot & derivatives for advanced DeFi strategies.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6893bd214907ffb0bd6905ae_Eisen_Symbol.webp",
    "links": {
      "website": "https://eisenfinance.com/",
      "twitter": "https://x.com/EisenLabs"
    }
  },
  {
    "id": "enjoyoors",
    "name": "Enjoyoors",
    "category": "defi",
    "description": "Enoyoors is a protocol that unlocks yield on any asset on any chain.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/682eef8db64860c25b79c9c6_Enjoyoors_logo.webp",
    "links": {
      "website": "https://enjoyoors.xyz",
      "twitter": "https://x.com/enjoyoorsxyz"
    }
  },
  {
    "id": "entangle",
    "name": "Entangle",
    "category": "infrastructure",
    "description": "Blockchains are fragmented, blocking data, liquidity/tokens. Our interoperability stack unifies Web3.",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67cb77e4c1b4e4169e9d7662_entangle-logo.webp",
    "links": {
      "website": "https://entangle.fi/",
      "twitter": "https://x.com/Entanglefi"
    }
  },
  {
    "id": "envio",
    "name": "Envio",
    "category": "infrastructure",
    "description": "Envio is a modern, multi-chain EVM blockchain indexer for querying real-time and historical data.",
    "contractCount": 20,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91462c1a6a111c71df6fd_Envio_logo.webp",
    "links": {
      "website": "https://envio.dev/",
      "twitter": "https://x.com/envio_indexer"
    }
  },
  {
    "id": "euclid-protocol",
    "name": "Euclid Protocol",
    "category": "infrastructure",
    "description": "Euclid is the first liquidity consensus layer, letting any dApp instantly access liquidity from 50+ networks—no bridging needed.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883f9e5ab45980310bb5983_euclid%20logo%20.webp",
    "links": {
      "website": "https://www.euclidprotocol.io/",
      "twitter": "https://x.com/EuclidProtocol"
    }
  },
  {
    "id": "euler",
    "name": "Euler",
    "category": "defi",
    "description": "Euler revolutionizes DeFi by letting any asset become collateral for a lending market.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9148448ee25af9bdeb78a_Euler_logo.webp",
    "links": {
      "website": "http://euler.finance",
      "twitter": "https://x.com/eulerfinance/"
    }
  },
  {
    "id": "fuku",
    "name": "FUKU",
    "category": "defi",
    "description": "A Defi Saving protocol on Monad, blending savings with the excitement of betting and winning prizes without risking your deposit.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c4e7cee99fbe7860f5ac2d_fuku.webp",
    "links": {
      "website": "https://testnet.fukunad.xyz/",
      "twitter": "https://x.com/Fuku_nad"
    }
  },
  {
    "id": "fwx",
    "name": "FWX",
    "category": "defi",
    "description": "FWX: Permissionless leverage trading on DEX. Add any token, create a lending pool, and margin trade. Lenders are protected via hedging.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6847444652fc2d7b6454b30f_fwx-logo.webp",
    "links": {
      "website": "https://fwx.finance",
      "twitter": "https://x.com/fwxfinance"
    }
  },
  {
    "id": "fans3-ai",
    "name": "Fans3 AI",
    "category": "ai",
    "description": "Fans3 empowers creators to build emotionally intelligent AI personas that engage fans 24/7",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68782bc80d889748856753b5_fan3%20logo%20DZcQNjA2_400x400.webp",
    "links": {
      "website": "https://www.fans3.ai/",
      "twitter": "https://x.com/Fans3_AI"
    }
  },
  {
    "id": "farcaster",
    "name": "Farcaster",
    "category": "consumer",
    "description": "Farcaster is a decentralized social app that has an embedded wallet and mini apps that support Monad",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31c7002016d7f174e41_fc.webp",
    "links": {
      "website": "http://farcaster.xyz/",
      "twitter": "https://x.com/farcaster_xyz"
    }
  },
  {
    "id": "fastlane",
    "name": "FastLane",
    "category": "infrastructure",
    "description": "FastLane is an MEV protocol for validators + apps with an integrated 4337 bundler, an on-chain task scheduler, and the first holistic LST.",
    "contractCount": 20,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67d77203133e25b8b1565e04_nHQGz23P_400x400.webp",
    "links": {
      "website": "https://www.fastlane.xyz/",
      "twitter": "https://x.com/0xFastLane"
    }
  },
  {
    "id": "fiamma",
    "name": "Fiamma",
    "category": "infrastructure",
    "description": "Unlocking Bitcoin’s real-world use, making it a dynamic asset & foundation of a decentralized internet & finance.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b914b9e21ffe4d10515b60_Fiamma_logo.webp",
    "links": {
      "website": "https://fiammalabs.io/",
      "twitter": "https://x.com/fiamma_labs"
    }
  },
  {
    "id": "fizenio",
    "name": "Fizen.io",
    "category": "infrastructure",
    "description": "Backed by Tether, Fizen.io provides a Wallet-based Crypto Super App Pay for everything with crypto.",
    "contractCount": 13,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b914c07095d061fc67bd32_Fizen.io_logo.webp",
    "links": {
      "website": "https://fizen.io/",
      "twitter": "https://x.com/fizenapp"
    }
  },
  {
    "id": "flap",
    "name": "Flap",
    "category": "defi",
    "description": "Launch your coin with just one click on Monad with Flap, the premier memecoin launchpad.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b914c8f0b471b3c1bcda4d_Flap_logo.webp",
    "links": {
      "website": "https://monad.flap.sh/board",
      "twitter": "https://x.com/flapdotsh"
    }
  },
  {
    "id": "flipside-crypto",
    "name": "Flipside Crypto",
    "category": "infrastructure",
    "description": "Flipside orchestrates blockchain growth with data, science & community, turning onchain insights into measurable ecosystem value.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b914d748ee25af9bdf0016_Flipside%20Crypto_logo.webp",
    "links": {
      "website": "https://flipsidecrypto.com",
      "twitter": "https://x.com/flipsidecrypto"
    }
  },
  {
    "id": "folks-finance",
    "name": "Folks Finance",
    "category": "defi",
    "description": "Folks Finance offers cross-chain lending, borrowing, staking and trading, building the TradFi experience on a DeFi foundation.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b914e1d821392f193d1796_Folks%20Finance_logo.webp",
    "links": {
      "website": "https://folks.finance/",
      "twitter": "https://x.com/FolksFinance"
    }
  },
  {
    "id": "fonbnk",
    "name": "Fonbnk",
    "category": "infrastructure",
    "description": "Fonbnk links cash-based, mobile-first economies to Web3 by converting prepaid payments into stablecoins for instant global access.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68b20be3d17aa8667581bcf4_fonbnk_logo_400x400.webp",
    "links": {
      "website": "https://www.fonbnk.com/",
      "twitter": "https://x.com/fonbnk1"
    }
  },
  {
    "id": "fortytwo",
    "name": "Fortytwo",
    "category": "ai",
    "description": "A decentralized AI network growing smarter with each node where every computer contributes to planetary-scale limitless intelligence.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b914e98f00b5fa4ab55d6d_Fortytwo_logo.webp",
    "links": {
      "website": "https://fortytwo.network/",
      "twitter": "https://x.com/fortytwo"
    }
  },
  {
    "id": "foxwallet",
    "name": "FoxWallet",
    "category": "infrastructure",
    "description": "Leading multi-chain mobile and extension wallet solution that seamlessly integrates with major blockchains.",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67eff2c5b61ab3ee66b95f4d_FoxWallet-logo-976d5ab2d790ac1b34faff49589007f8.webp",
    "links": {
      "website": "https://foxwallet.com/en",
      "twitter": "https://x.com/FoxWallet"
    }
  },
  {
    "id": "gm-agents",
    "name": "GM Agents",
    "category": "ai",
    "description": "GM Agents is an AI super app that brings together a wide range of AI agents — for text, image, audio, and video.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/687816d9af2f69162a3cf9fc_gm%20logo%20_400x400.webp",
    "links": {
      "website": "https://gmagents.ai/",
      "twitter": "https://x.com/GMAgents_AI"
    }
  },
  {
    "id": "garden",
    "name": "Garden",
    "category": "infrastructure",
    "description": "Garden is a Bitcoin bridge, enabling cross-chain swaps in 30 seconds with trustless, zero-custody risk settlements for users.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68ceb77fe2afc590d7d7eb02_pink-1-.png",
    "links": {
      "website": "https://garden.finance/",
      "twitter": "https://x.com/gardenfi"
    }
  },
  {
    "id": "gasp",
    "name": "Gasp",
    "category": "defi",
    "description": "Gasp is a cross-chain DEX for exchanging crypto across blockchains like Ethereum L2s, Solana, Bitcoin, RWA, and much more.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67eff2c5fe6b7047c00492d9_4MWxHMWf_400x400.webp",
    "links": {
      "website": "https://www.gasp.xyz/",
      "twitter": "https://x.com/Gasp_xyz"
    }
  },
  {
    "id": "gateway",
    "name": "Gateway",
    "category": "infrastructure",
    "description": "Gateway is making encrypted data as programmable as public state, allowing for full execution over high-value data.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91506e21ffe4d1051b443_Gateway_logo.webp",
    "links": {
      "website": "https://gateway.tech/",
      "twitter": "https://x.com/Gateway_xyz"
    }
  },
  {
    "id": "gearbox-protocol",
    "name": "Gearbox Protocol",
    "category": "defi",
    "description": "Gearbox is DeFi’s credit layer: permissionless lending for institutional-grade efficiency and yield.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4cbcdd9c8e6c15073a_ISu5WSUS_400x400.webp",
    "links": {
      "website": "https://gearbox.fi/",
      "twitter": "https://x.com/GearboxProtocol"
    }
  },
  {
    "id": "gelato",
    "name": "Gelato",
    "category": "infrastructure",
    "description": "Gelato Web3 Services bring enhanced UX to Monad's high-speed L1, enabling devs build automated apps with gasless transactions & VRF.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9150ff0b471b3c1bd3109_Gelato_logo.webp",
    "links": {
      "website": "https://www.gelato.network/",
      "twitter": "https://x.com/gelatonetwork"
    }
  },
  {
    "id": "ghost",
    "name": "Ghost",
    "category": "infrastructure",
    "description": "Build blazing fast indexers for smart contracts with Ghost: write transformations in Solidity, query data via GraphQL on hosted endpoints.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91518fc64a6c6e43ab1b3_Ghost_logo.webp",
    "links": {
      "website": "https://tryghost.xyz",
      "twitter": "https://x.com/0xGhostLogs"
    }
  },
  {
    "id": "giftedart",
    "name": "Gifted.art",
    "category": "nft",
    "description": "Gifted.art is a email delivery platform.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91522859d08f0b8d80847_Gifted.art_logo.webp",
    "links": {
      "website": "https://gifted.art/",
      "twitter": "https://x.com/gifteddotart"
    }
  },
  {
    "id": "goplus",
    "name": "GoPlus",
    "category": "infrastructure",
    "description": "Redefining Web3 user security with its Modular User Security Layer, offering open access to security intelligence and firewall services.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9152e89130464ea40fe38_GoPlus_logo.webp",
    "links": {
      "website": "http://gopluslabs.io",
      "twitter": "https://x.com/goplussecurity"
    }
  },
  {
    "id": "goldrush-by-covalent",
    "name": "GoldRush by Covalent",
    "category": "infrastructure",
    "description": "Foundational multichain data APIs and toolkits for easy web3 development across 100+ chains including Monad.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9153489130464ea41015c_GoldRush%20by%20Covalent_logo.webp",
    "links": {
      "website": "https://goldrush.dev/",
      "twitter": "https://x.com/Covalent_HQ"
    }
  },
  {
    "id": "golden-goose",
    "name": "Golden Goose",
    "category": "defi",
    "description": "Golden Goose is an yield-bearing game incubated by Cycle Network that combines blind boxes, nurturing gameplay and DeFi!",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9153d6ae7e18300dfff71_Golden%20Goose_logo.webp",
    "links": {
      "website": "https://www.goose.farm/",
      "twitter": "https://x.com/GoldenGoose_app"
    }
  },
  {
    "id": "goldsky",
    "name": "Goldsky",
    "category": "infrastructure",
    "description": "Indexing (subgraphs with RPC failover, webhooks, and more), and streaming pipelines (replicating data to your own infra).",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9154c5075b90f1688042c_Goldsky_logo.webp",
    "links": {
      "website": "https://goldsky.com",
      "twitter": "https://x.com/goldskyio"
    }
  },
  {
    "id": "gorillionaire",
    "name": "Gorillionaire",
    "category": "defi",
    "description": "Gorillionaire transforms blockchain data chaos into clear signals. Compete on leaderboards while our intelligence guides your trades.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68474cae0b197901e1e48b23_gorillionaire%20logo.webp",
    "links": {
      "website": "https://www.gorillionai.re/",
      "twitter": "https://x.com/gorillionaireai"
    }
  },
  {
    "id": "haha-wallet",
    "name": "HaHa Wallet",
    "category": "infrastructure",
    "description": "Native smart wallet with DeFi automations and a community rewards system.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9155dc0e02b5b7bf04716_HaHa%20Wallet_logo.webp",
    "links": {
      "website": "https://www.haha.me",
      "twitter": "https://x.com/haha_app"
    }
  },
  {
    "id": "hashflow",
    "name": "Hashflow",
    "category": "defi",
    "description": "Hashflow is the leading RFQ protocol that connects professional market makers and takers—powering $25B+ in volume across multiple chains.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91566c0e02b5b7bf04b76_Hashflow_logo.webp",
    "links": {
      "website": "https://app.hashflow.com/",
      "twitter": "https://x.com/hashflow"
    }
  },
  {
    "id": "hawk-terminal",
    "name": "Hawk Terminal",
    "category": "gaming",
    "description": "Launchpad for on-chain builders augmented by AI agents.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67e317511e6ed8599a5ea4f7_hawk%20terminal%20logo.webp",
    "links": {
      "website": "https://hawkterminal.com/",
      "twitter": "https://x.com/hawkterminal_HQ"
    }
  },
  {
    "id": "hemera",
    "name": "Hemera",
    "category": "infrastructure",
    "description": "Hemera is a programmable and verifiable data layer powered by the Account-Centric Indexing protocol.",
    "contractCount": 10,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9157cf9180e8745b35b41_Hemera_logo.webp",
    "links": {
      "website": "https://thehemera.com/",
      "twitter": "https://x.com/HemeraProtocol"
    }
  },
  {
    "id": "henry-labs",
    "name": "Henry Labs",
    "category": "ai",
    "description": "Henry Labs makes it possible for apps to enable in-app shopping with a simple SDK, using agents to execute purchases.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/687816eba60be7a1995ef6ee_henry%20logo%20.webp",
    "links": {
      "website": "https://www.henrylabs.ai",
      "twitter": "https://x.com/henrylabs"
    }
  },
  {
    "id": "hive",
    "name": "Hive",
    "category": "defi",
    "description": "Hive is a native stablecoin protocol on Monad, unlocking real yield, liquidity, through native-chain collateral and active deployment.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/680607f2d47e9c4f91bbf907_hive.webp",
    "links": {
      "website": "https://bhive.finance/",
      "twitter": "https://x.com/Hive_Monad"
    }
  },
  {
    "id": "hyperlane",
    "name": "Hyperlane",
    "category": "infrastructure",
    "description": "Hyperlane is a permissionless interoperability protocol for cross-chain message passing & asset transfers. It's fast, free, and open-source!",
    "contractCount": 20,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915848f00b5fa4ab5ff20_Hyperlane_logo.webp",
    "links": {
      "website": "https://hyperlane.xyz",
      "twitter": "https://x.com/hyperlane"
    }
  },
  {
    "id": "infinit",
    "name": "INFINIT",
    "category": "defi",
    "description": "INFINIT is the first DeFi Abstraction Layer that enables permissionless creation of DeFi Agents to simplify on-chain transactions.",
    "contractCount": 13,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9158c48ee25af9bdfbec0_INFINIT_logo.webp",
    "links": {
      "website": "https://infinit.tech/",
      "twitter": "https://x.com/infinit_labs"
    }
  },
  {
    "id": "izumi-finance",
    "name": "IZUMi Finance",
    "category": "defi",
    "description": "iZUMi Finance is a multi-chain DeFi protocol providing one-stop DEX-as-a-Service (DaaS).",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915992a3730e911b7264c_IZUMi%20Finance_logo.webp",
    "links": {
      "website": "https://alpha.izumi.finance/trade/swap",
      "twitter": "https://x.com/izumi_Finance"
    }
  },
  {
    "id": "impossible-finance",
    "name": "Impossible Finance",
    "category": "defi",
    "description": "A research advisory firm with a DeFi launchpad. Empowering users with top-tier opportunities.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915a173996311554d8205_Impossible%20Finance_logo.webp",
    "links": {
      "website": "https://impossible.finance/",
      "twitter": "https://x.com/impossiblefi"
    }
  },
  {
    "id": "index-network",
    "name": "Index Network",
    "category": "infrastructure",
    "description": "The first intent graph for social interactions, a new primitive where people express what they want and AI agents deliver best matches/",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68d6e931940f75ea0a8764e7_Frame-777.webp",
    "links": {
      "website": "https://index.network/",
      "twitter": "https://x.com/indexnetwork_"
    }
  },
  {
    "id": "jenius",
    "name": "Jenius",
    "category": "ai",
    "description": "Tiktok x PumpFun sprinkled with AI. Users can tokenize content, graduate and join the wild ride to viral videos",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e319c7dc648610d7a0d4_jenius1.webp",
    "links": {
      "website": "https://jenius.rndm.io",
      "twitter": "https://x.com/JeniusRndm"
    }
  },
  {
    "id": "jumper-exchange",
    "name": "Jumper Exchange",
    "category": "defi",
    "description": "Jumper Exchange lets users swap and bridge across 50+ chains, finding the best rates from top bridges, DEXs, and liquidity sources.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68fe71a6e033a4712c4c3743_Jump_-_PFP.webp",
    "links": {
      "website": "https://jumper.exchange",
      "twitter": "https://x.com/jumperexchange"
    }
  },
  {
    "id": "kinetk",
    "name": "KINETK",
    "category": "ai",
    "description": "Invisible watermarking, agentic AI detection & on-chain registration – building IP infrastructure for the future of digital creativity",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68ceb780c0d89aa11d07ec76_KINETK-Logo.webp",
    "links": {
      "website": "https://www.kinetk.ai/",
      "twitter": "https://x.com/KINETK_AI"
    }
  },
  {
    "id": "kansei",
    "name": "Kansei",
    "category": "defi",
    "description": "All-in-one trading superapp with near instant UX, decentralized",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68ceb780461d68370d63b7bd_Twitter-header---13.webp",
    "links": {
      "website": "https://kansei.finance/trade",
      "twitter": "https://x.com/0xKansei"
    }
  },
  {
    "id": "kiloex",
    "name": "KiloEx",
    "category": "defi",
    "description": "KiloEx is the next generation of user-friendly perpetual DEX, fully integration with LSTfi. Backed by Binance Labs.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915b5859d08f0b8d869df_KiloEx_logo.webp",
    "links": {
      "website": "https://www.kiloex.io/",
      "twitter": "https://x.com/KiloEx_perp"
    }
  },
  {
    "id": "kingdomly",
    "name": "Kingdomly",
    "category": "nft",
    "description": "An all in one NFT Dapp, where users can launch, mint, trade, bridge, stake on Kingdomly 🏰",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883ea2d90ec8f542c785833_kingdom%20logo.webp",
    "links": {
      "website": "https://www.kingdomly.app/",
      "twitter": "https://x.com/Kingdomlyapp"
    }
  },
  {
    "id": "kintsu",
    "name": "Kintsu",
    "category": "defi",
    "description": "Kintsu is setting a new paradigm in Liquid Staking, fully native to Monad with DAO curated Validator Registry weights.",
    "contractCount": 19,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915bf6e9a2707acfb23b7_Kintsu_logo.webp",
    "links": {
      "website": "https://kintsu.xyz/",
      "twitter": "https://x.com/Kintsu"
    }
  },
  {
    "id": "kinza-finance",
    "name": "Kinza Finance",
    "category": "defi",
    "description": "Permissionless lending.",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915c773996311554da479_Kinza%20Finance_logo.webp",
    "links": {
      "website": "https://monad-test.kinza.finance",
      "twitter": "https://x.com/kinzafinance"
    }
  },
  {
    "id": "kizzy",
    "name": "Kizzy",
    "category": "consumer",
    "description": "Kizzy is a social media betting app. Bet on how your favorite influencers and celebrities will perform on Twitter and YouTube.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915d16561ec94bfa425a1_Kizzy_logo.webp",
    "links": {
      "website": "https://kizzy.io/",
      "twitter": "https://x.com/kizzymobile"
    }
  },
  {
    "id": "kodeus-ai",
    "name": "Kodeus AI",
    "category": "ai",
    "description": "Kodeus lets users build on-chain Agentic apps from prompts - powered by LLM orchestration, 4k+ tools, and IP monetization.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68ceb77ff5972224015058a3_kodeus-favicon-white.webp",
    "links": {
      "website": "https://kodeus.ai/",
      "twitter": "https://x.com/TheKodeusLabs"
    }
  },
  {
    "id": "koywe",
    "name": "Koywe",
    "category": "infrastructure",
    "description": "Koywe provides crypto ramps and stablecoin financial tools: payments, billing, treasury management for businesses in LATAM.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68b20be38a9f4a238e4ca7eb_Koywe_Icon_400x400_koywe.webp",
    "links": {
      "website": "https://www.koywe.com/en/home",
      "twitter": "https://x.com/koywe_latam"
    }
  },
  {
    "id": "kucoin-web3-wallet",
    "name": "KuCoin Web3 Wallet",
    "category": "infrastructure",
    "description": "The KuCoin Web3 Wallet is a decentralized, self-custodial wallet for easy on-chain asset management.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915e211a6f5896679ee94_KuCoin%20Web3%20Wallet_logo.webp",
    "links": {
      "website": "https://www.kucoin.com/download",
      "twitter": "https://x.com/KuCoin_Web3"
    }
  },
  {
    "id": "kuru",
    "name": "Kuru",
    "category": "defi",
    "description": "Find, trade and launch your coins on a fully on-chain CLOB. Built for traders, powered by Monad.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915ece21ffe4d105246dd_Kuru_logo.webp",
    "links": {
      "website": "https://kuru.io/",
      "twitter": "https://x.com/KuruExchange"
    }
  },
  {
    "id": "lagoon",
    "name": "LAGOON",
    "category": "defi",
    "description": "LAGOON is an EVM-based vault infrastructure for curators, turning sophisticated farming strategies into 1-click yield products.",
    "contractCount": 10,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/687546f428ab754a943f12cb_Logo_LAGOON_400x400-pixels.webp",
    "links": {
      "website": "https://lagoon.finance/",
      "twitter": "https://x.com/lagoon_finance"
    }
  },
  {
    "id": "levrbet",
    "name": "LEVR.bet",
    "category": "defi",
    "description": "Leverage Sports Betting with Fully Liquid Positions.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915f9779fac86351b4888_LEVR.bet_logo.webp",
    "links": {
      "website": "http://levr.bet/",
      "twitter": "https://x.com/levr_bet"
    }
  },
  {
    "id": "lfj",
    "name": "LFJ",
    "category": "defi",
    "description": "The onchain trading platform built for winners. One-stop DEX, Aggregator & Screener for Monad. Discover & buy every token at the best prices.",
    "contractCount": 13,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91601c0e02b5b7bf0bccc_LFJ_logo.webp",
    "links": {
      "website": "https://pandaria.lfj.gg/",
      "twitter": "https://x.com/LFJ_gg"
    }
  },
  {
    "id": "lifi",
    "name": "LI.FI",
    "category": "infrastructure",
    "description": "One API for seamless swaps & bridging across EVM, Solana and Bitcoin. Integrated by Robinhood Wallet, MetaMask, Phantom + 600 partners.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68ceb780e6d195deeeed6da7_lifi_pfp.webp",
    "links": {
      "website": "https://li.fi/",
      "twitter": "https://x.com/lifiprotocol"
    }
  },
  {
    "id": "layerzero",
    "name": "LayerZero",
    "category": "infrastructure",
    "description": "LayerZero is an omnichain interoperability protocol that enables seamless communication between different blockchains.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9160a6561ec94bfa44b63_LayerZero_logo.webp",
    "links": {
      "website": "https://layerzero.network/",
      "twitter": "https://x.com/LayerZero_Core"
    }
  },
  {
    "id": "layerhub",
    "name": "Layerhub",
    "category": "infrastructure",
    "description": "LayerHub is an on-chain analytics platform offering dashboards, wallet insights, leaderboards, and ecosystem tracking tools.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4cc576152375cc74ac_group_1000002444_1x.webp",
    "links": {
      "website": "https://layerhub.xyz/",
      "twitter": "https://x.com/layerhub"
    }
  },
  {
    "id": "leap-wallet",
    "name": "Leap Wallet",
    "category": "infrastructure",
    "description": "Leap is a multi-chain wallet spanning across EVM, Cosmos & Bitcoin.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91613d821392f193e089c_Leap%20Wallet_logo.webp",
    "links": {
      "website": "https://www.leapwallet.io/",
      "twitter": "https://x.com/leap_wallet"
    }
  },
  {
    "id": "legends-of-elysium",
    "name": "Legends of Elysium",
    "category": "gaming",
    "description": "A fantasy strategy game that combines TCG and board game mechanics. Collect cards, build custom decks, and engage in tactical battles.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6802d4ad83a262e9bc52444f_zejJW5VI_400x400.webp",
    "links": {
      "website": "https://legendsofelysium.io/",
      "twitter": "https://x.com/LegendsElysium"
    }
  },
  {
    "id": "leverup",
    "name": "LeverUp",
    "category": "defi",
    "description": "Next-gen perps DEX with LP-free trading, deep liquidity, and up to 1001x leverage.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68fe71a6e79a1b8bcd68fa36_logo-400x400.webp",
    "links": {
      "website": "https://leverup.xyz/",
      "twitter": "https://x.com/LeverUp_xyz"
    }
  },
  {
    "id": "likwid",
    "name": "Likwid",
    "category": "defi",
    "description": "The first fully permissionless, oracle-less, margin trading protocol based on uniswap V4.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6863141eff21aa78233f7caa_liqd%20logo%20.webp",
    "links": {
      "website": "https://likwid.fi/",
      "twitter": "https://x.com/likwid_fi"
    }
  },
  {
    "id": "lombard",
    "name": "Lombard",
    "category": "infrastructure",
    "description": "Lombard connects Bitcoin to every chain, defi protocol, and yield opportunity via LBTC. LBTC currently has $1.9B+ in deposits.",
    "contractCount": 20,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b916363a3a575251c4ba9c_Lombard_logo.webp",
    "links": {
      "website": "https://lombard.finance",
      "twitter": "https://x.com/Lombard_Finance"
    }
  },
  {
    "id": "lootgo",
    "name": "LootGO",
    "category": "gaming",
    "description": "LootGO is a free walk-to-earn mobile app turning your daily life into a treasure hunt for next 100x memecoins.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9163ce0429ca00f50873e_LootGO_logo.webp",
    "links": {
      "website": "https://lootgo.app",
      "twitter": "https://x.com/lootgo_official"
    }
  },
  {
    "id": "lootify",
    "name": "Lootify",
    "category": "gaming",
    "description": "Lootify is a lootbox platform on Monad, offering NFTs, gaming assets, and tokenized trading cards as rewards.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67bebc5c47f06f070fbb11bd_lootify.webp",
    "links": {
      "website": "https://beta.lootify.xyz/",
      "twitter": "https://x.com/Lootify_xyz"
    }
  },
  {
    "id": "lumiterra",
    "name": "Lumiterra",
    "category": "ai",
    "description": "Lumiterra is the first agentic interactive multiplayer sandbox",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/689f814d36a7d97c9a6b7bd8_logo.webp",
    "links": {
      "website": "https://lumiterra.net",
      "twitter": "https://x.com/LumiterraGame"
    }
  },
  {
    "id": "m0narch",
    "name": "M0narch",
    "category": "infrastructure",
    "description": "Provably fair iGaming platform on Monad - every wager, outcome, and payout is secured on-chain.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31a85ccb6f309a67727_4-01.webp",
    "links": {
      "website": "https://m0narch.xyz",
      "twitter": "https://x.com/MonadM0narch"
    }
  },
  {
    "id": "merv",
    "name": "MERV",
    "category": "ai",
    "description": "IP creation platform powered by AI.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9164ba00e125f94a0513b_MERV_logo.webp",
    "links": {
      "website": "https://merv.wtf/",
      "twitter": "https://x.com/merv_wtf"
    }
  },
  {
    "id": "mace",
    "name": "Mace",
    "category": "defi",
    "description": "Mace is a DEX aggregator on Monad that optimizes trades by routing through AMMs, orderbooks & RFQ market makers for best execution.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91d8d9fa4892d623b8b8a_mace%20logo.webp",
    "links": {
      "website": "https://www.mace.ag/",
      "twitter": "https://x.com/mace_ag"
    }
  },
  {
    "id": "mach-exchange",
    "name": "Mach Exchange",
    "category": "defi",
    "description": "Mach Exchange is a one click onboarding tool, allowing any users to instantly and securely onboard from any crypto asset on any chain.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67cb75a3f18868e403582598_Mach-400x400.webp",
    "links": {
      "website": "https://mach.exchange",
      "twitter": "https://x.com/mach_exchange"
    }
  },
  {
    "id": "madhouse",
    "name": "Madhouse",
    "category": "defi",
    "description": "Madhouse is a DEX aggregator on Monad that finds the best swap rates by routing trades across all major liquidity sources.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68474447f8592a42601ad218_Madhouse_PFP_400x400.webp",
    "links": {
      "website": "https://madhouse.ag/",
      "twitter": "https://x.com/usemadhouse"
    }
  },
  {
    "id": "magic-eden",
    "name": "Magic Eden",
    "category": "nft",
    "description": "Magic Eden brings all chains and all assets together in one easy-to-use platform.",
    "contractCount": 20,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9165fb9188e59b9a6f675_Magic%20Eden_logo.webp",
    "links": {
      "website": "https://magiceden.io/",
      "twitter": "https://x.com/magiceden"
    }
  },
  {
    "id": "magma",
    "name": "Magma",
    "category": "defi",
    "description": "Magma is a Liquid Staking Protocol building the first Distributed Validator on Monad and developing MEV to reduce latency by up to 4x.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9166595f6c765132080f7_Magma_logo.webp",
    "links": {
      "website": "https://www.magmastaking.xyz/",
      "twitter": "https://x.com/MagmaStaking"
    }
  },
  {
    "id": "mahjong123",
    "name": "Mahjong123",
    "category": "gaming",
    "description": "Match tiles, progress through levels, boost your ranking, and get more airdrop rewards!",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9166ed821392f193e4fd5_Mahjong123_logo.webp",
    "links": {
      "website": "https://monad.mahjong123.io/",
      "twitter": "https://x.com/0xMJM"
    }
  },
  {
    "id": "memesteroid",
    "name": "Memesteroid",
    "category": "defi",
    "description": "Memesteroid powers the full lifecycle of memecoins with prediction markets and perps from viral launch to maturity.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4d753f1c7638402824_logo-eco.webp",
    "links": {
      "website": "https://memesteroid.fun",
      "twitter": "https://x.com/memesteroid"
    }
  },
  {
    "id": "mentaport",
    "name": "Mentaport",
    "category": "infrastructure",
    "description": "Keep your creative works safe from the internet troublemakers.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67eff2c59473541e98a5deb4_mentaport-logo.webp",
    "links": {
      "website": "https://www.mentaport.com",
      "twitter": "https://x.com/mentaportinc"
    }
  },
  {
    "id": "meow-finance",
    "name": "Meow Finance",
    "category": "defi",
    "description": "The most capital and time-efficient liquidity infrastructure built to unlock additional layers of liquidity.",
    "contractCount": 1,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31d5763deb46e176906_MeowFi-Logo-400x400-black-1-.webp",
    "links": {
      "website": "https://meowfi.xyz/",
      "twitter": "https://x.com/meowfi_"
    }
  },
  {
    "id": "meta-leap",
    "name": "Meta Leap",
    "category": "gaming",
    "description": "Meta Leap is a plug-and-play AI Gaming solution that empowers developers to seamlessly onboard their Web2 games onto Web3 within 30 minutes.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9167a9fa4892d62373abc_Meta%20Leap_logo.webp",
    "links": {
      "website": "https://metaleap.io/",
      "twitter": "https://x.com/MetaLeap_io"
    }
  },
  {
    "id": "metakeep",
    "name": "MetaKeep",
    "category": "infrastructure",
    "description": "Onboard 300x more users in 1 API call, 5 mins. The #1 self-custody infra for users & AI is now on Monad—built by ex-GOOG, MSFT, X, META.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b916858330a99a870f5bdc_MetaKeep_logo.webp",
    "links": {
      "website": "https://metakeep.xyz",
      "twitter": "https://x.com/metakeep"
    }
  },
  {
    "id": "mflo",
    "name": "Mflo",
    "category": "infrastructure",
    "description": "The Data Kernel for AI agents - by MCP and x402, enabling on-demand access across any datasets.",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68d6e931832086d684a61615_Mflo_logo_400x.webp",
    "links": {
      "website": "https://mflo.ai",
      "twitter": "https://x.com/mfloai"
    }
  },
  {
    "id": "mindagentsai",
    "name": "MindAgentsAI",
    "category": "ai",
    "description": "Dual-purpose platform: AI Agent Marketplace and a Decentralized Launchpad",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68e96f51ceca150235bab079_IMG_8830.jpeg",
    "links": {
      "website": "http://mindagents.net/",
      "twitter": "https://x.com/MindAgentsAI"
    }
  },
  {
    "id": "mintpad",
    "name": "Mintpad",
    "category": "nft",
    "description": "Mintpad makes it easy to start an NFT collection. All creators need is their artwork and a cryptocurrency wallet.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9168df6998cf242076fa0_Mintpad_logo.webp",
    "links": {
      "website": "https://mintpad.co/",
      "twitter": "https://x.com/mintpadco"
    }
  },
  {
    "id": "mobula",
    "name": "Mobula",
    "category": "infrastructure",
    "description": "Mobula provides Data APIs for dApps, blockchain analytics for foundations and warehousing for builders.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9169686bf1f948b427b62_Mobula_logo.webp",
    "links": {
      "website": "https://mobula.io",
      "twitter": "https://x.com/Mobulaio"
    }
  },
  {
    "id": "monadexplorer-by-blockvision",
    "name": "MonadExplorer by BlockVision",
    "category": "infrastructure",
    "description": "MonadExplorer is a block explorer built by BlockVision. It helps users analyze transactions, contracts, and network activity on Monad.",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b916a989130464ea421461_MonadExplorer%20by%20BlockVision_logo.webp",
    "links": {
      "website": "https://monadexplorer.com/",
      "twitter": "https://x.com/blockvisionhq"
    }
  },
  {
    "id": "monadata-ai",
    "name": "Monadata AI",
    "category": "ai",
    "description": "Monadata is an AI and Data Platform on Monad. Interact, Train, and Earn!",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b916ba84cbdc367d63b09c_Monadata%20AI_logo.webp",
    "links": {
      "website": "https://monadata.ai/",
      "twitter": "https://x.com/monadata_ai"
    }
  },
  {
    "id": "monday-trade",
    "name": "Monday Trade",
    "category": "defi",
    "description": "Monday Trade is Monad’s native spot DEX combining the precision of a fully on-chain order book with the simplicity of AMMs.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6834a164bf63f433352200ac_logo400x400.webp",
    "links": {
      "website": "https://monday.trade/",
      "twitter": "https://x.com/MondayTrade_"
    }
  },
  {
    "id": "monorail",
    "name": "Monorail",
    "category": "defi",
    "description": "Trade anything across Monad. Monorail is the first aggregator to combine onchain orderbooks and AMMs to give you the best trade possible.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9170173996311554e7bc6_Monorail_logo.webp",
    "links": {
      "website": "https://monorail.xyz",
      "twitter": "https://x.com/monorail_xyz"
    }
  },
  {
    "id": "morpheus",
    "name": "Morpheus",
    "category": "defi",
    "description": "Launch a token, trade, and market-make in one step with Morpheus - a Monad-based DEX using CMM and Wormhole NTT for cross-chain flow.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6863135aaa23b039d89be2e6_logo-full-k.webp",
    "links": {
      "website": "https://morpheus.farm",
      "twitter": "https://x.com/Morpheus_Farm"
    }
  },
  {
    "id": "moseiki",
    "name": "Moseiki",
    "category": "consumer",
    "description": "Moseiki is Web3 Social Networking Application that merges the familiar experience of Web2 with the financial power of blockchain.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9170ba00e125f94a0c562_Moseiki_logo.webp",
    "links": {
      "website": "https://moseiki.app/",
      "twitter": "https://x.com/MoseikiApp"
    }
  },
  {
    "id": "mozi",
    "name": "Mozi",
    "category": "consumer",
    "description": "MOZI is a next-generation social trading platform built on Monad, it combines a Web Wallet with powerful social trading tools.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91713c0e02b5b7bf17fa6_Mozi_logo.webp",
    "links": {
      "website": "https://mozi.finance/",
      "twitter": "https://x.com/mozifinance"
    }
  },
  {
    "id": "mu-digital",
    "name": "Mu Digital",
    "category": "defi",
    "description": "RWA protocol bringing Asia's Best Yields Onchain.",
    "contractCount": 19,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917246e9a2707acfc32e2_Mu%20Digital_logo.webp",
    "links": {
      "website": "https://mudigital.net/",
      "twitter": "https://x.com/MuDigitalHQ"
    }
  },
  {
    "id": "multiplifi",
    "name": "Multipli.fi",
    "category": "defi",
    "description": "Multipli is a Zk based yield protocol specifically designed for making yield on traditionally non-yield bearing assets.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91733859d08f0b8d98cf6_Multipli.fi_logo.webp",
    "links": {
      "website": "https://multipli.fi/",
      "twitter": "https://x.com/multiplifi"
    }
  },
  {
    "id": "multisynq",
    "name": "Multisynq",
    "category": "depin",
    "description": "The first shared, real-time application layer of the internet. A decentralized network where every app is multiplayer by default.",
    "contractCount": 1,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6878165ed21cf891079ce3c7_multisynq%20logo%20kxXecY0r_400x400.webp",
    "links": {
      "website": "https://multisynq.io/",
      "twitter": "https://x.com/multisynq"
    }
  },
  {
    "id": "nadsa",
    "name": "NADSA",
    "category": "defi",
    "description": "NADSA is the purpose-built command center for seamless exploration on Monad.",
    "contractCount": 10,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68b20be49797d18c63a72c2f_nadsa-logo.webp",
    "links": {
      "website": "https://nadsa.space",
      "twitter": "https://x.com/0xNADSA"
    }
  },
  {
    "id": "nfts2me",
    "name": "NFTs2Me",
    "category": "nft",
    "description": "NFTs2Me is a user-friendly comprehensive platform to create, deploy and manage your NFT collection on Monad, 100% free.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917409fa4892d6237dc33_NFTs2Me_logo.webp",
    "links": {
      "website": "http://nfts2me.com/app/monad-testnet/",
      "twitter": "https://x.com/NFTs2Me"
    }
  },
  {
    "id": "nxtchain",
    "name": "NXTchain",
    "category": "depin",
    "description": "NXTchain empowers anyone to join the decentralized cloud through plug-and-play devices or data center ownership.",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4c2914de7af9a367b0_NXTchain_Monad_LOGO.webp",
    "links": {
      "website": "https://www.nxtchain.com",
      "twitter": "https://x.com/NXT_chain"
    }
  },
  {
    "id": "nabla-finance",
    "name": "Nabla Finance",
    "category": "defi",
    "description": "Nabla Finance is a yield protocol where the yield is generated by the hyper-efficient Nabla AMM.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9174a6ae7e18300e1b1b2_Nabla%20Finance_logo.webp",
    "links": {
      "website": "https://www.nabla.fi",
      "twitter": "https://x.com/nablafi"
    }
  },
  {
    "id": "nadfun",
    "name": "Nad.fun",
    "category": "defi",
    "description": "Nad.fun is a Social Memecoin Playground powered by Monad, enabling seamless token launches and trading.",
    "contractCount": 19,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91753fc64a6c6e43c16e3_Nad.fun_logo.webp",
    "links": {
      "website": "https://testnet.nad.fun",
      "twitter": "https://x.com/naddotfun"
    }
  },
  {
    "id": "nadsmith",
    "name": "NadSmith",
    "category": "ai",
    "description": "AI Agent OS on Monad | Tokenizing Agents & Automating Markets - built exclusively on Monad.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9175d84cbdc367d64277c_NadSmith_logo.webp",
    "links": {
      "website": "https://nadsmith.ai/",
      "twitter": "https://x.com/NadSmith_"
    }
  },
  {
    "id": "narrative",
    "name": "Narrative",
    "category": "defi",
    "description": "Perpetual information markets",
    "contractCount": 10,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68965da65527ff3384f1c059_narrative%206R7oJYe6_400x400.webp",
    "links": {
      "website": "https://www.testnet.narrative.xyz/",
      "twitter": "https://x.com/narrativexyz"
    }
  },
  {
    "id": "narwhal-finance",
    "name": "Narwhal Finance",
    "category": "defi",
    "description": "Narwhal Finance is an AI-driven decentralized perpetual trading platform exclusively on Monad. Backed by Jump Crypto and CMS Holdings.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9176689130464ea4285d6_Narwhal%20Finance_logo.webp",
    "links": {
      "website": "https://testnet.narwhal.finance/",
      "twitter": "https://x.com/Narwhal_Finance"
    }
  },
  {
    "id": "neverland",
    "name": "Neverland",
    "category": "defi",
    "description": "Neverland is a Monad-native lending protocol blending Aave V3 security with novel veTokenomics, self-repaying loans & yield strategies.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68d6e9319f6a7484c5ec014c_nvr_logo.webp",
    "links": {
      "website": "https://neverland.money",
      "twitter": "https://x.com/neverland_money"
    }
  },
  {
    "id": "nillion",
    "name": "Nillion",
    "category": "ai",
    "description": "Humanity's first blind computer. The internet’s base layer for all private data.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9177f779fac86351cf9da_Nillion_logo.webp",
    "links": {
      "website": "http://www.nillion.com",
      "twitter": "https://x.com/nillion"
    }
  },
  {
    "id": "nitro-by-router-protocol",
    "name": "Nitro by Router Protocol",
    "category": "infrastructure",
    "description": "Nitro is an intent-based bridge, provides fast, cheap bridges and swaps between 30+ chains",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9178c02389168368647c9_Nitro%20by%20Router%20Protocol_logo.webp",
    "links": {
      "website": "https://app.routernitro.com/swap",
      "twitter": "https://x.com/routerprotocol"
    }
  },
  {
    "id": "nitrofinance",
    "name": "NitroFinance",
    "category": "defi",
    "description": "NitroFinance: An AMM on steroids—fusing DEX and Money Market into one pool to maximize efficiency and simplify liquidity management.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917961e79a03f6da6f980_NitroFinance_logo.webp",
    "links": {
      "website": "https://nitrofinance.xyz/",
      "twitter": "https://x.com/NitroFinance"
    }
  },
  {
    "id": "nomas-wallet",
    "name": "Nomas Wallet",
    "category": "infrastructure",
    "description": "Reinvent the Web3 experience. Powered by AI.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917a1f0b471b3c1becebb_Nomas%20Wallet_logo.webp",
    "links": {
      "website": "https://nomaswallet.com/",
      "twitter": "https://x.com/NomasWalletReal"
    }
  },
  {
    "id": "nostra",
    "name": "Nostra",
    "category": "defi",
    "description": "Nostra is the crypto Super App where users can lend, borrow, swap and bridge cryptocurrencies.",
    "contractCount": 13,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917a7f454824cadfc6ab1_Nostra_logo.webp",
    "links": {
      "website": "https://monad.nostra.finance/lend-borrow",
      "twitter": "https://x.com/nostrafinance"
    }
  },
  {
    "id": "notifi",
    "name": "Notifi",
    "category": "infrastructure",
    "description": "Real-time, white-labeled alerts for on/off-chain events (loan health, liquidity, etc.) in DeFi via email, Telegram, Discord, & more.",
    "contractCount": 13,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917b1d9acff4898218bb3_Notifi_logo.webp",
    "links": {
      "website": "https://notifi.network/",
      "twitter": "https://x.com/NotifiNetwork"
    }
  },
  {
    "id": "noves",
    "name": "Noves",
    "category": "infrastructure",
    "description": "With Noves, users can get financial-grade onchain data on Monad: clean, reconciled, and standardized, for tax, accounting, and finance.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31a3cf8aec80270f6e0_noves-logo.webp",
    "links": {
      "website": "https://noves.fi",
      "twitter": "https://x.com/noves_fi"
    }
  },
  {
    "id": "nubila",
    "name": "Nubila",
    "category": "ai",
    "description": "Nubila is building the physical perception layer for the autonomous economy and AI.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68e035995a5f630974e62baa_nubila_logo_400-400.webp",
    "links": {
      "website": "https://nubila.ai/",
      "twitter": "https://x.com/nubilanetwork"
    }
  },
  {
    "id": "nunchi",
    "name": "Nunchi",
    "category": "defi",
    "description": "A perpetuals exchange for the invisible currents of finance. Long or short any yield. Sense the unsaid. Trade the unseen.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68ceb77f687b9b48c01abe3c_nunchi_logo_400x400.webp",
    "links": {
      "website": "https://nunchi.trade/",
      "twitter": "https://x.com/nunchi"
    }
  },
  {
    "id": "okx-explorer",
    "name": "OKX Explorer",
    "category": "infrastructure",
    "description": "All-In-One blockchain explorer, supporting 60+ blockchains, with OpenAPI and EaaS to securely explore and build onchain.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917bcd9acff4898219311_OKX%20Explorer_logo.webp",
    "links": {
      "website": "https://www.okx.com/web3/explorer",
      "twitter": "https://x.com/okxexplorer"
    }
  },
  {
    "id": "okx-wallet",
    "name": "OKX Wallet",
    "category": "infrastructure",
    "description": "OKX Wallet is your all-in-one gateway to the Web3 world.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917c5d052009891789dd4_OKX%20Wallet_logo.webp",
    "links": {
      "website": "https://www.okx.com/web3",
      "twitter": "https://x.com/wallet"
    }
  },
  {
    "id": "osl-pay",
    "name": "OSL Pay",
    "category": "infrastructure",
    "description": "OSL Pay, the licensed payments arm of OSL Group, delivers secure, compliant digital-to-fiat conversion for global clients.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68fe71a61a4eecacc687e166_D_h84D3s_400x400.webp",
    "links": {
      "website": "https://www.osl-pay.com/",
      "twitter": "https://x.com/oslpay"
    }
  },
  {
    "id": "octoswap",
    "name": "OctoSwap",
    "category": "defi",
    "description": "OctoSwap offers lightning-fast token swaps and capital-efficient liquidity pools with a user friendly interface.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67ce4ceb5a19b9c6f4206ffa_octoswap%20logo.webp",
    "links": {
      "website": "https://octo.exchange",
      "twitter": "https://x.com/octoswapdex"
    }
  },
  {
    "id": "omnia",
    "name": "Omnia",
    "category": "nft",
    "description": "Omnia is a pet battle and adventure game, built by the Sappy Seals team.",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6878162dca7c1699923aaaba_omnia_400x400.webp",
    "links": {
      "website": "https://www.omnia.lol/",
      "twitter": "https://x.com/ExploreOmnia"
    }
  },
  {
    "id": "opals",
    "name": "Opals",
    "category": "consumer",
    "description": "Opals: Kickstarter meets NFTs for projects. Buy cards → auto-launch when funded → cards claim tokens + rewards. Discover gems.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917cf048c532f61e10d6c_Opals_logo.webp",
    "links": {
      "website": "https://opals.io/",
      "twitter": "https://x.com/Opals_io"
    }
  },
  {
    "id": "openocean",
    "name": "OpenOcean",
    "category": "defi",
    "description": "A leading DEX aggregator on 30+ chains, with its swap API powering 180+ projects like MetaMask, Rabby, Li.Fi, and more.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917d86561ec94bfa55cab_OpenOcean_logo.webp",
    "links": {
      "website": "https://openocean.finance/",
      "twitter": "https://x.com/OpenOceanGlobal"
    }
  },
  {
    "id": "opensea",
    "name": "OpenSea",
    "category": "nft",
    "description": "The largest NFT marketplace. Buy, sell, & discover the internet of goods.",
    "contractCount": 19,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917e1c3ad7da1ddf47a5b_OpenSea_logo.webp",
    "links": {
      "website": "https://opensea.io/",
      "twitter": "https://x.com/opensea"
    }
  },
  {
    "id": "orbiter-finance",
    "name": "Orbiter Finance",
    "category": "infrastructure",
    "description": "Orbiter Finance is a decentralized cross-rollup bridge that offers secure, low cost and almost instant transfer.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917eee21ffe4d1053ae79_Orbiter%20Finance_logo.webp",
    "links": {
      "website": "https://www.orbiter.finance/",
      "twitter": "https://x.com/Orbiter_Finance"
    }
  },
  {
    "id": "orderly",
    "name": "Orderly",
    "category": "defi",
    "description": "Infra that lets anyone trade anything, anywhere. Our permissionless liquidity layer provides deep, unified liquidity via a shared orderbook.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917fa6561ec94bfa5749f_Orderly_logo.webp",
    "links": {
      "website": "https://orderly.network/",
      "twitter": "https://x.com/orderlynetwork"
    }
  },
  {
    "id": "orochi-network",
    "name": "Orochi Network",
    "category": "infrastructure",
    "description": "Orochi Network is the world’s first Verifiable Data Infrastructure, addressing scalability, privacy, and data integrity challenges.",
    "contractCount": 19,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91804e882d110b44cdd60_Orochi%20Network_logo.webp",
    "links": {
      "website": "http://www.orochi.network/",
      "twitter": "https://x.com/OrochiNetwork"
    }
  },
  {
    "id": "outpost-surge",
    "name": "Outpost Surge",
    "category": "gaming",
    "description": "A city-building society survival game on Mars. Manage resources, grow your outpost, and earn rewards.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67e316a927462cd6dc6aa4ad_logo-os.webp",
    "links": {
      "website": "https://www.outpostsurge.com/",
      "twitter": "https://x.com/OutpostSurge"
    }
  },
  {
    "id": "owlto-finance",
    "name": "Owlto Finance",
    "category": "defi",
    "description": "Owlto Finance is an intent-centric interoperability protocol - bridge the world with AI agents.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9180e83477f8bd77d871e_Owlto%20Finance_logo.webp",
    "links": {
      "website": "https://owlto.finance/",
      "twitter": "https://x.com/Owlto_Finance"
    }
  },
  {
    "id": "play-network",
    "name": "PLAY Network",
    "category": "gaming",
    "description": "PLAY turbocharges games with crypto rails. Any game, any chain.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9181d8f00b5fa4ab7a863_PLAY%20Network_logo.webp",
    "links": {
      "website": "https://www.theplay.network/",
      "twitter": "https://x.com/0xplay_network"
    }
  },
  {
    "id": "poink",
    "name": "POINK",
    "category": "infrastructure",
    "description": "Poink lets users interact with Web3 directly on X (Twitter), helping dapps onboard users directly from X.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67efe13fe05410f903a927d9_Screenshot%202025-04-03%20at%2012.37.33%E2%80%AFPM.webp",
    "links": {
      "website": "https://poink.xyz/",
      "twitter": "https://x.com/poinkofficial"
    }
  },
  {
    "id": "pancakeswap",
    "name": "PancakeSwap",
    "category": "defi",
    "description": "Trade and earn crypto on the all-in-one decentralized exchange. Enjoy low fees, high liquidity, and a user-friendly interface.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b918ac779fac86351e1b2f_Pancakeswap%20Logo.webp",
    "links": {
      "website": "https://pancakeswap.finance/",
      "twitter": "https://x.com/PancakeSwap"
    }
  },
  {
    "id": "pangea",
    "name": "Pangea",
    "category": "infrastructure",
    "description": "Pangea is the immersive web3 environment, a trustless data network to explore and interact with blockchains, enabling the best experience.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b918fbe0429ca00f52460d_Pangea_logo.webp",
    "links": {
      "website": "https://pangea.foundation/",
      "twitter": "https://x.com/In_Pangea"
    }
  },
  {
    "id": "para",
    "name": "Para",
    "category": "infrastructure",
    "description": "Para is the easiest and most secure way to onboard all your users and support them throughout their crypto journey.",
    "contractCount": 19,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9190489130464ea441071_Para_logo.webp",
    "links": {
      "website": "https://getpara.com",
      "twitter": "https://x.com/get_para"
    }
  },
  {
    "id": "pecker",
    "name": "Pecker",
    "category": "defi",
    "description": "Pecker is a liquidity layer on Monad for stables and LSTs, solving fragmentation slippage and yield inefficiency with unified tokens",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68966e755af8bc2db3ee374a_pecker%20logo%20.webp",
    "links": {
      "website": "https://pecker.so",
      "twitter": "https://x.com/pecker_so"
    }
  },
  {
    "id": "peridot",
    "name": "Peridot",
    "category": "defi",
    "description": "Peridot Protocol is a Cross-Chain Money Market enabling seamless Lending & Borrowing across all integrated Blockchains",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31aba83cb513135eaee_NEW-LOGO-CUBE-400x400.webp",
    "links": {
      "website": "https://peridot.finance/",
      "twitter": "https://x.com/peridotprotocol"
    }
  },
  {
    "id": "permute-finance",
    "name": "Permute Finance",
    "category": "infrastructure",
    "description": "Permute is a native Bitcoin bridge for secure, low-cost BTC cross-chain swaps & more with 0.1% fees and non-custodial security.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68e96f513a156f995f3de133_Logo-WebP-400x400-.webp",
    "links": {
      "website": "https://permute.finance/",
      "twitter": "https://x.com/permute_finance"
    }
  },
  {
    "id": "perpl",
    "name": "Perpl",
    "category": "defi",
    "description": "Perpl is a CLOB‑based perpetual futures DEX.",
    "contractCount": 1,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6878163e0a3904f124992455_Perpl_400x400.webp",
    "links": {
      "website": "https://perpl.xyz/",
      "twitter": "https://x.com/perpltrade"
    }
  },
  {
    "id": "phantom",
    "name": "Phantom",
    "category": "infrastructure",
    "description": "The friendly crypto wallet built for DeFi & NFTs.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9190b6ae7e18300e2ad13_Phantom_logo.webp",
    "links": {
      "website": "https://phantom.com/",
      "twitter": "https://x.com/phantom"
    }
  },
  {
    "id": "pimlico",
    "name": "Pimlico",
    "category": "infrastructure",
    "description": "Pimlico provides a suite of tools and services to help you build, deploy, and manage smart accounts on EVM-compatible chains.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9191884cbdc367d659a3d_Pimlico_logo.webp",
    "links": {
      "website": "https://www.pimlico.io",
      "twitter": "https://x.com/pimlicoHQ"
    }
  },
  {
    "id": "pingu-exchange",
    "name": "Pingu Exchange",
    "category": "defi",
    "description": "Pingu Exchange is a fully on-chain, coin-margined Perp DEX with top-tier performance for traders of all sizes to access global markets.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91927ab78b729a9254691_Pingu%20Exchange_logo.webp",
    "links": {
      "website": "https://pingu.exchange/",
      "twitter": "https://x.com/PinguExchange"
    }
  },
  {
    "id": "plato",
    "name": "Plato",
    "category": "consumer",
    "description": "SocialFi for dining, making eating fun, engaging, and social.",
    "contractCount": 13,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/687ef16c4c7798264cddcd2c_Plato%20Logo%20-%20WhiteBackgd.webp",
    "links": {
      "website": "https://m.getplato.app/monad",
      "twitter": "https://x.com/plato2earn"
    }
  },
  {
    "id": "polyflow",
    "name": "PolyFlow",
    "category": "infrastructure",
    "description": "PayFi protocol linking RWAs with DeFi.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6878157fd689191cf9e81382_polyfi%20logo_400x400.webp",
    "links": {
      "website": "https://app.polyflow.tech/",
      "twitter": "https://x.com/Polyflow_PayFi"
    }
  },
  {
    "id": "poply",
    "name": "Poply",
    "category": "nft",
    "description": "Community-based NFT marketplace where anyone can generate custom NFT collections using an integrated AI engine.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67cb75a56fa2925b3b2e9a89_popy-logo.webp",
    "links": {
      "website": "https://poply.xyz",
      "twitter": "https://x.com/poply_xyz"
    }
  },
  {
    "id": "posterfun",
    "name": "Poster.fun",
    "category": "consumer",
    "description": "Poster.fun: the full-stack meme studio powered by Info-Fi™—mint in seconds, track on-chain virality, and pocket tips & bounties.",
    "contractCount": 1,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6863135b0d47a347f77313fc_poster-logo-webp.webp",
    "links": {
      "website": "https://www.poster.fun/",
      "twitter": "https://x.com/Posterdotfun"
    }
  },
  {
    "id": "primex-finance",
    "name": "Primex Finance",
    "category": "defi",
    "description": "Primex Finance is a leveraged farming & trading protocol offering top APYs & margin trading for unlimited tokens on DEXs.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67d3a0a714e1d6afadc6f5f0_Primex-Logo-Square-400px.webp",
    "links": {
      "website": "https://primex.finance/",
      "twitter": "https://x.com/primex_official"
    }
  },
  {
    "id": "primus",
    "name": "Primus",
    "category": "infrastructure",
    "description": "Primus enables secure AI operations and data processing with zkTLS and zkFHE, driving blockchain innovation.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9193884cbdc367d65b04b_Primus_logo.webp",
    "links": {
      "website": "https://primuslabs.xyz/",
      "twitter": "https://x.com/primus_labs"
    }
  },
  {
    "id": "privy",
    "name": "Privy",
    "category": "infrastructure",
    "description": "Privy helps onboard any user to crypto. Power flexible, powerful wallets under the hood for any application.",
    "contractCount": 1,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919421610ca8a55c5fc53_Privy_logo.webp",
    "links": {
      "website": "http://privy.io",
      "twitter": "https://x.com/privy_io"
    }
  },
  {
    "id": "proof-of-skill",
    "name": "Proof-of-Skill",
    "category": "infrastructure",
    "description": "A protocol to verify real-world skills along with ID & work history, enabling faster, smarter skill-based hiring.",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67cb7895e1046bc1bf640a67__0FqUZLR_400x400.webp",
    "links": {
      "website": "https://proofofskill.org",
      "twitter": "https://x.com/proofofskill"
    }
  },
  {
    "id": "puffer-finance",
    "name": "Puffer Finance",
    "category": "defi",
    "description": "Puffer Finance is a leading liquid staking protocol that lets users stake $ETH, receive $pufETH, and access DeFi opportunities.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/684744a42813b10b0fd35bf9_puffer%20.webp",
    "links": {
      "website": "https://linktr.ee/puffer_finance",
      "twitter": "https://x.com/Puffer_Finance"
    }
  },
  {
    "id": "pumpbtc",
    "name": "PumpBTC",
    "category": "ai",
    "description": "PumpBTC’s aim to allow Bitcoin holders to maximize their returns by participating in DeFi with security, scalability, and transparency.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91e8ee0429ca00f558bb8_PumpBTC%20logo.webp",
    "links": {
      "website": "https://testnet.pumpbtc.xyz/",
      "twitter": "https://x.com/Pumpbtcxyz"
    }
  },
  {
    "id": "purps",
    "name": "Purps",
    "category": "defi",
    "description": "A perpetual DEX and liquidity hub on Monad, offering deep liquidity, fast trading, and support for native projects.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67e316aa60595f10c8613edb_Monda-Logo-400x400.webp",
    "links": {
      "website": "https://www.purps.xyz/",
      "twitter": "https://x.com/PurpsExchange"
    }
  },
  {
    "id": "pyth-network",
    "name": "Pyth Network",
    "category": "infrastructure",
    "description": "The price layer of the global financial market.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9194dd821392f1940877b_Pyth%20Network_logo.webp",
    "links": {
      "website": "http://pyth.network",
      "twitter": "https://x.com/PythNetwork"
    }
  },
  {
    "id": "quicknode",
    "name": "QuickNode",
    "category": "infrastructure",
    "description": "QuickNode provides blockchain infrastructure and tools for Web3 development, offering high-performance access to 60+ blockchains.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9195a048c532f61e234ea_QuickNode_logo.webp",
    "links": {
      "website": "https://www.quicknode.com/",
      "twitter": "https://x.com/QuickNode"
    }
  },
  {
    "id": "rabble",
    "name": "Rabble",
    "category": "consumer",
    "description": "Rabble is a MultiChain telegram client, now on Monad. Explore 1 click Monad DeFi apps baked into the Telegram social graph.",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9196ae21ffe4d10555e75_Rabble_logo.webp",
    "links": {
      "website": "https://app.rabble.pro/?utm=MONAD",
      "twitter": "https://x.com/0xRabble"
    }
  },
  {
    "id": "rarebetsports",
    "name": "RareBetSports",
    "category": "infrastructure",
    "description": "Building consumer sports applications powered by the RBS Oracle. Play RareLink and win up to 100x your crypto.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91971779fac86351e9c4d_RareBetSports_logo.webp",
    "links": {
      "website": "https://rarelink.rarebetsports.io/",
      "twitter": "https://x.com/RareBetSports"
    }
  },
  {
    "id": "rayvo",
    "name": "Rayvo",
    "category": "depin",
    "description": "First web3 smart glasses that combine AI, decentralized data ownership, and wear-to-earn rewards.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6878156edcbd1ae880b0885f_rayvo%20Td0jPvVW_400x400.webp",
    "links": {
      "website": "https://rayvo.gitbook.io/rayvo",
      "twitter": "https://x.com/rayvo_xyz"
    }
  },
  {
    "id": "redstone",
    "name": "RedStone",
    "category": "infrastructure",
    "description": "RedStone is the fastest-growing Modular Oracle, specializing in yield-bearing collateral for lending markets, such as LSTs, LRTs and BTCFi.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91983af1ff23f24a96811_RedStone_logo.webp",
    "links": {
      "website": "https://www.redstone.finance/",
      "twitter": "https://x.com/redstone_defi"
    }
  },
  {
    "id": "redbrick",
    "name": "Redbrick",
    "category": "gaming",
    "description": "Create. Play. Earn. Redbrick is a next-generation web3 gaming engine empowering creators to publish & monetize their games.",
    "contractCount": 1,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9198c739963115550368b_Redbrick_logo.webp",
    "links": {
      "website": "https://redbrick.land/monad",
      "twitter": "https://x.com/RedbrickLand"
    }
  },
  {
    "id": "relend-network",
    "name": "Relend Network",
    "category": "infrastructure",
    "description": "Relend Network supplies rUSDC into Monad money markets.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31c7521ac0c5bd871ac_relend-logo-monad.webp",
    "links": {
      "website": "https://relend.network/",
      "twitter": "https://x.com/relend_network"
    }
  },
  {
    "id": "renzo",
    "name": "Renzo",
    "category": "defi",
    "description": "Renzo simplifies restaking with AVS strategies for LRTs, supporting $ezETH, $pzETH, and $ezSOL on Ethereum & Solana.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91999048c532f61e25f42_Renzo_logo.webp",
    "links": {
      "website": "https://www.renzoprotocol.com/",
      "twitter": "https://x.com/RenzoProtocol"
    }
  },
  {
    "id": "reown",
    "name": "Reown",
    "category": "infrastructure",
    "description": "Reown gives developers the tools to build user experiences that make digital ownership effortless, intuitive, and secure.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919a50238916836880556_Reown_logo.webp",
    "links": {
      "website": "https://reown.com/",
      "twitter": "https://x.com/reown_"
    }
  },
  {
    "id": "reservoir",
    "name": "Reservoir",
    "category": "infrastructure",
    "description": "Reservoir is a developer platform that lets you interact with the NFT market using a single toolkit.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919b1f9180e8745b5f043_Reservoir_logo.webp",
    "links": {
      "website": "https://reservoir.tools/",
      "twitter": "https://x.com/reservoir0x"
    }
  },
  {
    "id": "rgbclash",
    "name": "RgbClash",
    "category": "gaming",
    "description": "Unleash your creativity and draw your yield bearing NFTs. Play to earn with multiplayer drawing-guessing game.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/683481011635632a6270ac56_center_filled.webp",
    "links": {
      "website": "https://rgbclash.xyz",
      "twitter": "https://x.com/rgbclash_xyz"
    }
  },
  {
    "id": "rhinofi",
    "name": "Rhino.fi",
    "category": "infrastructure",
    "description": "rhino.fi is the ultimate bridge for effortless multi-chain token movement.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919bb7399631155504fcc_Rhino.fi_logo.webp",
    "links": {
      "website": "https://rhino.fi/",
      "twitter": "https://x.com/rhinofi"
    }
  },
  {
    "id": "rubic",
    "name": "Rubic",
    "category": "defi",
    "description": "Rubic. Your Best Rate Finder across 90+ chains and 360+ DEXs and bridges. For users and dApps.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919c5d9acff4898232d3f_Rubic_logo.webp",
    "links": {
      "website": "https://testnet.rubic.exchange/",
      "twitter": "https://x.com/CryptoRubic"
    }
  },
  {
    "id": "rug-rumble",
    "name": "Rug Rumble",
    "category": "defi",
    "description": "Gamifying the speculative memecoin landscape. Wager your memecoins, defend your banner, and win outsized returns.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919cfd031c30308e9ae18_Rug%20Rumble_logo.webp",
    "links": {
      "website": "http://rugrumble.xyz",
      "twitter": "https://x.com/RugRumble"
    }
  },
  {
    "id": "rumi",
    "name": "Rumi",
    "category": "ai",
    "description": "Rumi enables users to watch, earn, and help build the future of AI-powered entertainment.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68781565fc16fe318bea11a7_rumi%20zPdVic8R_400x400.webp",
    "links": {
      "website": "https://rumilabs.io/",
      "twitter": "https://x.com/RumiLabs_io"
    }
  },
  {
    "id": "sqd",
    "name": "SQD",
    "category": "infrastructure",
    "description": "SQD enables permissionless, cost-efficient access to petabytes of high-value Web3 data.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919e49fa4892d62397880_SQD_logo.webp",
    "links": {
      "website": "https://www.sqd.ai",
      "twitter": "https://x.com/helloSQD"
    }
  },
  {
    "id": "stagefun",
    "name": "STAGE.fun",
    "category": "consumer",
    "description": "STAGE.fun is a crowdfunding platform for festivals and events.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6875106c949bec27002cd3da_STAGE-400x400.png",
    "links": {
      "website": "https://stage.fun/",
      "twitter": "https://x.com/stagedotfun"
    }
  },
  {
    "id": "safepal",
    "name": "SafePal",
    "category": "infrastructure",
    "description": "SafePal is a non-custodial crypto wallet suite (hardware, mobile, browser) backed by Animoca and Binance, serving 20M+ users.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c4e7769a93e78ca6b0d394_400-400_SafePal.webp",
    "links": {
      "website": "https://www.safepal.com/",
      "twitter": "https://x.com/iSafePal"
    }
  },
  {
    "id": "scatterart",
    "name": "Scatter.art",
    "category": "nft",
    "description": "Scatter is an artist-first NFT launchpad enabling free artistic expression where VC-funded markets cannot.",
    "contractCount": 6,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883f79d5ed6d256a4153b15_scatter%20logo%20.webp",
    "links": {
      "website": "https://www.scatter.art/",
      "twitter": "https://x.com/scatter_art"
    }
  },
  {
    "id": "sela-network",
    "name": "Sela Network",
    "category": "depin",
    "description": "With Sela Network, users run nodes, earn rewards & power real transactions. Sela transforms idle computing power into a global data infrastructure",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68966d42336d11a6c5b329ea_sela%20logo%20.webp",
    "links": {
      "website": "https://www.selanetwork.io/",
      "twitter": "https://x.com/SelaNetwork"
    }
  },
  {
    "id": "sherpa",
    "name": "Sherpa",
    "category": "defi",
    "description": "On-chain automation made simple: users can leverage AI to trade, earn, and dominate the DeFi landscape strategically.",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6888280b254c67fbfb86411b_sherpa_logo.webp",
    "links": {
      "website": "https://app.sherpa.trade/lander",
      "twitter": "https://x.com/sherpa_trade"
    }
  },
  {
    "id": "showdown",
    "name": "Showdown",
    "category": "gaming",
    "description": "Powering competitive gaming's future on Monad. Automated tournaments & skill-based wagering for all gamers on their favorite gaming titles!",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919f86e9a2707acfe0c32_Showdown_logo.webp",
    "links": {
      "website": "https://showdown.win/",
      "twitter": "https://x.com/showdown_gg"
    }
  },
  {
    "id": "sidekick",
    "name": "Sidekick",
    "category": "consumer",
    "description": "Sidekick Protocol is a one-stop platform for asset distribution & trading. Launch, distribute, and trade assets via live streaming.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91a007399631155507c62_Sidekick_logo.webp",
    "links": {
      "website": "https://sidekick.fans/",
      "twitter": "https://x.com/Sidekick_Labs"
    }
  },
  {
    "id": "skytrade",
    "name": "SkyTrade",
    "category": "infrastructure",
    "description": "SkyTrade lets you monetize your air rights, the legal right to use and control the space above buildings and land.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91a2c1610ca8a55c6a07c_SkyTrade_logo.webp",
    "links": {
      "website": "https://sky.trade",
      "twitter": "https://x.com/SkyTradeNetwork"
    }
  },
  {
    "id": "slogain",
    "name": "Slogain",
    "category": "consumer",
    "description": "Post and Bump. Content Rewards Made Easy. Everyone has a stake in the content ecosystem. Each click translates into tangible recognition.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91a338330a99a87123905_Slogain_logo.webp",
    "links": {
      "website": "https://monad.slogain.gg/",
      "twitter": "https://x.com/SlogainDaily"
    }
  },
  {
    "id": "solv-protocol",
    "name": "Solv Protocol",
    "category": "defi",
    "description": "Solv Protocol is the On-Chain Bitcoin Reserve, connecting TradFi, CeFi, and DeFi to unlock Bitcoin's $1T+ potential.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c4e87fd61305b4e10c58a0_solv%20lo.webp",
    "links": {
      "website": "https://solv.finance/",
      "twitter": "https://x.com/SolvProtocol"
    }
  },
  {
    "id": "spine-finance",
    "name": "Spine Finance",
    "category": "defi",
    "description": "Instant, Efficient, and Flexible Fixed-Rate Money Markets.",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91a425075b90f168c2a31_Spine%20Finance_logo.webp",
    "links": {
      "website": "https://spine.finance/",
      "twitter": "https://x.com/spineprotocol"
    }
  },
  {
    "id": "sprout",
    "name": "Sprout",
    "category": "defi",
    "description": "Yield app that helps users earn personalized DeFi yields matching risk tolerance, built for everyone.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68fe71a688d8e714a821b7f4_2AsmLCyj_400x400.webp",
    "links": {
      "website": "https://www.sproutfi.xyz/",
      "twitter": "https://x.com/sproutfi_xyz"
    }
  },
  {
    "id": "stakestone",
    "name": "StakeStone",
    "category": "infrastructure",
    "description": "Omnichain liquidity infrastructure for yield-bearing assets, redistributing liquidity across chains and protocols through Liquidity Pad.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91a7d859d08f0b8dbbaa5_StakeStone_logo.webp",
    "links": {
      "website": "https://stakestone.io/",
      "twitter": "https://x.com/stake_stone"
    }
  },
  {
    "id": "stargate",
    "name": "Stargate",
    "category": "defi",
    "description": "Stargate is a fully composable liquidity transport protocol that lives at the heart of Omnichain DeFi.",
    "contractCount": 10,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91a8de21ffe4d10563502_Stargate_logo.webp",
    "links": {
      "website": "https://stargate.finance/",
      "twitter": "https://x.com/StargateFinance"
    }
  },
  {
    "id": "stationx",
    "name": "StationX",
    "category": "consumer",
    "description": "StationX tokenises private investments - enabling users to join syndicates & invest in deals",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31bd059f065788130eb_stnx_logo.webp",
    "links": {
      "website": "https://stationx.network",
      "twitter": "https://x.com/stationxnetwork"
    }
  },
  {
    "id": "stork",
    "name": "Stork",
    "category": "infrastructure",
    "description": "Stork, the fastest-growing oracle, offers over 355 real-time feeds for dApps, helping developers build Web2-level speed and efficiency.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91a95f9180e8745b69181_Stork_logo.webp",
    "links": {
      "website": "https://www.stork.network/",
      "twitter": "https://x.com/StorkOracle"
    }
  },
  {
    "id": "subquery",
    "name": "SubQuery",
    "category": "infrastructure",
    "description": "SubQuery’s infrastructure network offers everything from data indexers, RPCs and AI agents — all fully decentralised and production ready.",
    "contractCount": 13,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91a9dbe2243a8e82363fa_SubQuery_logo.webp",
    "links": {
      "website": "https://subquery.network/",
      "twitter": "https://x.com/SubQueryNetwork"
    }
  },
  {
    "id": "sumer",
    "name": "Sumer",
    "category": "defi",
    "description": "Sumer unifies correlated/non-correlated asset lending, CDP synthetics, and bridge liquidity into a capital-efficient DeFi pool.",
    "contractCount": 2,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91aa6b9188e59b9aa3517_Sumer_logo.webp",
    "links": {
      "website": "https://app.sumer.money",
      "twitter": "https://x.com/sumermoney"
    }
  },
  {
    "id": "sunscreen",
    "name": "Sunscreen",
    "category": "infrastructure",
    "description": "Sunscreen transforms advanced FHE research into real-world cryptography tools, bringing post-quantum privacy to web3.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6863135baa6db2d22d376c0a_Sunscreen-Logos-Social-Frame.webp",
    "links": {
      "website": "https://sunscreen.tech/",
      "twitter": "https://x.com/sunscreentech"
    }
  },
  {
    "id": "swaap",
    "name": "Swaap",
    "category": "defi",
    "description": "Swaap is the most efficient onchain liquidity source.",
    "contractCount": 8,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91ab56ae7e18300e3da8d_Swaap_logo.webp",
    "links": {
      "website": "https://www.swaap.finance/",
      "twitter": "https://x.com/SwaapFinance"
    }
  },
  {
    "id": "switchboard",
    "name": "Switchboard",
    "category": "infrastructure",
    "description": "Switchboard is the largest customizable oracle network and first oracle aggregator, helping secure nearly $1.5B in value across 10+ chains.",
    "contractCount": 19,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91abd859d08f0b8dbe03c_Switchboard_logo.webp",
    "links": {
      "website": "https://switchboard.xyz",
      "twitter": "https://x.com/switchboardxyz"
    }
  },
  {
    "id": "swyrl-finance",
    "name": "Swyrl Finance",
    "category": "defi",
    "description": "Swyrl is a Monad-native DEX with dual AMMs and liquid staking, aligning users and protocols via ve(3,3)-driven governance.",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31a5f263ff733767dec_swyrl_logo.webp",
    "links": {
      "website": "https://swyrl.finance/",
      "twitter": "https://x.com/SwyrlFi"
    }
  },
  {
    "id": "t3rn",
    "name": "T3rn",
    "category": "infrastructure",
    "description": "t3rn executes cross-chain transactions at the protocol layer — no need for wrapping assets or trusting third-party relayers.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/680607ae08a85d835012cafc_t3rn%20logo.webp",
    "links": {
      "website": "https://t3rn.io/",
      "twitter": "https://x.com/t3rn_io"
    }
  },
  {
    "id": "tadle",
    "name": "Tadle",
    "category": "consumer",
    "description": "Tadle is a full-stack platform offering Points trading, Missions, and Odds Marketplaces to boost engagement, liquidity, and growth.",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91adbe21ffe4d10566ce8_Tadle_logo.webp",
    "links": {
      "website": "https://tadle.com/en",
      "twitter": "https://x.com/tadle_com"
    }
  },
  {
    "id": "talentum",
    "name": "Talentum",
    "category": "consumer",
    "description": "Talentum is an attention layer focused on on-chain activities and credentials.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91ae8c0e02b5b7bf4286a_Talentum_logo.webp",
    "links": {
      "website": "https://monad.talentum.id/",
      "twitter": "https://x.com/TalentumID"
    }
  },
  {
    "id": "tally",
    "name": "Tally",
    "category": "infrastructure",
    "description": "Tally is the industry standard for onchain governance.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91af25075b90f168cabc6_Tally_logo.webp",
    "links": {
      "website": "https://www.tally.xyz/",
      "twitter": "https://x.com/tallyxyz"
    }
  },
  {
    "id": "tarobase",
    "name": "Tarobase",
    "category": "infrastructure",
    "description": "Build on-chain apps with Tarobase—from Venmo & Pump.fun clones to endless possibilities—without writing smart contracts.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91af9f6998cf2420a8f14_Tarobase_logo.webp",
    "links": {
      "website": "https://tarobase.com",
      "twitter": "https://x.com/0xtarobase"
    }
  },
  {
    "id": "terminal-3",
    "name": "Terminal 3",
    "category": "infrastructure",
    "description": "Terminal 3 is Web3’s most powerful user identity and data oracle.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67eff2c6563c6021491d9621_T3_LOGO.webp",
    "links": {
      "website": "https://www.terminal3.io/",
      "twitter": "https://x.com/terminal3io"
    }
  },
  {
    "id": "tezza-poker",
    "name": "Tezza Poker",
    "category": "gaming",
    "description": "Play, win, mint. Tezza Poker lets you compete free, earn Points, and claim NFTs—pure skill, real rewards.",
    "contractCount": 19,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/682f7caa4bd8615922bce6a0_tezza.webp",
    "links": {
      "website": "https://t.me/playtezzapoker_bot",
      "twitter": "https://x.com/tezzapoker"
    }
  },
  {
    "id": "the-graph",
    "name": "The Graph",
    "category": "infrastructure",
    "description": "The Graph is a decentralized protocol for indexing blockchain data, enabling developers to build web3 apps without managing infrastructure.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b019fa4892d623a2d04_The%20Graph_logo.webp",
    "links": {
      "website": "https://thegraph.com/",
      "twitter": "https://x.com/graphprotocol"
    }
  },
  {
    "id": "the-vape-labs",
    "name": "The Vape Labs",
    "category": "depin",
    "description": "The Vape Labs pioneers DePIN x Vape2Earn with AI-powered smart vapes, rewarding users and providing anonymized data for public health.",
    "contractCount": 20,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b0afc64a6c6e43e7e17_The%20Vape%20Labs_logo.webp",
    "links": {
      "website": "https://app.thevapelabs.io",
      "twitter": "https://x.com/thevapelabs"
    }
  },
  {
    "id": "thirdweb",
    "name": "Thirdweb",
    "category": "infrastructure",
    "description": "thirdweb is a full-stack, open-source Web3 platform with SDKs, smart contracts, indexers & wallets for EVM chains. Build & scale apps fast!",
    "contractCount": 1,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b13f6998cf2420a9d1d_Thirdweb_logo.webp",
    "links": {
      "website": "https://thirdweb.com/",
      "twitter": "https://x.com/thirdweb"
    }
  },
  {
    "id": "timelock",
    "name": "Timelock",
    "category": "defi",
    "description": "Timebound, liquidation free leverage.",
    "contractCount": 15,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68781555f2471af37cf9c74a_timelock%20goht1Ab-_400x400.webp",
    "links": {
      "website": "https://www.timelock.trade/",
      "twitter": "https://x.com/Timelock_Trade"
    }
  },
  {
    "id": "timeswap",
    "name": "Timeswap",
    "category": "defi",
    "description": "Timeswap is the first oracleless lending/borrowing protocol — enabling the creation of money markets for ANY ERC20 tokens.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b1f1610ca8a55c74c2d_Timeswap_logo.webp",
    "links": {
      "website": "https://timeswap.io/",
      "twitter": "https://x.com/TimeswapLabs"
    }
  },
  {
    "id": "tokenpocket",
    "name": "TokenPocket",
    "category": "infrastructure",
    "description": "TokenPocket is the world's leading multi-chain self-custodial wallet.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67bebce03f2e46a263da186f_token%20banner.webp",
    "links": {
      "website": "https://www.tokenpocket.pro/",
      "twitter": "https://x.com/TokenPocket_TP"
    }
  },
  {
    "id": "townsquare",
    "name": "TownSquare",
    "category": "infrastructure",
    "description": "Modular money market & yield layer for next-gen onchain assets & RWAs, with crosschain interoperability",
    "contractCount": 3,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b27b9188e59b9aa8b6a_TowneSquare_logo.webp",
    "links": {
      "website": "https://www.townsq.xyz/",
      "twitter": "https://x.com/TownSquarexyz"
    }
  },
  {
    "id": "treadfi",
    "name": "Tread.fi",
    "category": "defi",
    "description": "Exchange aggregator and algorithmic trading platform, standardizing and elevating institutional and retail trading experiences.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b30048c532f61e36d82_Tread.fi_logo.webp",
    "links": {
      "website": "http://www.tread.fi",
      "twitter": "https://x.com/tread_fi"
    }
  },
  {
    "id": "triton-one",
    "name": "Triton One",
    "category": "infrastructure",
    "description": "Triton One is a bare-metal RPC service provider for high-throughput blockchains. Build, iterate, and ship faster with Triton.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b39c1a6a111c72292a6_Triton%20One_logo.webp",
    "links": {
      "website": "https://triton.one",
      "twitter": "https://x.com/triton_one"
    }
  },
  {
    "id": "turnkey",
    "name": "Turnkey",
    "category": "infrastructure",
    "description": "Modular, secure, scalable enterprise-grade wallet OS for building non-custodial embedded wallets, automating backend transactions, & more.",
    "contractCount": 18,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b43d821392f19422bcd_Turnkey_logo.webp",
    "links": {
      "website": "https://www.turnkey.com/",
      "twitter": "https://x.com/turnkeyhq"
    }
  },
  {
    "id": "typex",
    "name": "TypeX",
    "category": "defi",
    "description": "TypeX is a keyboard app that transforms user input value into on-chain assets, offering a seamless trading experience.",
    "contractCount": 16,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/687816493ef8c9bbd2bf4fe8_typex%20logo%20_400x400.webp",
    "links": {
      "website": "https://typex.cc/",
      "twitter": "https://x.com/TypeXKeyboard"
    }
  },
  {
    "id": "uniswap",
    "name": "Uniswap",
    "category": "defi",
    "description": "The largest onchain marketplace. Buy and sell crypto on Monad and 11+ other chains.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b5f48ee25af9be38700_Uniswap%20Wallet_logo.webp",
    "links": {
      "website": "https://app.uniswap.org/",
      "twitter": "https://x.com/Uniswap"
    }
  },
  {
    "id": "uniswap-wallet",
    "name": "Uniswap Wallet",
    "category": "infrastructure",
    "description": "The Uniswap Wallet is self-custody crypto wallet built for swapping. It lets you buy crypto, browse NFTs, explore Web3 apps, and swap tokens",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b5f48ee25af9be38700_Uniswap%20Wallet_logo.webp",
    "links": {
      "website": "https://wallet.uniswap.org",
      "twitter": "https://x.com/Uniswap"
    }
  },
  {
    "id": "unmarshal",
    "name": "Unmarshal",
    "category": "infrastructure",
    "description": "UnmarshalAI is a leading decentralized multi-chain data network, enabling Web3 projects to access accurate, real-time blockchain data.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b7db9188e59b9aac1e1_Unmarshal_logo.webp",
    "links": {
      "website": "https://unmarshal.ai",
      "twitter": "https://x.com/unmarshalAI"
    }
  },
  {
    "id": "valor-quest",
    "name": "Valor Quest",
    "category": "gaming",
    "description": "The No.1 Mythic-themed AFK game on Telegram with NFTs, mining, and epic battles.",
    "contractCount": 20,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6834a1e5bc93ee52da7849c0_6834a1646afb796987d92c9d_Logo.webp",
    "links": {
      "website": "https://t.me/ValorQuestBot",
      "twitter": "https://x.com/valorquestgame"
    }
  },
  {
    "id": "web3auth",
    "name": "Web3Auth",
    "category": "infrastructure",
    "description": "Web3Auth simplifies Web3 access with social logins, customisable wallet UI & advanced security, with non-custodial MPC wallet management.",
    "contractCount": 4,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b9211a6f589667ebd18_Web3Auth_logo.webp",
    "links": {
      "website": "https://web3auth.io/",
      "twitter": "https://x.com/web3auth"
    }
  },
  {
    "id": "winksfun",
    "name": "Winks.fun",
    "category": "infrastructure",
    "description": "Winks enable end-to-end on-chain actions within social media apps, without any middleware!",
    "contractCount": 14,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91ba36561ec94bfa7abfa_Winks.fun_logo.webp",
    "links": {
      "website": "https://www.winks.fun",
      "twitter": "https://x.com/winksdotfun"
    }
  },
  {
    "id": "wonad",
    "name": "Wonad",
    "category": "consumer",
    "description": "First Plant to Earn project on Monad. Offering a way to create real-world impact while earning rewards",
    "contractCount": 13,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31ceeab028ff508564a_logowonad.webp",
    "links": {
      "website": "https://www.thiswonad.xyz/",
      "twitter": "https://x.com/thiswonad"
    }
  },
  {
    "id": "wormhole",
    "name": "Wormhole",
    "category": "infrastructure",
    "description": "Wormhole is a generic message-passing protocol designed to enable secure and efficient communication between different blockchains.",
    "contractCount": 17,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91bb383812f23336ed80b_Wormhole_logo.webp",
    "links": {
      "website": "https://wormhole.com/",
      "twitter": "https://x.com/wormhole"
    }
  },
  {
    "id": "x2c",
    "name": "X2C",
    "category": "gaming",
    "description": "X2C is where degens play to win. Users skill up in ultra-casual games for token rewards.",
    "contractCount": 11,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6893d9cb3aa0c3e58d29e9c6_x2c-icon.webp",
    "links": {
      "website": "https://flappytrump.x2c.fun/",
      "twitter": "https://x.com/PlayFlappyTrump"
    }
  },
  {
    "id": "xl",
    "name": "XL",
    "category": "defi",
    "description": "XL is a memecoin launchpad enabling easy, low-cost token creation across various networks.",
    "contractCount": 10,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91bbfa00e125f94a40849_XL_logo.webp",
    "links": {
      "website": "https://testnet.xl.fun/monad",
      "twitter": "https://x.com/xldotfun"
    }
  },
  {
    "id": "yamata",
    "name": "Yamata",
    "category": "defi",
    "description": "Yamata is full-stack DeFi: advanced CLOB trading, perps, options, vaults & predictions - all fast, all trustless, all under one roof.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68ceb78045702f6c824d8099_xpfp.webp",
    "links": {
      "website": "https://yamata.io",
      "twitter": "https://x.com/yamataexchange"
    }
  },
  {
    "id": "yieldkingz",
    "name": "YieldKingZ",
    "category": "gaming",
    "description": "YieldKingZ: A Web3 Game-Fi casino featuring yield farming, sustainable tokenomics, and Club-Fi for community-driven finance.",
    "contractCount": 9,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91bd2c1a6a111c7231095_YieldKingZ_logo.webp",
    "links": {
      "website": "https://test-monad.yieldkingz.io/",
      "twitter": "https://x.com/Yieldkingz"
    }
  },
  {
    "id": "zapry",
    "name": "Zapry",
    "category": "ai",
    "description": "Zapry is a one-stop web3 entrance that incubates viral trends and offers one-step crypto transfers.",
    "contractCount": 12,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c4e8357ff1995988316264_zapry%20(1).webp",
    "links": {
      "website": "https://www.zapry.net/",
      "twitter": "https://x.com/0xZapry"
    }
  },
  {
    "id": "zerion",
    "name": "Zerion",
    "category": "infrastructure",
    "description": "Build feature-rich crypto apps, wallets, protocols and supercharge your product using Zerion API!",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91be5a00e125f94a41d09_Zerion_logo.webp",
    "links": {
      "website": "https://zerion.io/api",
      "twitter": "https://x.com/zerion"
    }
  },
  {
    "id": "zerodev",
    "name": "ZeroDev",
    "category": "infrastructure",
    "description": "The most powerful smart account development platform. Build Web3 experiences without gas, confirmations, seed phrases, and bridging.",
    "contractCount": 5,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91bef84cbdc367d67b771_ZeroDev_logo.webp",
    "links": {
      "website": "https://zerodev.app",
      "twitter": "https://x.com/zerodev_app"
    }
  },
  {
    "id": "zona",
    "name": "Zona",
    "category": "defi",
    "description": "Zona is building scalable infra for composable RWA tokens. We let users mint, speculate, and earn yield on real estate Index Tokens.",
    "contractCount": 7,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c4e6ee0af49276106f1b75_zona%20logo.webp",
    "links": {
      "website": "https://www.zona.finance/",
      "twitter": "https://x.com/zona_io"
    }
  },
  {
    "id": "dfusion-ai",
    "name": "dFusion AI",
    "category": "ai",
    "description": "dFusion unlocks private and domain specific data into enriched, curated datasets - fueling accurate, next-gen AI models.",
    "contractCount": 19,
    "logo": "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68cebe8f33d4d7940f9a4dfb_dfusion%20logo%20.webp",
    "links": {
      "website": "https://www.dfusion.ai",
      "twitter": "https://x.com/dfusionai"
    }
  },
  {
    "id": "nadxbt",
    "name": "NadXBT",
    "category": "ai",
    "description": "NADXBT is an AI lab on Monad creating powerful autonomous agents with DeepSeek AI, enabling effortless AI deployment and management via $NADXBT tokens.",
    "contractCount": 20,
    "logo": "https://pbs.twimg.com/profile_images/1925020110844264451/YSXqPvRR_400x400.jpg",
    "links": {
      "website": "https://nadxbt.fun/",
      "twitter": "https://x.com/nadxbt"
    }
  }
];
