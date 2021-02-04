import "./App.css";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import Row from "./components/Row/Row";
import requests from "./requsets";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        id="0"
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row id="1" title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row id="2" title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row
        id="3"
        title="Actions Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row id="4" title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row id="5" title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row
        id="6"
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        id="7"
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
