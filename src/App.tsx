import React from 'react';
import Header from './components/Header';

const App = (): React.ReactElement => {
  return (
    <main>
      <Header title="Jupiter">
        <p className="p-6 items-center justify-center">
          Somebody <code>once/ToldMe.tsx</code> the world is gonna roll me.
        </p>
      </Header>
    </main>
  );
};

export default App;
