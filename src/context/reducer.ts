import { IUser } from '../interfaces/userInterface';
import { LOGIN, LOGOUT } from './actionType';
import { IAction } from '../interfaces/reducerInterface';

export const initialState: IUser = {
  name: '',
  password: '',
  role: '',
};

export const reducer = (state: IUser = initialState, action: IAction) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
