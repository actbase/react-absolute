import React, { useContext, useEffect, useRef } from 'react';
import { AbsoluteContext } from './context';
import AbsoluteProvider, { attachMethod } from './provider';

export interface AbsoluteElement extends React.FC<any> {
  Provider: React.FC<any>;
  add: (elem: React.Component) => () => void;
}

const Absolute: AbsoluteElement = props => {
  const serial = useRef({ ix: '' });
  const { attach } = useContext(AbsoluteContext);
  useEffect(() => {
    if (attach) {
      serial.current.ix = attach(serial.current.ix, props.children);
      return () => {
        attach(serial.current.ix, undefined);
      };
    } else {
      return () => null;
    }
  }, [attach, props]);
  return null;
};

Absolute.defaultProps = {};

Absolute.Provider = AbsoluteProvider;
Absolute.add = (elem: React.Component) => {
  const ix = attachMethod(undefined, elem);
  return () => attachMethod(ix, undefined);
};

export default Absolute;
