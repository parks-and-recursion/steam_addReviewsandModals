import React from 'react';
import Title from './Title.jsx';
import styled from 'styled-components';

const Background = styled.div`
  background: #1b2838;
  color: #acb2b8;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Background>
        <Title />
      </Background>
    );
  }
}

export default App;
