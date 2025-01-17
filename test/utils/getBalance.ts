import hre from "hardhat"
import { Signer, BigNumber } from 'ethers'
import getTokenContract from './getTokenContract'

export default async function getBalance(tokenSymbol: string, address: string, signer: Signer): Promise<BigNumber> {
  if (tokenSymbol == 'ETH') {
    return await hre.ethers.provider.getBalance(address)
  } else {
    const token = await getTokenContract(tokenSymbol, signer)

    return await token.balanceOf(address)
  }
}

