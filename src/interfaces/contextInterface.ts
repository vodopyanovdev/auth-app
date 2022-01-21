import { IUser } from './userInterface';

export interface IContext {
  initialState: IUser;
  dispatch: Function;
}
