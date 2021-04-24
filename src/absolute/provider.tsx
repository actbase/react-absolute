import * as React from 'react';
import { AbsoluteContext } from './context';
import { AbsoluteProps, Container, Props, ViewItem } from '../utils/elements';

const AbsoluteProvider: React.FC<Props> = props => {
  const [screens, setScreens] = React.useState<{ [key: string]: React.PropsWithChildren<AbsoluteProps> }>({});
  const attach = React.useCallback((target: string, props: React.PropsWithChildren<AbsoluteProps> | undefined) => {
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
        .map((key: string) => (
          <ViewItem key={`ab${key}`} {...screens[key]} />
        ))}
    </Container>
  );
};

export default AbsoluteProvider;
