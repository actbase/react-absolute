import { StyleProp, View, ViewStyle, StyleSheet, ViewProps } from 'react-native';
import * as React from 'react';

export interface Props {
  style?: StyleProp<ViewStyle>;
}

export interface AbsoluteProps extends ViewProps {
  isVisible: boolean;
}

export const Container = View;

export const ViewItem: React.FC<Props> = ({ style, ...props }) => (
  <View style={[{ position: 'absolute' }, StyleSheet.flatten(style)]} {...props} />
);
