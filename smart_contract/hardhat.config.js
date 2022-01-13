// https://eth-ropsten.alchemyapi.io/v2/RLMCZLXwTRiP7u78C1S1NclzqoCU7Ug5

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/RLMCZLXwTRiP7u78C1S1NclzqoCU7Ug5",
      accounts: [ "b03dfdc985bea7e2b3f7f40a01337c7be69b2780fc536e724a7bc294f99e30d0" ],
    }
  },
};
