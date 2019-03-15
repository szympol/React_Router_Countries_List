import React from "react";
import { render } from "react-dom";
import { Router, hashHistory } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import DevTools from "./DevTools";
import * as serviceWorker from "./serviceWorker";
import { getCountries } from "./actions/actions-countries";
import routes from './routes';

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
    <div>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getCountries());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
