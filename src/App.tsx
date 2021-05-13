import React from 'react';
import styled from 'styled-components';

const MainApp = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <MainApp>
      <AppHeader>
        <p>
          Somebody <code>once/ToldMe.tsx</code> the world is gonna roll me.
        </p>
      </AppHeader>
    </MainApp>
  );
}

export default App;
