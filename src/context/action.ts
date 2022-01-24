import { LOGIN, LOGOUT } from './actionType';
import { setLocalStorage, removeLocalStorage } from '../utils/localStorage';

export const login = (dispatch: Function, state: any) => {
  setLocalStorage('REACT_TOKEN', state);
  dispatch({
    type: LOGIN,
    payload: state,
  });
};

export const logout = (dispatch: Function) => {
  removeLocalStorage('REACT_TOKEN');
  dispatch({
    type: LOGOUT,
  });
};
