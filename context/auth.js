import React from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
    token: "",
    user: {},
  });

  const setUserAuthInfo = (data) => {
    const token = localStorage.setItem("token", data);

    setAuthState({
      token,
    });
  };

  const setUserDetails = (data) => {
    const token = localStorage.setItem("user", JSON.stringify(data));

    setAuthState((prevState) => ({ ...prevState, user: data }));
  };

  const isUserAuthenticated = () => {
    const status = authState.token ? "true" : "false";
    return status;
  };

  return (
    <Provider
      value={{
        authState,
        setUserAuthInfo,
        setUserDetails,
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthProvider, AuthContext };
