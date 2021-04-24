import * as React from 'react';
import { AbsoluteProps } from '../utils/elements';

export type PropData = React.PropsWithChildren<AbsoluteProps> | undefined;

export interface ContextArgs {
  attach?: (id: string, props: PropData) => string;
}

export const AbsoluteContext: React.Context<ContextArgs> = React.createContext<ContextArgs>({});
