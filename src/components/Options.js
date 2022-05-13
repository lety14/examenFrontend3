import React from "react";
import "animate.css";
import styled from "styled-components";

class Options extends React.Component {
  render() {
    return (
      <>
        <OptionHistory key={`text_${this.props.chooseAdventure.id}`}>
          {this.props.chooseAdventure.text}
        </OptionHistory>
        <div>
          <Option>
            <Button
              key={`option_${this.props.chooseAdventure.id}_a`}
              id="A"
              onClick={this.props.onSelectOption}
              className="buttons"
            >
              A
            </Button>
            <span>{this.props.chooseAdventure.option.a}</span>
          </Option>
          <Option>
            <Button
              key={`option_${this.props.chooseAdventure.id}_b`}
              id="B"
              onClick={this.props.onSelectOption}
              className="buttons"
            >
              B
            </Button>
            <span>{this.props.chooseAdventure.option.b}</span>
          </Option>
        </div>
      </>
    );
  }
}
export default Options;

const Option = styled.div`
  display: flex;
  align-items: center;
`;
const OptionHistory = styled.p`
  height: 160px;
  flex-shrink: 0;
  /* TABLET */
  @media screen and (min-width: 351px) and (max-width: 760px) {
    height: 140px;
  }
`;
const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #d1d0d0e1 5%, #e9e9e9 100%);
  background-color: #f9f9f9;
  border: 3px solid #dcdcdc;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 6px 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  margin: 5px 12px 10px 0px;
  &:hover {
    background: linear-gradient(to bottom, #e9e9e9 20%, #f9f9f9 100%);
    background-color: #e9e9e9;
    border: 3px solid rgb(136, 98, 226);
  }
  &:active {
    position: relative;
    top: 1.5px;
    background: rgb(194, 178, 231);
  }
`;
