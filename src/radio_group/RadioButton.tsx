import React from 'react'

interface Props {
  id: string
  icon?: string
  label: string
  selected?: boolean
}

export const RadioButton: React.FC<Props> = (props: Props) => {
  // console.log(`RadioButton: ${JSON.stringify(props)}`)
  React.useEffect(() => {
    console.log(`mounting ${props.id}`)
    return () => {
      console.log(`dismounting ${props.id}`)
    }
  }, [])
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
