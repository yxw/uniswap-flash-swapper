import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";


const config: HardhatUserConfig = {
  defaultNetwork: 'localhost', // Note: Network needs to be started via `yarn start-chain` with prior setup of .env variables.
  networks: {
    localhost: {
      url: 'http://localhost:8545',
      gas: 9000000,
      gasPrice: 20e9,
      timeout: 99999999
    }
  },
  solidity: {
    version: "0.5.17"
  },
  paths: {
    artifacts: './artifacts'
  },
  mocha: {
    timeout: 99999999
  }
}

export default config
