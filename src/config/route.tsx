import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '@/modules/home';
import About from '@/modules/about';

export default class RouteConfig extends React.Component<{}, {}>{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    )
  }
}