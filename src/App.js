import React from "react";
import { Provider } from "mobx-react";
import { syncHistoryWithStore } from "mobx-react-router";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

import routing from "./stores/routing";
import stores from "./stores/index";

import RequestsEditor from "./pages/requestsEditor";
import RequestsList from "./pages/requestsList";
import RequestsSearch from "./pages/requestsSearch";
import RequestItemViewer from "./pages/requestItemViewer";

import Menu from "./components/menu";

import "./App.css";

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routing);

function App() {
  return (
    <Provider {...stores}>
      <Router history={history}>
        <div className="wrapper">
          <Menu />
          <Switch>
            <Route exact path="/" component={RequestsList} />
            <Route
              exact
              path="/addrequest"
              render={(data) => {
                return <RequestsEditor />;
              }}
            />
            <Route exact path="/search" component={RequestsSearch} />
            <Route
              exact
              path="/showrequest/:id"
              render={(data) => {
                return <RequestItemViewer requestId={data.match.params.id} />;
              }}
            />
            <Route
              exact
              path="/editrequest/:id"
              render={(data) => {
                return <RequestsEditor requestId={data.match.params.id} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
