import React, { createContext } from 'react'

export const AppContext = createContext(null)

export default function({ value, children }) {
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
