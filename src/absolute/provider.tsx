import React, { PropsWithChildren, useCallback, useState } from 'react';
import { AbsoluteContext } from './context';
import { AbsoluteProps, Container, Props, ViewItem } from '../utils/elements';

const AbsoluteProvider: React.FC<Props> = props => {
  const [screens, setScreens] = useState<{ [key: string]: PropsWithChildren<AbsoluteProps> }>({});
  const attach = useCallback((target: string, props: PropsWithChildren<AbsoluteProps> | undefined) => {
    if (!props) return;
    setScreens(screens => ({
      ...screens,
      [target]: props,
    }));
  }, []);

  return (
    <Container style={props.style}>
      <AbsoluteContext.Provider value={{ attach }}>{props.children}</AbsoluteContext.Provider>
      {Object.keys(screens)
        .filter(v => !!screens[v])
        .map((key: string) => {
          const props = screens[key];
          return <ViewItem key={`ab${key}`} {...props} />;
        })}
    </Container>
  );
};

export default AbsoluteProvider;
