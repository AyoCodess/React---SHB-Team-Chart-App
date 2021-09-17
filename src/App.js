import React, { Component } from "react";
import Searchbox from "./Searchbox";
import CardList from "./CardList";
import { people } from "./people";
import Fragment from "react";
import "./scss/app.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: people,
      searchfield: "",
    };
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
          <Searchbox searchChange={this.onSearchChange} />
          <CardList people={filteredPeople} />;
        </div>
      </>
    );
  }
}
export default App;
