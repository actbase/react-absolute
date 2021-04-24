import * as React from 'react';
import { useEffect } from 'react';
import { AbsoluteContext } from './context';

export let attachMethod: any = undefined;

const AbsoluteProvider: React.FC<any> = props => {
  const config = React.useRef<{ ix: number }>({ ix: 0 });
  const [screens, setScreens] = React.useState<{ [key: string]: React.Component | undefined }>({});
  const attach = React.useCallback((_ix, component: React.Component | undefined) => {
    const ix = _ix ? _ix : config.current.ix + 1;
    setScreens(screens => ({
      ...screens,
      [String(ix)]: component,
    }));
    if (!_ix) {
      config.current.ix = ix;
    }
    return String(ix);
  }, []);

  useEffect(() => {
    attachMethod = attach;
  }, [attach]);

  return (
    <>
      <AbsoluteContext.Provider value={{ attach }}>{props.children}</AbsoluteContext.Provider>
      {Object.keys(screens)
        .filter(v => !!screens[v])
        .map((key: string) => screens[key])}
    </>
  );
};

export default AbsoluteProvider;
