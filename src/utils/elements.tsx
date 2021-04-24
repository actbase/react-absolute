import * as React from 'react';

export interface Props {
  style?: React.CSSProperties;
}

export interface AbsoluteProps extends React.HTMLProps<any> {
  isVisible: boolean;
}

export const Container: React.FC<Props> = ({ style, ...props }) => (
  <div style={{ position: 'relative', ...style }} {...props} />
);

export const ViewItem: React.FC<Props> = ({ style, ...props }) => (
  <div style={{ position: 'absolute', ...style }} {...props} />
);
