import React from 'react';
import styled from 'styled-components';

const LeftReviewControls = styled.div`
  float: left;
  margin-bottom: 8px;
  margin-right: 8px;
  display: block;
`;

const Recommended = styled.div`
  display: block;
  margin-bottom: 4px;
  font-family: Arial, Helvetica, sans-serif;
  color: #c6d4df;
  font-size: 12px;
`;

const VoteControls = styled.div`
  display: block;
  color: #acb2b8;
  font-size: 13px;
  font-family: 'Motiva Sans', Sans-serif;
  font-weight: normal;
`;

const A = styled.a`
  margin-right: 5px;
  border-radius: 2px;
  border: none;
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none !important;
  color: #67c1f5 !important;
  background: rgba(103, 193, 245, 0.2);
  &:hover {
    	color: #ffffff;
	border-radius: 1px;
  background: -webkit-linear-gradient( -60deg, #67c1f5 5%,#417a9b 95%););
  background: linear-gradient( -60deg, #67c1f5 5%,#417a9b 95%););}
  }
`;

const Span = styled.span`
  padding: 0 15px;
  font-size: 12px;
  line-height: 30px;
  border-radius: 2px;
  display: block;
  background: transparent;
  &:hover {
    color: #ffffff;
  }
`;

const IconThumbsUp = styled.i`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 2px;
  margin: 0 0px;
  background: url(https://steamstore-a.akamaihd.net/public/shared/images/buttons/icons_18.png?v=3);
  vertical-align: text-top;
  background-position: 0px 0px;
  font-style: italic;
  &:hover {
    background-position: -72px 0px;
  }
`;

const IconThumbsDown = styled.i`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 0px;
  background: url(https://steamstore-a.akamaihd.net/public/shared/images/buttons/icons_18.png?v=3);
  vertical-align: text-top;
  background-position: -18px 0px;
  font-style: italic;
  &:hover {
    background-position: -90px 0px;
  }
`;

export default class LeftControls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LeftReviewControls>
        <Recommended>Do you recommend this game?</Recommended>
        <VoteControls>
          <A>
            <Span>
              <IconThumbsUp />
              Yes
            </Span>
          </A>
          <A>
            <Span>
              <IconThumbsDown />
              No
            </Span>
          </A>
        </VoteControls>
      </LeftReviewControls>
    );
  }
}
