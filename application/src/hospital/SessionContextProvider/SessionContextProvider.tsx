import React, { useState } from "react";

import { createContext } from "react";

export interface SessionValues {
  token: string;
  username: string;
  loggedIn: boolean;
}

interface SessionContextProps {
  values: SessionValues;
  setToken: (token: string) => void;
  setUsername: (username: string) => void;
}

const DEFAULT_VALUE: SessionContextProps = {
  values: {
    token: "",
    username: "",
    loggedIn: false,
  },
  setToken: () => {},
  setUsername: () => {},
};

const SessionContext = createContext<SessionContextProps>(DEFAULT_VALUE);

const SessionContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [sessionValues, setSessionValues] = useState<SessionValues>(
    DEFAULT_VALUE.values
  );

  const setToken = (token: string) => setSessionValues({ ...sessionValues, token, loggedIn: true});
  const setUsername = (username: string) => setSessionValues({ ...sessionValues, username});

  return (
    <SessionContext.Provider
      value={{
        values: sessionValues,
        setToken,
        setUsername,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContextProvider };
export default SessionContext;
