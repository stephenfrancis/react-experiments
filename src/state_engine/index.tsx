import * as React from 'react'
import NumDisplay from './NumDisplay'

const Main: React.FC<{}> = () => {
  return (
    <div>
      <h2>State Engine</h2>
      <p>connecting local state to a central data manager by registering the setState function</p>
      <NumDisplay label="NumDisplay 1" />
      <NumDisplay label="NumDisplay 2" />
    </div>
  )
}

export default Main
