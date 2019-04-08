import React, { Component } from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import signup from "./signup";

class App extends Component {
  render() {
    return <ApolloProvider client={client}>
      <Router>
        <React.Fragment>
          <Route exact={true} path="/signup" component={signup} />
        </React.Fragment>
      </Router>
    </ApolloProvider>
  }
}

export default App;
