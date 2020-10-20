import * as React from 'react'
import { registerSetStateFunction } from './StateEngine'

const Main: React.FC<{}> = () => {
  const [num, setNum] = React.useState<number>(0)
  registerSetStateFunction(setNum)
  return (
    <div>
      <h2>State Engine</h2>
      <p>connecting local state to a central data manager by registering the setState function</p>
      Local state number set by central engine: {num}
    </div>
  )
}

export default Main
