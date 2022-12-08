// https://eth-goerli.g.alchemy.com/v2/RQIQAkVij1QWtv4tXhUnk8QbkqOHpeVd

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/RQIQAkVij1QWtv4tXhUnk8QbkqOHpeVd',
      accounts: [
        '446d4364c43809f87f58b4dd10fb908d92045ba89bbf5c10ce098e8895e235a7'
      ]
    }
  }
}