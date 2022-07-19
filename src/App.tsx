import {
  Container
} from '@chakra-ui/react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import { Home } from './pages/Home';
function App() {

  function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Container>
        <Home></Home>
      </Container>
    </Web3ReactProvider>
  );
}

export default App;
