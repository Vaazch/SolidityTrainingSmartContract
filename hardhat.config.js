require("@nomiclabs/hardhat-waffle");
// Import and configure dotenv
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      // This value will be replaced on runtime
      url: process.env.DEV_AlCH_URL,
      accounts: [process.env.DEV_RINKEBY_ACC_KEY],
    },
  },
};