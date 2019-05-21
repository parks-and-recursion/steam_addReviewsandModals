import React from 'react';
import styled from 'styled-components';

const Area = styled.div`
  float: left;
  position: relative;
  margin-right: 12px;
`;

const Btn = styled.button`
  float: left;
  position: relative;
  margin-right: 12px;
  border-radius: 2px;
  border: none;
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none !important;
  color: #2b5066 !important;
  background: rgba(193, 228, 249, 1);
  background: -webkit-linear-gradient(
    top,
    rgba(193, 228, 249, 1) 5%,
    rgba(148, 183, 202, 1) 95%
  );
  background: linear-gradient(
    to bottom,
    rgba(193, 228, 249, 1) 5%,
    rgba(148, 183, 202, 1) 95%
  );
  border-radius: 4px;
  border: 2px solid #17202f;
`;

const Span = styled.span`
  padding: 0 15px;
  font-size: 15px;
  line-height: 30px;
  display: block;
  background: transparent;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.1);
`;

const GameAreaPlayStats = styled.div`
  padding-top: 16px;
`;

const A = styled.a`
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none !important;
  color: #2b5066 !important;
  &:hover {
    text-decoration: none !important;
    color: #ffffff !important;

    background: rgba(102, 192, 244, 1);
    background: -webkit - linear -
      gradient(top, rgba(102, 192, 244, 1) 5 %, rgba(47, 137, 188, 1) 95 %);
    background: linear -
      gradient(
        to bottom,
        rgba(102, 192, 244, 1) 5 %,
        rgba(47, 137, 188, 1) 95 %
      );
  }
`;

const AlreadyOwnedBtns = () => {
  return (
    <GameAreaPlayStats>
      <Area>
        <Btn className="game_area_already_owned_btn">
          <A
            className="btnv6_lightblue_blue btnv6_border_2px btn_medium"
            href="https://store.steampowered.com/about/"
          >
            <Span>Install Steam </Span>
          </A>
        </Btn>
        <Btn className="game_area_already_owned_btn">
          <A
            className="btnv6_lightblue_blue btnv6_border_2px btn_medium"
            href="steam://run/570"
          >
            <Span>Play Now </Span>
          </A>
        </Btn>
      </Area>
    </GameAreaPlayStats>
  );
};
export default AlreadyOwnedBtns;

{
  // <div class="game_area_already_owned_btn">
  //   <a class="btnv6_lightblue_blue btnv6_border_2px btn_medium" href="steam://run/230410">
  //     <span>
  //       Play Now										</span>
  //   </a>
  // </div>
}
