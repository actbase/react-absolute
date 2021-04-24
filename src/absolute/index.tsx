import React, { useContext, useEffect, useRef } from 'react';
import { AbsoluteContext } from './context';
import { uniqueId } from 'lodash';
import { AbsoluteProps, Props } from '../utils/elements';
import AbsoluteProvider from './provider';

interface AbsoluteElement extends React.FC<AbsoluteProps> {
  Provider: React.FC<Props>;
}

const Absolute: AbsoluteElement = props => {
  const serial = useRef(uniqueId()).current;
  const { attach } = useContext(AbsoluteContext);
  const { children, isVisible } = props;
  useEffect(() => {
    if (attach && isVisible) {
      attach(serial, { children, isVisible });
      return () => attach(serial, undefined);
    } else {
      return () => null;
    }
  }, [serial, attach, children, isVisible]);
  return null;
};

Absolute.defaultProps = {
  isVisible: true,
};

Absolute.Provider = AbsoluteProvider;

export default Absolute;
