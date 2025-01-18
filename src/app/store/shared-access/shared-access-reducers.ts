import { SharedAccess } from '../../models/shared-access';
import { User } from '../../models/user';
import { createReducer, on } from '@ngrx/store';
import {
  addSharedAccessFailure,
  addSharedAccessSuccess,
  deleteSharedAccessFailure,
  deleteSharedAccessSuccess,
  getAccessedUsersFailure,
  getAccessedUsersSuccess,
  getNotAccessedUsersFailure,
  getNotAccessedUsersSuccess,
  updateSharedAccessSuccess,
} from './shared-access-actions';

export interface SharedAccessStateModel {
  sharedAccesses: SharedAccess[];
  accessedUsers: User[];
  notAccessedUses: User[];
  errorMessage: string;
}

export interface SharedAccessState {
  accessState: SharedAccessStateModel;
}

const initialState: SharedAccessStateModel = {
  sharedAccesses: [],
  accessedUsers: [],
  notAccessedUses: [],
  errorMessage: '',
};

export const sharedAccessReducer = createReducer(
  initialState,
  on(addSharedAccessSuccess, (state, action) => {
    return {
      ...state,
      accessedUsers: [...state.accessedUsers, action.accessUser],
      notAccessedUses: state.notAccessedUses.filter((user) => user.id !== action.accessUser.id),
    };
  }),

  on(addSharedAccessFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),

  on(updateSharedAccessSuccess, (state, action) => {
    return {
      ...state,
      sharedAccesses: state.sharedAccesses.map((access) => {
        if (access.id === action.sharedAccess.id) {
          return action.sharedAccess;
        }
        return access;
      }),
    };
  }),

  on(deleteSharedAccessSuccess, (state, action) => {
    return {
      ...state,
      accessedUsers: state.accessedUsers.filter((user) => user.id !== action.userId),
    };
  }),

  on(deleteSharedAccessFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),

  on(getAccessedUsersSuccess, (state, action) => {
    return {
      ...state,
      accessedUsers: action.users || [],
    };
  }),

  on(getAccessedUsersFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),

  on(getNotAccessedUsersSuccess, (state, action) => {
    return {
      ...state,
      notAccessedUses: action.users || [],
    };
  }),

  on(getNotAccessedUsersFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.error,
    };
  })
);
