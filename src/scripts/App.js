import React from "react"
import "../styles/App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import List from "./List"
import Single from "./Single"

export default function() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={List} />
        <Route path="/List/:id" component={Single} />
      </div>
    </Router>
  )
}
