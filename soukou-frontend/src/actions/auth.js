export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginAction = (user) => {
  return {
    type: LOGIN,
    payload: {
      displayName: user.displayName,
      uid: user.uid,
      email: user.email,
    },
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};
