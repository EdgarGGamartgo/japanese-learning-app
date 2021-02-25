import React from 'react';
import { Header } from './layouts/Header'
import { HeaderNav, Title, ButtonComponent } from './components'
import { Heading } from './styles/Heading'


function App() {
  return (
    //@ts-ignore
    <Header>
      <Heading active={true}>
        <p>HELLO REACT!</p>
      </Heading>
      <ButtonComponent/>
    </Header>
  );
}

export default App;
