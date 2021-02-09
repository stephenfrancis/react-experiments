import React from 'react'
import RadioButton from './RadioButton'
import RadioGroupUsingConfig from './RadioGroupUsingConfig'
import RadioGroupUsingProps from './RadioGroupUsingProps'

interface Props {}

const Main: React.FC<Props> = (props: Props) => {
  const [drink1, setDrink1] = React.useState<string>('bra')
  const [drink2, setDrink2] = React.useState<string>('bra')
  return (
    <div>
      <h2>Comparison of Radio Group Factoring Techniques</h2>
      <p>Investigating separation of responsibilities in UI components</p>
      <h3>Radio Group using Config</h3>
      <RadioGroupUsingConfig
        config={[
          { id: 'bra', label: 'Brandy', icon: 'brandy.svg' },
          { id: 'whi', label: 'Whisky', icon: 'whisky.svg' },
          { id: 'rum', label: 'Rum' },
          { id: 'cac', label: 'Cachaça' },
        ]}
        legend="Choose a drink"
        name="drinks1"
        onChange={setDrink1}
        renderer={RadioButton}
        value={drink1}
      />
      <h3>Radio Group using Props</h3>
      <RadioGroupUsingProps
        legend="Choose a drink"
        name="drinks2"
        onChange={setDrink2}
        value={drink2}
      >
        <RadioButton selected={false} id="bra" label="Brandy" />
        <RadioButton selected={false} id="whi" label="Whisky" />
        <RadioButton selected={false} id="rum" label="Rum" />
        <RadioButton selected={false} id="cha" label="Cachaça" />
      </RadioGroupUsingProps>
    </div>
  )
}

export default Main
