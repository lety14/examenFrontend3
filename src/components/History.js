import React from "react";
import styled from "styled-components";

class History extends React.Component {
  render() {
    const history = this.props.userHistory.map((history) => (
      <TextHistory
        className="animate__animated animate__slideInLeft"
        key={`userHistory_${history.id}`}
      >
        {history.text}
      </TextHistory>
    ));
    return (
      <HistoryContainer>
        <div>{history}</div>
      </HistoryContainer>
    );
  }
}
export default History;

const HistoryContainer = styled.div`
  min-height: 150px;
  width: 100%;
  display: flex;
  color: rgb(0, 0, 0);
`;
const TextHistory = styled.div`
  margin-bottom: 20px;
`;
