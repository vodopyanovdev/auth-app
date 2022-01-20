import React, { FC, useState } from 'react';
import { createContext } from 'react';
import { IContext } from '../interfaces/interfaces';

export const UserContext = createContext(0);

export const ContextProvider: FC = ({ children }) => {
  const [context, setContext] = useState(0);

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
