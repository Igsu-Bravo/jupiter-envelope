import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';

const MainApp = styled.div`
  text-align: center;
`;

function App() {
  return (
    <MainApp>
      <Header title="Jupiter">
        <p>
          Somebody <code>once/ToldMe.tsx</code> the world is gonna roll me.
        </p>
      </Header>
    </MainApp>
  );
}

export default App;
