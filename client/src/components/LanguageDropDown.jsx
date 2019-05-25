import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  position: static;
`;

const DropDownList = styled.ul`
  list-style-type: none;
  line-height: 22px;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: auto;
  z-index: 900;
  overflow: auto;
  overflow-x: hidden;
  box-shadow: 0 0 5px 0 #000000;
  background: #417a9b;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-left: 7px;
`;

const DropDownListItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
`;

const DropDownListA = styled.a`
  padding: 0 10px;
  display: block;
  text-decoration: none;
  color: #e5e4dc;
  white-space: nowrap;
  &:hover {
    color: #ffffff;
    background-color: #67c1f5;
    background: -webkit-linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

export default class LanguageDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Language: ''
    };
  }

  render() {
    return (
      <SelectContainer>
        <DropDownList>
          {this.props.languages.map((language, key) => (
            <DropDownListItem key={key}>
              <DropDownListA
                onClick={() => this.props.updateLanguage(language)}
                key={key}
              >
                {language}
              </DropDownListA>
            </DropDownListItem>
          ))}
        </DropDownList>
      </SelectContainer>
    );
  }
}
