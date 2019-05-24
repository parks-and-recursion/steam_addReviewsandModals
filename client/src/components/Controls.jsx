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
  }
`;

const DropDownA = styled.a`
  background: transparent;
  color: #ebebeb;
  text-decoration: none;
  line-height: 19px;
  padding-top: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
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
      visibility: 'public',
      language: 'English',
      allowComments: true,
      showMenu: false
    };
  }

  render() {
    return (
      <ReviewControls>
        <ControlBlock>
          <StyledSpan className="controlText"> Visibility :</StyledSpan> &nbsp;
          <DropDownContainer>
            <DropDownA>Public</DropDownA>
          </DropDownContainer>
        </ControlBlock>
        <ControlBlock>
          <StyledSpan className="controlText"> Language :</StyledSpan> &nbsp;
          <DropDownContainer>
            <DropDownA>English</DropDownA>
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
