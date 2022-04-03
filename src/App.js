import {DAppProvider, ChainId} from '@usedapp/core';
import {Main} from './components/Main';

function App() {
  return (
    <DAppProvider config={{
      networks: [ChainId.Kovan],
      notifications: {
        expirationPeriod: 1000,
        checkInterval: 1000
      }
    }}>
      <Main/>
    </DAppProvider>
  );
}

export default App;
