import React from 'react';
import { Header, Footer } from './components';
import SongForm from './components/SongForm';

const App = (): React.ReactElement => {
  return (
    <div className="bg-main min-h-screen">
      <Header title="J u p i t e r"></Header>
      <main className="bg-grayLight rounded-sm m-5 py-3 ">
        <div className="flex flex-wrap">
          <div className="flex-auto bg-white rounded-sm m-3 p-5">
            <SongForm />
          </div>
          <div className="flex-auto rounded-sm m-3 p-5">
            <div className="justify-self-center">
              <p>list here</p>
              <ul className="list-disc m-2">
                <li>Una vez</li>
                <li>Le prregunte a mi gato</li>
                <li>Que cuantas patas tiene</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
