import "@nomiclabs/hardhat-ethers";
import '@nomiclabs/hardhat-etherscan';
//import { config, } from "dotenv";
import {task, HardhatUserConfig } from "hardhat/config";
import * as cfg from './config'

task('accounts', 'Prints the list of accounts', async (_, { ethers }) => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(await account.getAddress())
  }
})


const config: HardhatUserConfig = {
  defaultNetwork: 'localhost', // Note: Network needs to be started via `yarn start-chain` with prior setup of .env variables.
  networks: cfg.networks,
  etherscan: cfg.etherscan,

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
