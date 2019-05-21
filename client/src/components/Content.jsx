import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  position: absolute;
  border: 1px solid #233c51;
  border-radius: 3px;
  height: 132px;
  max-width: 800px;
  background-color: #222b35;
  color: #d6d7d8;
  padding: 10px 11px;
  font-size: 13px;
  font-family: 'Motiva Sans', Sans-serif;
  font-weight: normal;
  -webkit-box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.5);
  -webkit-appearance: textarea;
  -webkit-rtl-ordering: logical;
  flex-direction: column;
  resize: auto;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-writing-mode: horizontal-tb !important;
  font: 400 11px system-ui;
`;

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextArea
        className="input_box"
        id="game_recommendation"
        maxLength="8000"
      />
    );
  }
}

export default Content;
