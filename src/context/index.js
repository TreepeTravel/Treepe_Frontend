"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [login, setlogin] = useState(true);
  const [forgatePopup, setforgatePopup] = useState(false);
  const [verifyPopup, setverifyPopup] = useState(false);
  const [isDraft, setisDraft] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        login,
        setlogin,
        forgatePopup,
        setforgatePopup,
        verifyPopup,
        setverifyPopup,
        isDraft,
        setisDraft,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
