import React from 'react'

export interface RadioOption {
  id: string
  label: string
}

interface RendererProps extends RadioOption {
  selected: boolean
}

interface Props {
  config: (any & RadioOption)[]
  legend: string
  name: string
  onChange: (newValue: string) => void
  renderer: React.FC<RendererProps>
  value: string
}

const RadioGroupUsingConfig: React.FC<Props> = (props: Props) => {
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
      {props.config.map((option) => {
        const handleClick = props.onChange.bind(null, option.id)
        return (
          <div key={option.id}>
            <input
              checked={props.value === option.id}
              id={`${props.name}-${option.id}`}
              name={props.name}
              onChange={handleClick}
              style={{
                display: 'none',
              }}
              type="radio"
              value={option.id}
            />
            <label
              htmlFor={`${props.name}-${option.id}`}
              style={{
                display: 'block',
              }}
            >
              <props.renderer {...option} selected={props.value === option.id} />
            </label>
          </div>
        )
      })}
    </fieldset>
  )
}

export default RadioGroupUsingConfig
