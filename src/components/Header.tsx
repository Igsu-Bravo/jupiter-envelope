import React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
}

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

const Header: React.FC<IProps> = ({ children, title }) => (
  <AppHeader>
    <h1>{title}</h1>
    {children}
  </AppHeader>
);

export default Header;
