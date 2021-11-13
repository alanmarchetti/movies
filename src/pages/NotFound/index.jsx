import { Link } from "react-router-dom";
import "./styles.css";

const NotFound = () => {
  return (
    <div className="not-found">
      Pagina não encontrada!!!
      <Link to="/">Veja a lista de filmes!</Link>
    </div>
  );
};

export { NotFound };
