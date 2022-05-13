import React from "react";
import "animate.css";
import LoadingPage from "./pages/LoadinPage";
import GamePage from "./pages/GamePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
  }

  render() {
    return <>{this.state.loading ? <LoadingPage /> : <GamePage />}</>;
  }
}

export default App;
