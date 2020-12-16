import React from 'react'

interface Props {}

const Replacer: React.FC<{ arg: string; match: string }> = (props) => {
  const out: (JSX.Element | string)[] = []
  let from = 0
  let to
  while ((to = props.arg.indexOf(props.match, from)) > -1) {
    out.push(props.arg.substr(from, to - from))
    out.push(<b>{props.match}</b>)
    from = to + 2
  }
  out.push(props.arg.substr(from, props.arg.length - from))
  return <>{out}</>
}

const Main: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h2>Dynamic JSX - Components that Manipulate the JSX Tree Dynamically</h2>
      <p>
        <Replacer
          arg="Some example text that we are going to do a couple of dynamic-JSX operations on"
          match="am"
        />
      </p>
    </div>
  )
}

export default Main
