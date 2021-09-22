const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {


  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/995836361fcf4f31a3aad338627d4453`),
      network_id: 4,
      gas: 5500000,
      skipDryRun:true,
    },
    // mainnet: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/995836361fcf4f31a3aad338627d4453`),
    //   network_id: 1,
    //   gas: 1070019,
    //   // networkCheckTimeout:500,
    //   // blockTimeout:400,
    //   skipDryRun:true,
    // },
    mainnet: {
    provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed.binance.org/`),
    network_id: 56,       // Ropsten's id
    gas: 800000,        // Ropsten has a lower block limit than mainnet
    confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
// 0xe0C7d7Ad42c9b3ddf9E35743eb147AAf7960456B -> token
// 0xbb97C18D7AF0Aa33A22d79CFe5A80e9eA4CAbb5a -> contract