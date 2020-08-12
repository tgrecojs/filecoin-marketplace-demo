module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
   compilers: {
    solc: {
      version: '^0.6.0',
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      //host: "15.165.82.162",
      port: 8545,
      network_id: "*", // Match any network id
    },
  },
};
