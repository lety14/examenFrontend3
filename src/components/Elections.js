import React from "react";
import "animate.css";
import styled from "styled-components";

class Elections extends React.Component {
  render() {
    const index = this.props.selectionsList.length - 1;
    const prevElection = this.props.selectionsList[index];
    const listRender = this.props.selectionsList
      .slice(0, -1)
      .map((election, index) => (
        <ElectionHistoryItem key={`selection_${index}`}>
          {election}
        </ElectionHistoryItem>
      ));
    return (
      <ElectionHistory>
        <p>
          La eleccion anterior fue:{" "}
          <span key={`prevElection_${index}`}>{prevElection}</span>
        </p>
        <p>Historial de option elegidas:</p> <ul>{listRender}</ul>
      </ElectionHistory>
    );
  }
}
export default Elections;

const ElectionHistory = styled.div`
  color: rgb(234, 234, 234);
  padding-bottom: 20px;
  line-height: 30px;
`;
const ElectionHistoryItem = styled.li`
  display: inline-block;
  padding: 0px 8px;
  &:first-child {
    padding-left: 0px;
  }
`;
