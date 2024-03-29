import React from 'react'
import { registerSetStateFunction } from './StateEngine'

interface Props {
  label: string
}

export const NumDisplay: React.FC<Props> = (props: Props) => {
  const [num, setNum] = React.useState<number>(0)
  registerSetStateFunction(setNum)
  return (
    <div>
      <span>{props.label}: </span>
      <span>{num}</span>
    </div>
  )
}
