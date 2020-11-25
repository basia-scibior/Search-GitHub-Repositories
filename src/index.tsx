import * as ReactDOM from "react-dom";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SearchPage } from "./page/SearchPage/SearchPage";
import { DetailsPage } from "./page/DetailsPage/DetailsPage";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/details/:ownerName/:repoName" component={DetailsPage} />
      <Route path="/" component={SearchPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById("root"));
