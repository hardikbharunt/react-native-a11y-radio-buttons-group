import React, { useState } from 'react'
import { View } from 'react-native'
import RadioButton from './RadioButton'
import { RadioButtonProps, RadioGroupProps } from './props'

export default function RadioGroup({
radioGroupStyle,
  layout,
  onPress,
  radioButtons,
  customRadioGroup,
  accessibilityOptions
}: RadioGroupProps) {
  const [radioButtonsLocal, setRadioButtonsLocal] = useState<RadioButtonProps[]>(radioButtons)

  function handlePress(id: string): void {
    radioButtonsLocal.forEach((radioButton) => {
      if (radioButton.selected && radioButton.id === id) return
      radioButton.selected = radioButton.id === id
    })
    setRadioButtonsLocal([...radioButtonsLocal])
    if (onPress) {
      onPress(radioButtonsLocal)
    }
  }

  if (customRadioGroup) {
    return customRadioGroup
  }

  return (
    <View
      {...accessibilityOptions}
      style={[
        { alignItems: 'center', flexDirection: layout ?? 'column' },
        radioGroupStyle,
      ]}
    >
      {radioButtonsLocal.map((button) => (
        <RadioButton
          {...button}
          key={button.id}
          onPress={(id: string) => {
            handlePress(id)
            if (button.onPress) {
              button.onPress(id)
            }
          }}
        />
      ))}
    </View>
  )
}