import './App.css';
import Row from './components/Row';
import requests from './apis';
import Nav from './components/Nav';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
