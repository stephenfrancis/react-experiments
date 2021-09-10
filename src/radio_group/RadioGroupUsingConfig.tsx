import React from 'react'

export interface RadioOption {
  id: string
  label: string
}

type OnChangeFunc = (newValue: string) => void

interface RendererProps extends RadioOption {
  selected?: boolean
}

interface RadioOptionProps {
  name: string
  onChange: OnChangeFunc
  option: RadioOption
  renderer: React.FC<RendererProps>
  value: string
}

const RadioOption: React.FC<RadioOptionProps> = (props) => {
  const handleClick = props.onChange.bind(null, props.option.id)
  return (
    <div key={props.option.id}>
      <input
        checked={props.value === props.option.id}
        id={`${props.name}-${props.option.id}`}
        name={props.name}
        onChange={handleClick}
        style={{
          display: 'none',
        }}
        type="radio"
        value={props.option.id}
      />
      <label
        htmlFor={`${props.name}-${props.option.id}`}
        style={{
          display: 'block',
        }}
      >
        <props.renderer {...props.option} selected={props.value === props.option.id} />
      </label>
    </div>
  )
}

interface MainProps {
  config: (any & RadioOption)[]
  legend: string
  name: string
  onChange: OnChangeFunc
  renderer: React.FC<RendererProps>
  value: string
}

const RadioGroupUsingConfig: React.FC<MainProps> = (props: MainProps) => {
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
      {props.config.map((option) => (
        <RadioOption
          key={option.id}
          option={option}
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          renderer={props.renderer}
        />
      ))}
    </fieldset>
  )
}

export default RadioGroupUsingConfig
