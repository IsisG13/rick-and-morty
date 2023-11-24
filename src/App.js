import "./App.css";
import rickMorty from "./rickMorty.png";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [RM, setRM] = useState([]);
  // const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      // .get("https://rickandmortyapi.com/api/character/?page=2", "https://rickandmortyapi.com/api/episode")
      .get("https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/episode")
      .then((response) => {
        setRM(response.data.results);
      })
      .catch((error) => {
        console.log("Erro ao achar o personagem", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={rickMorty} alt="Rick and Morty" /> <h2>Rick and Morty</h2>
      </header>
      <main>
        <div className="App-main">
          {RM.map((personagem) => (
            <div key={personagem.id}>
              <div className="posts">
                <img className="img-post" src={personagem.image} alt={personagem.name}/>
                <div className="informacoes">
                  <h3>
                    <a href={personagem.url} target="_blank">{personagem.name}</a>
                  </h3>
                  <p>
                    {personagem.status} - {personagem.species}
                  </p>

                  <h4 className="local">Lest known location: </h4>
                  <a href={personagem.location.url} target="_blank">
                    {personagem.location.name}
                  </a>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
