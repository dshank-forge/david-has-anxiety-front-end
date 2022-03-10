import {DAppProvider, ChainId} from '@usedapp/core';
import {MainBox} from './components/MainBox';
import {Header} from './components/Header';


function App() {
  return (
    <DAppProvider config={{
      networks: [ChainId.Kovan],
      notifications: {
        expirationPeriod: 1000,
        checkInterval: 1000
      }
    }}>
      <Header/>
      <MainBox/>
    </DAppProvider>
  );
}

export default App;
