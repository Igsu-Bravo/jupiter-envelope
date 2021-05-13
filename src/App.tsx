import React from 'react';

import Header from './components/Header';

const App = (): React.ReactElement => {
  return (
    <main>
      <Header title="Jupiter">
        <p>
          Somebody <code>once/ToldMe.tsx</code> the world is gonna roll me.
        </p>
      </Header>
    </main>
  );
};

export default App;
