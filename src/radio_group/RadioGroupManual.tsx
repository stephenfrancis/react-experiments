import React from 'react'
import { RadioButton } from './RadioButton'

interface RadioOptionProps {
  id: string
  label: string
  name: string
  onChange: (id: string) => void
  value: string
}

const RadioOption: React.FC<RadioOptionProps> = (props) => {
  const selected = props.value === props.id
  const onChange = props.onChange.bind(null, props.id)
  return (
    <div key={props.id}>
      <input
        checked={selected}
        id={props.id}
        name={props.name}
        onChange={onChange}
        style={{
          display: 'none',
        }}
        type="radio"
        value={props.id}
      />
      <label
        htmlFor={props.id}
        style={{
          display: 'block',
        }}
      >
        <RadioButton id={props.id} label={props.label} selected={selected} />
      </label>
    </div>
  )
}

interface MainProps {
  legend: string
  name: string
  onChange: (newValue: string) => void
  value: string
}

export const RadioGroupManual: React.FC<MainProps> = (props: MainProps) => {
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
      <RadioOption
        id="bra"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        label="Brandy"
      />
      <RadioOption
        id="whi"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        label="Whisky"
      />
      <RadioOption
        id="rum"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        label="Rum"
      />
      <RadioOption
        id="cha"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        label="Cachaça"
      />
    </fieldset>
  )
}
