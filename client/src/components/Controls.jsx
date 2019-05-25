import React from 'react';
import styled from 'styled-components';
import LanguageDropDown from './LanguageDropDown.jsx';

const SelectContainer = styled.div`
  position: static;
  display: block;
`;

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
  display: block;
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
    cursor: pointer;
  }
`;

const AllowComments = styled.div`
  display: inline-block;
  margin-right: 30px;
`;
const DropDownContainer = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  margin-top: -3px;
  background: rgba(103, 193, 245, 0.1);
  border-radius: 3px;
  &:hover {
    color: #ffffff;
    border-radius: 3px;
    background-color: #67c1f5;
    cursor: pointer;
  }
`;

const DropDownA = styled.a`
  background: transparent;
  color: #ebebeb;
  text-decoration: none;
  line-height: 19px;
  padding-top: 3px;
  white-space: nowrap;
  position: relative;
  border: 0;
  border-radius: 3px;
  padding: 0 30px 0 8px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  &:after {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url(https://store.steampowered.com/public/images/v6/ico/ico_arrow_dn_for_select.png)
      no-repeat left center;
    content: '';
  }
`;

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: ['Public', 'Friends Only'],
      language: 'English',
      languages: ['English', 'Chinese', 'Russian', 'Hamburger'],
      allowComments: true,
      showMenuPublic: false,
      showMenuLanguage: false
    };
    this.handleVisibilityDrop = this.handleVisibilityDrop.bind(this);
    this.handleLanguageDrop = this.handleLanguageDrop.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  handleVisibilityDrop(e) {
    e.preventDefault();
    this.setState({
      showMenuPublic: true
    });
  }

  handleLanguageDrop(e) {
    e.preventDefault();
    const showMenuLanguage = !this.state.showMenuLanguage;
    this.setState({ showMenuLanguage });
  }

  onBlur(event) {
    console.log('blur');
    if (!event.currentTarget.contains(event.relatedTarget)) {
      const showMenuLanguage = false;
      this.setState({showMenuLanguage});
    }
  }

  updateLanguage(language) {
    this.setState({language});
  }

  render() {
  
    return (
      <ReviewControls>
        <ControlBlock>
          <StyledSpan className="controlText"> Visibility :</StyledSpan>{' '}
          &nbsp;
          <DropDownContainer onClick={e => this.handleVisibilityDrop(e)}>
            <DropDownA>Public</DropDownA>
          </DropDownContainer>
        </ControlBlock>
        <ControlBlock>
          <StyledSpan className="controlText"> Language :</StyledSpan> &nbsp;
          <DropDownContainer onMouseEnter={e => this.handleLanguageDrop(e)} onMouseLeave={e => this.handleLanguageDrop(e)} onBlur={e => console.log(e)}>
            <DropDownA>{this.state.language}</DropDownA>
            {
              this.state.showMenuLanguage ? <LanguageDropDown updateLanguage={this.updateLanguage} languages={this.state.languages}/> : null
            }
          </DropDownContainer>
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
