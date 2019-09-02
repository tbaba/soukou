import React, { useEffect } from 'react';

export default function Auth({ auth, Login, refLoginState, Logout }) {
  useEffect(() => {
    refLoginState();
  }, [refLoginState]);

  return (
    <>
      {auth.uid && (
        <button
          type="button"
          onClick={Logout}
        >
          Logout
        </button>
      )}
      {!auth.uid && (
        <button
          type="button"
          onClick={Login}
        >
          Login
        </button>
      )}
    </>
  );
};
