import React, { useState, useMemo } from "react";
import Searchbox from "../components/Searchbox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import { people } from "../data/people";
import "../scss/containers/app.scss";
import ErrorBoundary from "../components/errorBoundary";

const App = () => {
  const [searchField, setSearchField] = useState("");

  const filteredPeople = useMemo(
    () =>
      people.filter((people) => {
        return (
          people.name.toLowerCase().includes(searchField.toLowerCase()) ||
          people.title.toLowerCase().includes(searchField.toLowerCase())
        );
      }),
    [searchField]
  );

  return (
    <>
      <div className="main-app tc">
        <div className="header">
          <h1 className=" app-title tc ">SHB Organisation</h1>
          <h2 className=" app-title app-title--sub tc">Find a Mentor</h2>
          <p className="app-description">
            Feel free to contact any of us if you need support or have any
            questions.
          </p>
        </div>
        <ErrorBoundary>
          <Searchbox searchField={searchField} searchChange={setSearchField} />
          <Scroll>
            <CardList people={filteredPeople} />;
          </Scroll>
        </ErrorBoundary>
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
      </div>
    </>
  );
};

export default App;
