// global.d.ts
interface Window {
    ethereum: any; // You can be more specific with the type if needed.
  }

// global.d.ts
interface EthereumProvider {
    isMetaMask?: boolean;
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (event: string, handler: (...args: any[]) => void) => void;
  }
  
  interface Window {
    ethereum: EthereumProvider;
  }
  