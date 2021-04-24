import React, { useContext, useEffect, useRef } from 'react';
import { AbsoluteContext } from './context';
import { AbsoluteProps, Props } from '../utils/elements';
import AbsoluteProvider from './provider';

interface AbsoluteElement extends React.FC<AbsoluteProps> {
  Provider: React.FC<Props>;
}

const Absolute: AbsoluteElement = props => {
  const serial = useRef({ ix: '' });
  const { attach } = useContext(AbsoluteContext);
  useEffect(() => {
    if (attach && props.isVisible) {
      serial.current.ix = attach(serial.current.ix, props);
      return () => {
        attach(serial.current.ix, undefined);
      };
    } else {
      return () => null;
    }
  }, [attach, props]);
  return null;
};

Absolute.defaultProps = {
  isVisible: true,
};

Absolute.Provider = AbsoluteProvider;

export default Absolute;
