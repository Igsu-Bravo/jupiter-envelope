import React from 'react';

interface IProps {
  title: string;
}

/* const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`; */

const Header: React.FC<IProps> = ({ children, title }) => (
  <header>
    <h1 className="p-6 text-6xl text-white items-center justify-center">
      {title}
    </h1>
    {children}
  </header>
);

export default Header;
