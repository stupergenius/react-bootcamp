import React from 'react'
import { Link, Route } from 'react-router-dom'

function Topic({match}) {
  return <h3>{match.params.topicId}</h3>
}

export default function({match}) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><Link to={`${match.url}/rendering`}>Render with React</Link></li>
        <li><Link to={`${match.url}/components`}>Components</Link></li>
        <li><Link to={`${match.url}/propsvstate`}>Props VS State</Link></li>
      </ul>
      
      <hr />
      
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route exact path={match.url} render={() => {
        return <h3>Please select a topic</h3>
      }} />
    </div>
  )
}