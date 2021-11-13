import { useParams, useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container } from "../../components/Container";

import { toast } from "react-toastify";
import api from "../../services/api";

import "./styles.css";

const Movies = () => {
  const { id } = useParams();
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        history.replace("/");
        return;
      }
      setMovies(response.data);
      setLoading(false);
    }
    loadMovie();

    return () => {};
  }, [history, id]);

  if (loading) {
    return <div className="movie-info"> Carregando filme... </div>;
  }

  function saveMovie() {
    const myListMovies = localStorage.getItem("MOVIES");
    let saveMovies = JSON.parse(myListMovies) || [];

    const hasMovie = saveMovies.some((movie) => movie.id === movies.id);

    if (hasMovie) {
      toast.info("Filme já esta nos seus favoritos!");
      return;
    }

    saveMovies.push(movies);
    localStorage.setItem("MOVIES", JSON.stringify(saveMovies));
    toast.success("Filme salvo com sucesso!");
  }

  return (
    <Container>
      <div className="movie-info">
        <h1>{movies.nome}</h1>
        <img src={movies.foto} alt={movies.nome} />
        <h3> Sinopse</h3>
        <p>{movies.sinopse}</p>

        <div className="buttons">
          <button onClick={saveMovie}>salvar favoritos</button>
          <button>
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://youtube.com/results?search_query=${movies.nome} Trailer`}
            >
              Trailer
            </a>
          </button>
          <button>
            <Link to="/">voltar</Link>
          </button>
        </div>
      </div>
    </Container>
  );
};

export { Movies };
