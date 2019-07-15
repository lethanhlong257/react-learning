import React, { Component } from "react"
import { connect } from "react-redux"

class Dashboard extends Component {
  render() {
    return (
        <div className="App">
          <h1>Hello</h1>
        </div>
    )
  }
}

export default connect(
)(Dashboard)
