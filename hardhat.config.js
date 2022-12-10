require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.2",
  paths: {
    sources: "./contracts",
    artifacts: "./frontend/nft-visualizer/src/artifacts"
  },

  //definindo rede
  networks:{
    hardhat:{
      chainId: 1337
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
