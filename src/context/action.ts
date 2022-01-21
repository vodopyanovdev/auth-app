import { LOGIN } from './actionType';

export const login = (dispatch: Function, state: any) => {
  dispatch({
    type: LOGIN,
    payload: state,
  });
};
