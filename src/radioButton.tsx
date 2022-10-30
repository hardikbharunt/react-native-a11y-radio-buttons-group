import React from 'react';
import { PixelRatio, Pressable, Text, View } from 'react-native';

import { RadioButtonProps } from './props';

export default function RadioButton({
  id,
  customRadioButtonIcon,
  borderColor,
  color = '#444',
  radioButtonStyle,
  disabled = false,
  label,
  labelStyle,
  layout = 'row',
  onButtonPress,
  selected = false,
  iconSize = 24,
  accessibilityOptions
}: RadioButtonProps) {

  const borderWidth = PixelRatio.roundToNearestPixel(iconSize * 0.1);
  const sizeHalf = PixelRatio.roundToNearestPixel(iconSize * 0.5);
  const sizeFull = PixelRatio.roundToNearestPixel(iconSize);
  let margin: any = { marginLeft: 12 };

  if (layout == 'column') {
    margin = { marginTop: 12 };
  }

  function handlePress() {
    if (disabled) {
      return null;
    }
    if (onButtonPress) {
      onButtonPress(id);
    }
  }

  return (
    <>
      <Pressable
        {...accessibilityOptions}
        onPress={handlePress}
        style={[
          {
            flexDirection: layout ?? 'row',
            alignItems: 'center',
            marginHorizontal: 12,
            marginVertical: 7,
            opacity: disabled ? 0.1 : 1
          },
          radioButtonStyle,
        ]}>
        {Boolean(customRadioButtonIcon) &&
          customRadioButtonIcon}
        {!Boolean(customRadioButtonIcon) && <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: borderColor || color,
              borderWidth,
              width: sizeFull,
              height: sizeFull,
              borderRadius: sizeHalf,
            },
          ]}>
          {selected && (
            <View
              style={{
                backgroundColor: color,
                width: sizeHalf,
                height: sizeHalf,
                borderRadius: sizeHalf,
              }}
            />
          )}
        </View>}
        {Boolean(label) && <Text style={[margin, labelStyle]}>{label}</Text>}
      </Pressable>
    </>
  );
}