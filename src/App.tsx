import React from 'react';
import Header from './components/Header';

const App = (): React.ReactElement => {
  return (
    <div className="bg-main min-h-screen">
      <Header title="J u p i t e r"></Header>
      <main className="bg-white rounded-sm m-5">
        <div className="container mx-auto bg-grayLight rounded-sm m-3">
          <p>form here</p>
        </div>
        <div className="container mx-auto  bg-grayLight rounded-sm m-3">
          <ul className="list-disc m-2">
            <li>Una vez</li>
            <li>Le prregunte a mi gato</li>
            <li>Que cuantas patas tiene</li>
          </ul>
        </div>
        <p>
          Somebody <code>once/ToldMe.tsx</code> the world is gonna roll me.
        </p>
      </main>
      <footer className="bg-white rounded-sm m-5">
        <p>This is the footer</p>
      </footer>
    </div>
  );
};

export default App;
