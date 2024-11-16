"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

  const [login, setlogin] = useState(true);

  return <GlobalContext.Provider value={{ login, setlogin }}>{children}</GlobalContext.Provider>;
}
