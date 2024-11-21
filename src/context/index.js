"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [login, setlogin] = useState(false);
  const [forgatePopup, setforgatePopup] = useState(false);
  const [isSignUp, setisSignUp] = useState(false);
  const [isSignIn, setisSignIn] = useState(false);
  const [verifyPopup, setverifyPopup] = useState(false);
  const [isDraft, setisDraft] = useState(false);
  const [isNavpopupOpen, setisNavpopupOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        login,
        setlogin,
        forgatePopup,
        setforgatePopup,
        verifyPopup,
        setverifyPopup,
        isSignUp,
        setisSignUp,
        isDraft,
        setisDraft,
        isSignIn,
        setisSignIn,
        isNavpopupOpen,
        setisNavpopupOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
