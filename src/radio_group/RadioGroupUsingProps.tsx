import React from 'react'

interface Props {
  children: JSX.Element[]
  legend: string
  name: string
  onChange: (newValue: string) => void
  value: string
}

const RadioGroupUsingProps: React.FC<Props> = (props: Props) => {
  return (
    <fieldset
      style={{
        border: 0,
        display: 'flex',
        flexFlow: 'row nowrap',
        margin: 0,
        padding: 0,
      }}
    >
      <legend
        style={{
          display: 'none',
        }}
      >
        {props.legend}
      </legend>
      {React.Children.map(props.children, (child: JSX.Element) => {
        const handleClick = props.onChange.bind(null, child.props.id)
        return (
          <div key={child.props.id}>
            <input
              checked={props.value === child.props.id}
              id={child.props.id}
              name={props.name}
              onChange={handleClick}
              style={{
                display: 'none',
              }}
              type="radio"
              value={child.props.id}
            />
            <label
              htmlFor={child.props.id}
              style={{
                display: 'block',
              }}
            >
              {React.cloneElement(child, {
                selected: props.value === child.props.id,
              })}
            </label>
          </div>
        )
      })}
    </fieldset>
  )
}

export default RadioGroupUsingProps
