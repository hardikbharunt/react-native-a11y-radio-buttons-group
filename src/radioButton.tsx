import React from 'react';
import { PixelRatio, Pressable, StyleSheet, Text, View } from 'react-native';

import { RadioButtonProps } from './props';

export default function RadioButton({
    id,
    customRadioButtonIcon,
    borderColor,
    color = '#444',
    radioButtonStyle,
    description,
    descriptionStyle,
    disabled = false,
    label,
    labelStyle,
    layout = 'row',
    onButtonPress,
    selected = false,
    iconSize = 24,
    accessibilityOptions
  }: RadioButtonProps) {
}