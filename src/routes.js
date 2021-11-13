import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Favorites } from "./pages/Favorites";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={Movies} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
