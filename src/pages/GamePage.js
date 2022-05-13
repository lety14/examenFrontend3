import React from "react";
import Options from "../components/Options";
import Elections from "../components/Elections";
import ResetAll from "../components/ResetAll";
import History from "../components/History";
import information from "../data.json";
import totoro from "../img/totoro.gif";
import swal2 from "sweetalert2";
import "animate.css";
import styled from "styled-components";

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userHistory: [information[0]],
      currentHistory: null,
      userSelections: [],
      loading: true,
      index: 0,
    };
  }

  handlerSelectOption = (event) => {
    let option = event.currentTarget.id;
    let nextIndex = this.state.index;
    let userHistory = this.state.userHistory;
    let currentUserSelections = this.state.userSelections;
    let lastSelection =
      this.state.userSelections[this.state.userSelections.length - 1];

    if (this.state.index >= 7) {
      swal2.fire({
        title: "¡¡FELICITACIONES!!",
        text: "HAS LLEGADO AL FINAL DEL JUEGO",
        confirmButtonText: `YEAAAH!!`,
        imageUrl: "https://c.tenor.com/PDdj85iOO1sAAAAC/nyan-cat-rainbow.gif",
        showClass: { popup: "animate__animated animate__tada" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
        backdrop: `rgba(0,0,123,0.5)`,
      });
    } else {
      if (this.state.index === 0) {
        nextIndex =
          option === "A" ? this.state.index + 1 : this.state.index + 2;
      } else if (lastSelection === "B" && option === "A") {
        nextIndex = this.state.index + 1;
      } else if (lastSelection === "A" && option === "B") {
        nextIndex = this.state.index + 3;
      } else {
        nextIndex = this.state.index + 2;
      }

      currentUserSelections.push(option);
      userHistory.push(information[nextIndex]);

      this.setState({
        index: nextIndex,
        currentHistory: information[nextIndex],
        userSelections: [...currentUserSelections],
        userHistory: [...userHistory],
      });
    }
  };

  handlerSelectReset = () => {
    swal2
      .fire({
        title: "¿DESEA RESETEAR LA HISTORIA?",
        showDenyButton: true,
        confirmButtonText: `Sip! Resetear!`,
        denyButtonText: `No! Asi me gusta`,
        imageUrl: "https://c.tenor.com/YdTpw-54DXcAAAAC/pusheen-laptop.gif",
        showClass: { popup: "animate__animated animate__tada" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
        backdrop: `rgba(0,0,123,0.4)`,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal2.fire("SE RESETEO LA HISTORIA", "", "success");
          this.setState({
            userHistory: [information[0]],
            currentHistory: null,
            userSelections: [],
            indexAnterior: null,
            index: 0,
          });
        }
      });
  };

  render() {
    return (
      <Layout>
        <HistoryContainer>
          <History userHistory={this.state.userHistory} />
          <ImageGif src={totoro} alt="totoroGif" />
        </HistoryContainer>
        <OptionsContainer>
          <Options
            chooseAdventure={information[this.state.index]}
            onSelectOption={this.handlerSelectOption}
          />
          <ResetAll onSelectReset={this.handlerSelectReset} />
          <Elections selectionsList={this.state.userSelections} />
        </OptionsContainer>
      </Layout>
    );
  }
}

export default GamePage;

const Layout = styled.main`
  width: 100%;
  font-size: 12px;
  background: black;
  color: white;
  display: flex;
  flex-direction: column-reverse;
  display: grid;
  grid-template-areas:
    "options"
    "history";
  /* DESKTOP */
  @media screen and (min-width: 761px) {
    font-size: 14px;
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-template-areas: "history options";
    max-height: max-content;
    height: 100%;
    min-height: 100vh;
  }
`;
const HistoryContainer = styled.section`
  grid-area: history;
  display: flex;
  flex-direction: column;
  border: dashed 1px gray;
  padding: 10px;
  background-color: #e9e9e9;
  min-height: calc(100vh - 550px);
  height: 100%;

  /* TABLET */
  @media screen and (min-width: 351px) and (max-width: 760px) {
    min-height: calc(100vh - 520px);
    padding: 25px;
  }

  /* DESKTOP */
  @media screen and (min-width: 761px) {
    height: 100%;
    padding: 35px;
    justify-content: space-between;
  }
`;
const OptionsContainer = styled.section`
  grid-area: options;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
  width: 100%;
  height: 550px;
  justify-content: flex-start;

  /* TABLET */
  @media screen and (min-width: 351px) and (max-width: 760px) {
    height: 520px;
    padding: 25px;
  }

  /* DESKTOP */
  @media screen and (min-width: 761px) {
    padding: 35px;
  }
`;
const ImageGif = styled.img`
  margin-top: 15px;
  min-width: 150px;
  max-width: 250px;
  width: 100%;
  align-self: flex-end;
  /* TABLET */
  @media screen and (min-width: 351px) and (max-width: 760px) {
    max-width: 250px;
  }
  /* DESKTOP */
  @media screen and (min-width: 761px) {
    max-width: 300px;
  }
`;
