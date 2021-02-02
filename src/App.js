import React from "react";
import "./App.css";
import Row from "./components/Row/Row";
import requests from "./requests";

const App = () => {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default App;
