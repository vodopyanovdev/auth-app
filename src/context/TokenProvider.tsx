import React, { FC, useReducer, useEffect } from 'react';
import { createContext } from 'react';
import { getLocalStorage } from '../utils/localStorage';
import { reducer, initialState } from './reducer';
import { IContext } from '../interfaces/contextInterface';
import { LOGIN } from './actionType';

export const UserContext = createContext<IContext>({
  initialState,
  dispatch: () => {},
});

export const TokenProvider: FC = ({ children }) => {
  const [token, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = getLocalStorage('REACT_TOKEN');
    if (user) {
      dispatch({
        type: LOGIN,
        payload: user,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ token, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
