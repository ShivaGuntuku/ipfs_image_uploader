module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // This file Used for Mac, Linux Users

  networks: {
    development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*" // for any network Id
    }
  }
};
