import {createAction, props} from "@ngrx/store";
import {PaginatedUsersResponse, User, UserCreateData, UserId} from "../../models/entities/User";

export const getUsers = createAction('[Users] Get Users', props<{ url?: string | null }>());

export const getUsersSuccess = createAction(
  '[Users] Get Users Success',
  props<{ value: PaginatedUsersResponse }>()
);

export const getUsersFail = createAction(
  '[Users] Get Users Fail',
  props<{ value: string }>()
);


export const addUser = createAction(
  '[Users] Add User',
  props<{ value: UserCreateData }>()
);

export const addUserSuccess = createAction(
  '[Users] Add User Success',
  props<{ value: User }>()
);

export const addUserFail = createAction(
  '[Users] Add User Fail',
  props<{ value: string }>()
);

export const getUser = createAction(
  '[Users] Get User'
);

export const getUserSuccess = createAction(
  '[Users] Get User Success',
  props<{ value: User }>()
);

export const getUserFail = createAction(
  '[Users] Get User Fail',
  props<{ value: string }>()
);

export const updateUser = createAction(
  '[Users] Update User',
  props<{ value: User }>()
);

export const updateUserFail = createAction(
  '[Users] Update User Fail',
  props<{ value: string }>()
);

export const updateUserSuccess = createAction(
  '[Users] Update User Success',
  props<{ value: User }>()
);

export const deleteUser = createAction(
  '[Users] Delete User',
  props<{ id: UserId }>()
);


export const deleteUserSuccess = createAction(
  '[Users] Delete User Success',
  props<{ value: UserId }>()
);

export const deleteUserFail = createAction(
  '[Users] Delete User Fail',
  props<{ value: string }>()
);
