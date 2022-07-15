import React, { useState } from "react";
import { createContext } from "react";
import { ReactSession } from 'react-client-session';

export interface SessionValues {
  token: string;
  username: string;
  loggedIn: boolean;
}

interface SessionContextProps {
  values: SessionValues;
  setTokenData: (token: string) => void;
  setUsernameData: (username: string) => void;
}

const DEFAULT_VALUE: SessionContextProps = {
  values: {
    token: "",
    username: "",
    loggedIn: false,
  },
  setTokenData: () => console.log("setTokenData not set"),
  setUsernameData: () => console.log("setUsernameData not set"),
};

const SessionContext = createContext<SessionContextProps>(DEFAULT_VALUE);

const SessionContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  ReactSession.setStoreType("localStorage");

  const [sessionValues, setSessionValues] = useState<SessionValues>(
    !ReactSession.get("loggedIn") ? DEFAULT_VALUE.values :
      {
        token: ReactSession.get("token"),
        username: ReactSession.get("username"),
        loggedIn: ReactSession.get("loggedIn"),
      }
  );

  const setToken = (token: string) => setSessionValues({ ...sessionValues, token, loggedIn: true});
  const setUsername = (username: string) => setSessionValues({ ...sessionValues, username});

  const setTokenData = (token: string) => {
    ReactSession.set("token", token);
    ReactSession.set("loggedIn", true);
    setToken(token);
  }

  const setUsernameData = (username: string) => {
    ReactSession.set("username", username);
    setUsername(username);
  }

  return (
    <SessionContext.Provider
      value={{
        values: sessionValues,
        setTokenData,
        setUsernameData,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContextProvider };
export default SessionContext;
