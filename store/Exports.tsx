import React from 'react';

import {Options} from './Options';

const OptionsContext: React.Context<Options> = React.createContext(new Options());
export const useOptions = React.useContext(OptionsContext);
