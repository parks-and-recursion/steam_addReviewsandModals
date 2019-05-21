import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  color: #c6d4df;
  font-size: 12px;
`;

const ControlBlock = styled.div`
  display: inline-block;
  margin-right: 30px;
`;

const ReviewControls = styled.div`
  position: relative;
  margin-top: 4px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  max-width: 772px;
`;

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: 'public',
      language: 'English',
      allowComments: true
    };
  }

  render() {
    return (
      <ReviewControls>
        <ControlBlock>
          <StyledSpan className="controlText"> Visibility :</StyledSpan>
        </ControlBlock>
        <ControlBlock>
          <StyledSpan className="controlText"> Language :</StyledSpan>
        </ControlBlock>
      </ReviewControls>
    );
  }
}
