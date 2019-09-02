import { LOGIN, LOGOUT } from '../actions/auth';

const initialState = {
  user: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state.user, {
        displayName: action.payload.displayName,
        uid: action.payload.uid,
        email: action.payload.email,
      });

    case LOGOUT:
      return Object.assign({}, state.user, {
        displayName: null,
        uid: null,
        email: null,
      });

    default:
      return false;
  };
};

export default auth;
