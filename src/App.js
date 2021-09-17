import React, { Component } from "react";
import Searchbox from "./Searchbox";
import CardList from "./CardList";
import { people } from "./people";
import Fragment from "react";
import "./scss/app.scss";
import Scroll from "./Scroll";

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
          <h1 className=" app-title tc f1">SHB Organization</h1>
          <p className="app-description">
            Search by staff member name or title.
          </p>
          <Searchbox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList people={filteredPeople} />;
          </Scroll>
        </div>
        <footer>
          <p className=" tc footer-title">
            <a href="https://www.stopholdingback.org">stopholdingback.org</a>
          </p>
        </footer>
      </>
    );
  }
}
export default App;
