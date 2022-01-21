import { IUser } from './userInterface';

export interface IContext {
  initialState?: IUser;
  token?: IUser;
  dispatch: Function;
}
