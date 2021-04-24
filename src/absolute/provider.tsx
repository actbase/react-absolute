import * as React from 'react';
import { AbsoluteContext, PropData } from './context';
import { Container, Props, ViewItem } from '../utils/elements';

const AbsoluteProvider: React.FC<Props> = props => {
  const config = React.useRef<{ ix: number }>({ ix: 0 });
  const [screens, setScreens] = React.useState<{ [key: string]: PropData }>({});
  const attach = React.useCallback((_ix, props: PropData) => {
    const ix = _ix ? _ix : config.current.ix + 1;
    setScreens(screens => ({
      ...screens,
      [String(ix)]: props,
    }));
    if (!_ix) {
      config.current.ix = ix;
    }
    return String(ix);
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
