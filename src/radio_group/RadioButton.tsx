import React from 'react'

interface Props {
  id: string
  icon?: string
  label: string
  selected: boolean
}

const RadioButton: React.FC<Props> = (props: Props) => {
  console.log(`RadioButton: ${JSON.stringify(props)}`)
  return (
    <div
      style={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: props.selected ? 'darkgreen' : 'green',
        backgroundColor: props.selected ? 'lightgreen' : 'white',
        cursor: 'pointer',
        marginRight: -1,
        padding: 10,
      }}
    >
      {props.label}
    </div>
  )
}

export default RadioButton
