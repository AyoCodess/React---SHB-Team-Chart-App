import React, { Component } from "react";
import Searchbox from "../components/Searchbox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import { people } from "../data/people";
import "../scss/containers/app.scss";
import ErrorBoundary from "../components/errorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    this.setState({ people: people });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredPeople = this.state.people.filter((people) => {
      return (
        people.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        people.title
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase())
      );
    });

    return (
      <>
        <div className="main-app tc">
          <div class="header">
            <h1 className=" app-title tc ">SHB Organisation</h1>
            <h2 className=" app-title app-title--sub tc">Find a Mentor</h2>
            <p className="app-description">
              Feel free to contact any of us if you need support or have any
              questions.
            </p>
          </div>
          <Searchbox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList people={filteredPeople} />;
            </ErrorBoundary>
          </Scroll>
        </div>
        <footer>
          <p className=" tc footer-title">
            <a
              href="https://www.stopholdingback.org"
              target="_blank"
              rel="noreferrer"
            >
              stopholdingback.org
            </a>
          </p>
        </footer>
      </>
    );
  }
}
export default App;
