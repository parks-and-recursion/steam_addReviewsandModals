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
  display: inline-block;
  position: relative;
  margin-top: 4px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  max-width: 772px;
  font-family: Arial, Helvetica, sans-serif;
  color: #c6d4df;
  font-size: 12px;
`;

const FormattingHelp = styled.div`
  padding: 4px;
  float: right;
  margin-right: 0px;
  &:hover {
    text-decoration: none;
    color: #66c0f4;
  }
`;

const AllowComments = styled.div`
  display: inline-block;
  margin-right: 30px;
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
          <label> DROP DOWN BOX HERE LOL</label>
        </ControlBlock>
        <ControlBlock>
          <StyledSpan className="controlText"> Language :</StyledSpan>
          <label> DROP DOWN BOX HERE LOL</label>
        </ControlBlock>
        <AllowComments>
          <input type="checkbox" id="EnableReviewComments" />
          <label id="EnableReviewComments">Allow Comments</label>
        </AllowComments>
        <FormattingHelp>Formatting Help</FormattingHelp>
      </ReviewControls>
    );
  }
}
