'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import * as Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Main = Loadable({
  loader: () => import('./main'),
  loading: Loading,
});

const Other = Loadable({
  loader: () => import('./other'),
  loading: Loading,
});

class Routes extends React.Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Other" component={Other} />
          </Switch>
      </div>
    );
  }
}

export default Routes;