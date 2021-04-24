import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';
import * as React from 'react';

export interface Props {
  style?: StyleProp<ViewStyle>;
}

export interface AbsoluteProps {
  isVisible: boolean;
}

export const Container = View;

export const ViewItem: React.FC<Props> = ({ style, ...props }) => (
  <View style={[{ position: 'absolute' }, StyleSheet.flatten(style)]} {...props} />
);
