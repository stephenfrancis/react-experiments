import React from 'react'

interface Props {}

const StringReplacer: React.FC<{ arg: string; match: string }> = (props) => {
  const out: (JSX.Element | string)[] = []
  let from = 0
  let to
  while ((to = props.arg.indexOf(props.match, from)) > -1) {
    out.push(<span key={`s${from}`}>{props.arg.substring(from, to)}</span>)
    out.push(<b key={`b${from}`}>{props.match}</b>)
    from = to + 2
  }
  out.push(<span key={`s${from}`}>{props.arg.substring(from, props.arg.length)}</span>)
  return <>{out}</>
}

const TreeReplacer: React.FC<{ match: string; depth?: number }> = (props) => {
  const children_is_array = Array.isArray(props.children)
  const children_is_string = typeof props.children === 'string'
  const children_is_single_react_element = React.isValidElement(props.children)
  console.log(
    `entering TreeReplacer with children is array? ${children_is_array}, string? ${children_is_string}, React elem? ${children_is_single_react_element}`
  )
  if (props.depth !== undefined && props.depth > 10) {
    console.error(`stack depth 10 exceeded`)
    return null
  }
  const out: (JSX.Element | string)[] = []
  if (typeof props.children === 'string') {
    return <StringReplacer arg={String(props.children)} match={props.match} />
  }
  if (Array.isArray(props.children)) {
    return (
      <>
        {props.children.map((child, index) => (
          <TreeReplacer key={`t${index}`} match={props.match} depth={(props.depth || 0) + 1}>
            {child}
          </TreeReplacer>
        ))}
      </>
    )
  }
  if (React.isValidElement(props.children)) {
    console.log(
      `child is React elem: ${Object.keys(props.children)}, ${(props.children as any).type}`
    )
    // return props.children
    return React.cloneElement(
      props.children,
      undefined,
      <TreeReplacer match={props.match} depth={(props.depth || 0) + 1}>
        {props.children.props.children}
      </TreeReplacer>
    )
  }
  return null
}

export const DynamicJSX: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h2>Dynamic JSX - Components that Manipulate the JSX Tree Dynamically</h2>
      <p>
        <StringReplacer
          arg="Some example text that we are going to do a couple of dynamic-JSX operations on"
          match="am"
        />
      </p>
      <p>
        <TreeReplacer match="am">
          Some <i>example text</i> that we are going to do some dynamic-JSX <i>operations</i> on
        </TreeReplacer>
      </p>
    </div>
  )
}
