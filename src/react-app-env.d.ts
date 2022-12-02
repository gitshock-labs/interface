/// <reference types="react-scripts" />

declare module '@metamask/jazzicon' {
  // eslint-disable-next-line import/no-unused-modules
  export default function (diameter: number, seed: number): HTMLElement
}

interface Window {
  // walletLinkExtension is injected by the Coinbase Wallet extension
  walletLinkExtension?: any
  ethereum?: {
    // value that is populated and returns true by the Coinbase Wallet mobile dapp browser
    isCoinbaseWallet?: true
    isMetaMask?: true
    autoRefreshOnNetworkChange?: boolean
  }
  web3?: Record<string, unknown>
}

declare module 'content-hash' {
  declare function decode(x: string): string
  declare function getCodec(x: string): string
}

declare module 'multihashes' {
  declare function decode(buff: Uint8Array): { code: number; name: string; length: number; digest: Uint8Array }
  declare function toB58String(hash: Uint8Array): string
}

declare module 'babel-plugin-relay/macro' {
  // eslint-disable-next-line import/no-unused-modules
  export { graphql as default } from 'react-relay'
}
