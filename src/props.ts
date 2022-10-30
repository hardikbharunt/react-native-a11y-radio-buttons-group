// To understand each props usage visit https://reactnative.dev/docs/accessibility
import { accessibilityLiveRegionType, accessibilityRoleType, accessibilityStateType, accessibilityValueType } from "./accessibilityTypes";
import { View } from 'react-native';


export type AccessibilityProps = {
    accessible?: boolean;
    accessibilityLabel?: string;
    accessibilityLabelledBy?: string;
    accessibilityHint?: string;
    accessibilityIgnoresInvertColors?: boolean;
    accessibilityLiveRegion?: accessibilityLiveRegionType;
    accessibilityRole?: accessibilityRoleType;
    accessibilityState?: accessibilityStateType;
    accessibilityValue?: accessibilityValueType;
    onAccessibilityTap?: Function;
    onMagicTap?: Function;
    // ios specific accessibility options
    accessibilityLanguage?: string;
    accessibilityViewIsModal?: boolean
    accessibilityElementsHidden?: boolean;
    importantForAccessibility?: boolean;
    onAccessibilityEscape?: boolean;
};

export type RadioButtonProps = {
    id: string;
    customRadioButtonIcon? : View;
    borderColor?: string;
    color?: string;
    radioButtonStyle?: object;
    disabled?: boolean;
    label?: string;
    labelStyle?: object;
    layout?: layoutType;
    onButtonPress?: (id: string) => void;
    selected?: boolean;
    iconSize?: number;
    accessibilityOptions? : AccessibilityProps
};

export type RadioGroupProps = {
    radioButtons: RadioButtonProps[];
    customRadioGroup? : View;
    radioGroupStyle?: object;
    layout?: layoutType;
    onPress?: (radioButtons: RadioButtonProps[]) => void;
    accessibilityOptions?: AccessibilityProps;
};

type layoutType = 'row' | 'column'