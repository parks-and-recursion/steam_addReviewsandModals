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
    text-decoration: none !important;
    color: #fff !important;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
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
`;

const HoverThumbsUp = styled.i`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 0px;
  background: url(https://steamstore-a.akamaihd.net/public/shared/images/buttons/icons_18.png?v=3);
  vertical-align: text-top;
  background-position: -72px 0px;
  font-style: italic;
`;

const HoverThumbsDown = styled.i`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 0px;
  background: url(https://steamstore-a.akamaihd.net/public/shared/images/buttons/icons_18.png?v=3);
  vertical-align: text-top;
  background-position: -90px 0px;
  font-style: italic;
`;

const ClickedSpan = styled.span`
  padding: 0 15px;
  font-size: 12px;
  line-height: 30px;
  border-radius: 2px;
  display: block;
  background: transparent;
  color: #ffffff;
`;

const ClickThumbsUp = styled.a`
  margin-right: 5px;
  border-radius: 2px;
  border: none;
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none !important;
  color: #fff !important;
  background: rgba(103, 193, 245, 0.6);
`;

const ClickedUp = styled.i`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 0px;
  background: url(https://steamstore-a.akamaihd.net/public/shared/images/buttons/icons_18.png?v=3);
  vertical-align: text-top;
  background-position: -36px 0px;
  font-style: italic;
`;

// BUTTON CLICKED (DOWN)
// &:active {
//   background-position: -54px 0px;
// }
// BUTTON CLICKED (UP)
// &:active {
//   background-position: -36px 0px;
// }

export default class LeftControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickUp: false,
      hoverUp: false,
      clickDown: false,
      hoverDown: false
    };
    this.activeStateUp = this.activeStateUp.bind(this);
    this.activeStateDown = this.activeStateDown.bind(this);
    this.handleHoverUp = this.handleHoverUp.bind(this);
    this.handleHoverDown = this.handleHoverDown.bind(this);
    this.handleClickUp = this.handleClickUp.bind(this);
  }

  activeStateUp(e) {
    e.preventDefault();
    this.setState({
      clickUp: true
    });
  }

  activeStateDown(e) {
    e.preventDefault();
    this.setState({
      clickDown: true
    });
  }

  handleHoverUp() {
    this.setState({
      hoverUp: true
    });
  }

  handleHoverLeaveUp() {
    this.setState({
      hoverUp: false
    });
  }

  handleHoverDown() {
    this.setState({
      hoverDown: true
    });
  }

  handleHoverLeaveDown() {
    this.setState({
      hoverDown: false
    });
  }

  handleClickUp(e) {
    e.preventDefault();
    this.setState({
      clickUp: true,
      clickDown: false,
      hoverUp: false
    });
  }

  handleClickDown() {
    this.setState({
      clickUp: false,
      clickDown: true,
      hoverDown: false
    });
  }

  render() {
    if (
      this.state.hoverUp === false &&
      this.state.hoverDown === false &&
      this.state.clickUp === false &&
      this.state.clickDown === false
    ) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <A value="thumbsUp" onMouseEnter={() => this.handleHoverUp()}>
              <Span>
                <IconThumbsUp />
                Yes
              </Span>
            </A>
            <A value="thumbsDown" onMouseEnter={() => this.handleHoverDown()}>
              <Span>
                <IconThumbsDown />
                No
              </Span>
            </A>
          </VoteControls>
        </LeftReviewControls>
      );
    } else if (this.state.hoverUp === true) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <A
              value="thumbsUp"
              onMouseLeave={() => this.handleHoverLeaveUp()}
              onClick={e => this.handleClickUp(e)}
            >
              <Span>
                <HoverThumbsUp />
                Yes
              </Span>
            </A>
            <A value="thumbsDown">
              <Span>
                <IconThumbsDown />
                No
              </Span>
            </A>
          </VoteControls>
        </LeftReviewControls>
      );
    } else if (this.state.hoverDown === true && this.state.clickUp === false) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <A value="thumbsUp" onMouseEnter={() => this.handleHoverUp()}>
              <Span>
                <IconThumbsUp />
                Yes
              </Span>
            </A>
            <A
              value="thumbsDown"
              onMouseLeave={() => this.handleHoverLeaveDown()}
            >
              <Span>
                <HoverThumbsDown />
                No
              </Span>
            </A>
          </VoteControls>
        </LeftReviewControls>
      );
    } else if (this.state.clickUp === true && this.state.hoverDown === false) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <ClickThumbsUp value="thumbsUp">
              <ClickedSpan>
                <ClickedUp />
                Yes
              </ClickedSpan>
            </ClickThumbsUp>
            <A value="thumbsDown" onMouseEnter={() => this.handleHoverDown()}>
              <Span>
                <IconThumbsDown />
                No
              </Span>
            </A>
          </VoteControls>
        </LeftReviewControls>
      );
    } else if (this.state.clickUp === true && this.state.hoverDown === true) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <ClickThumbsUp value="thumbsUp">
              <ClickedSpan>
                <ClickedUp />
                Yes
              </ClickedSpan>
            </ClickThumbsUp>
            <A
              value="thumbsDown"
              onMouseLeave={() => this.handleHoverLeaveDown()}
            >
              <Span>
                <HoverThumbsDown />
                No
              </Span>
            </A>
          </VoteControls>
        </LeftReviewControls>
      );
    }
  }
}
