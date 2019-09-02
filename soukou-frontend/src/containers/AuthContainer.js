import firebase from '../firebase';
import { connect } from 'react-redux';
import Auth from '../components/Auth';
import { loginAction, logoutAction } from '../actions/auth';

const mapStateToProps = (state) => {
  const { displayName, uid, email } = state;

  return Object.assign({}, state, {
    user: { displayName, uid, email },
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    Login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },

    refLoginState() {
      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          return;
        }

        dispatch(loginAction(user));
      });
    },

    Logout() {
      firebase.auth().signOut();
      dispatch(logoutAction());
    },
  };
};

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthContainer;
