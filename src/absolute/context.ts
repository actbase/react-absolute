import * as React from 'react';

export interface ContextArgs {
  attach?: (id: string, elem: React.Component | undefined) => string;
}

export const AbsoluteContext: React.Context<ContextArgs> = React.createContext<ContextArgs>({});
