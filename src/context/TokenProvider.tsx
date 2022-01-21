import React, { FC, useReducer, useEffect } from 'react';
import { createContext } from 'react';
import { getLocalStorage } from '../utils/localStorage';
import { reducer, initialState } from './reducer';
import { IContext } from '../interfaces/contextInterface';

export const UserContext = createContext<IContext>({
  initialState,
  dispatch: () => {},
});

export const TokenProvider: FC = ({ children }) => {
  const [token, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = getLocalStorage('REACT_TOKEN');
    if (user) {
    }
  }, []);

  return (
    <UserContext.Provider value={{ initialState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
