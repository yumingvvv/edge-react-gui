// @flow

import React, { type Node } from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'

import { type ThemeProps, withTheme } from '../../theme/ThemeContext.js'
import { SettingsRow } from './SettingsRow.js'

type OwnProps = {
  disabled?: boolean,
  icon?: Node,
  text: string,
  isSelected: boolean,
  onPress: () => void
}

type Props = OwnProps & ThemeProps

/**
 * A settings row with a radio selector on the right side.
 */
function SettingsRadioRowComponent(props: Props): Node {
  const { disabled, icon, text, isSelected, onPress, theme } = props

  const radio = isSelected ? (
    <IonIcon size={theme.rem(1.25)} color={theme.settingsIconMintColor} name="ios-radio-button-on" />
  ) : (
    <IonIcon size={theme.rem(1.25)} color={theme.settingsIconColor} name="ios-radio-button-off" />
  )

  return <SettingsRow disabled={disabled} icon={icon} text={text} right={radio} onPress={onPress} />
}

export const SettingsRadioRow = withTheme(SettingsRadioRowComponent)
