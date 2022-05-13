import React from "react";
import styled from "styled-components";

class ResetAll extends React.Component {
  render() {
    return (
      <ResetButton onClick={this.props.onSelectReset}>RESETEAR</ResetButton>
    );
  }
}
export default ResetAll;

const ResetButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  border: 3px solid #dcdcdc;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0px 1px 0px #ffffff;
  margin: 5px 12px 10px 0px;
  padding: 10px 18px;
  width: fit-content;
  background: linear-gradient(to bottom, #d1d0d0e1 5%, #e9e9e9 100%);
  background: rgb(228, 224, 224);
  &:hover {
    background-color: #e9e9e9;
    border: 3px solid rgb(136, 98, 226);
  }
  &:active {
    color: rgb(136, 98, 226);
  }
`;
