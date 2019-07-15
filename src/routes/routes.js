import React from "react"
import { Route, Switch } from "react-router-dom"
import Dashboard from 'views/Dashboard/Dashboard'

class AppRoute extends React.Component {

  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    )
  }
}

export default AppRoute