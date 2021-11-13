import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { Container } from '../../components/Container';

import "./styles.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    const response = await api.get("r-api/?api=filmes");
    setMovies(response.data);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <Container>
      <div className="movies-list">
        {movies.map((movie) => (
          <article key={movie.id}>
            <strong>{movie.nome}</strong>
            <img src={movie.foto} alt={movie.nome} />
            <Link to={`/movie/${movie.id}`} className="view">Visualizar</Link>
          </article>
        ))}
      </div>
    </Container>


  );
};

export { Home };
