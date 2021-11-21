import React from 'react';
import { Header, Footer } from './components';
import { SongsUI } from 'containers';

const App = (): React.ReactElement => {
  return (
    <div className="bg-main min-h-screen">
      <Header title="J u p i t e r"></Header>
      <SongsUI />
      <Footer />
    </div>
  );
};

export default App;
