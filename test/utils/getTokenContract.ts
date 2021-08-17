import hre from "hardhat"
import * as addresses from '../addresses'
import { Signer, Contract } from 'ethers'

export default function getTokenContract(tokenSymbol: string, signer: Signer): Promise<Contract> {
  const tokenAddress = addresses.getTokenAddress(tokenSymbol)

  const tokenContract = hre.ethers.getContractAt(
    'IERC20',
    tokenAddress,
    signer
  )

  return tokenContract
}

