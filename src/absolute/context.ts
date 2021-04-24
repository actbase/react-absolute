import * as React from 'react';
import { AbsoluteProps } from '../utils/elements';

export interface ContextArgs {
  attach?: (target: string, props: React.PropsWithChildren<AbsoluteProps> | undefined) => void;
}

export const AbsoluteContext: React.Context<ContextArgs> = React.createContext<ContextArgs>({});
