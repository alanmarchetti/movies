import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Container } from "../../components/Container";

import "./styles.css";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myMovies = localStorage.getItem("MOVIES");
    setMovies(JSON.parse(myMovies) || []);
  }, []);

  const handleRemove = (id) => {
    let fillMovies = movies.filter((movie) => {
      return movie.id !== id;
    });

    setMovies(fillMovies);
    localStorage.setItem("MOVIES", JSON.stringify(fillMovies));
    toast.success("Filme removido com sucesso!");
  };

  return (
    <Container>
      <div className="my-movies">
        <h1>Meus Filmes</h1>

        {movies.length === 0 && (
          <span>
            Você ainda não possui nenhum filme salvo{" "}
            <span className="bad">:(</span>{" "}
          </span>
        )}

        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id} className="lia">
                <span>{movie.nome}</span>

                <div className="op">
                  <Link to={`/movie/${movie.id}`} className="details">
                    Ver detalhes
                  </Link>
                  <button
                    onClick={() => handleRemove(movie.id)}
                    className="remove"
                  >
                    Remover
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export { Favorites };
