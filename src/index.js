import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';

import * as serviceWorker from './serviceWorker';

import 'graphiql/graphiql.css';

function graphQLFetcher(graphQLParams) {
    return fetch(window.location.origin + '/api', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }
  
ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
