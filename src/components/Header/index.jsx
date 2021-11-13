import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        MyMovies
      </Link>
      <Link to="/favorites" className="favorites">
        Filmes favoritos
      </Link>
    </header>
  );
};

export { Header };
