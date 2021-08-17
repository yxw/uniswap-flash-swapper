import { config } from 'dotenv'
config()

export function getTokenAddress(tokenSymbol: string): string {
  if (tokenSymbol === 'ETH') {
    return '0x0000000000000000000000000000000000000000'
  }

  const network = getNetwork()
  switch (network) {
    case 'mainnet':
      switch (tokenSymbol) {
        case 'DAI':
          return '0x6B175474E89094C44Da98b954EedeAC495271d0F'
        case 'USDC':
          return '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
        case 'TUSD':
          return '0x0000000000085d4780B73119b644AE5ecd22b376'
        case 'WETH':
          return '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
        case 'KNC':
          return '0xdd974d5c2e2928dea5f71b9825b8b646686bd200'
        default:
          throw new Error(`Token address not known for token ${tokenSymbol}, in network ${network}.`)
      }
    case 'rinkeby':
      switch (tokenSymbol) {
        case 'DAI':
          return '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735'
        // case 'USDC':
        //   return ''
        // case 'TUSD':
        //   return ''
        case 'WETH':
          return '0xc778417E063141139Fce010982780140Aa0cD5Ab'
        // case 'KNC':
        //   return ''
        default:
          throw new Error(`Token address not known for token ${tokenSymbol}, in network ${network}.`)
      }
    case 'kovan':
      switch (tokenSymbol) {
        case 'DAI':
          return '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa'
        case 'WETH':
          return '0xd0a1e359811322d97991e03f863a0c30c2cf029c'
        case 'USDC':
          return '0x0d757FbF1b0743Db0e6e02AA2A8f18D4c695a1F9'
        default:
          throw new Error(`Token address not known for token ${tokenSymbol}, in network ${network}.`)
      }
    default:
      throw new Error(`Token addresses are not known for network ${network}.`)
  }
}

export function getUniswapFactoryAddress(): string {
  return '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f' // Same for all networks.
}

export function getSignerAddress(): string {
  const network = getNetwork().toUpperCase()

  const envSignerAddress = process.env[`SIGNER_ADDRESS_${network}`]
  if (!envSignerAddress) {
    throw new Error(`Environment variable SIGNER_ADDRESS_${network} must be set in .env. E.g. SIGNER_ADDRESS_${network}=0xD3E52099a6a48F132Cb23b1364B7dEE212d862F6`)
  }

  return envSignerAddress
}

function getNetwork(): string {
  const network = process.env.NETWORK
  if (!network) {
    throw new Error(`Environment variable NETWORK must be provided. Try adding it in an .env file.`)
  }

  return network
}
