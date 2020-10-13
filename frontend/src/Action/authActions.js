import firebase from "../Firebase/firebase";

export const login = (uid) => {
  return {
    type: "LOGIN",
    uid,
  };
};

export const logout = () => {
  return { type: "LOGOUT" };
};

export const startLogin = (email, password) => {
  return () => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        return data;
      })
      .catch(function (error) {
        throw error.message;
      });
  };
};

export const startLogOut = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
