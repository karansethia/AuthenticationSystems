import React, {useState} from "react";

export const AuthContext = React.createContext({
  email: "",
  token: "",
  onLogin: () => {},
  onLogout: () => {},
});

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({
    email: "",
    token: "",
  });

  const loginHandler = (email, accessToken) => {
    setUser({
      email: email,
      token: accessToken,
    });
  };
  const logoutHandler = () => {
    setUser({
      email: "",
      token: "",
    });
  };
  return (
    <AuthContext.Provider
      value={{
        email: user.email,
        token: user.token,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
