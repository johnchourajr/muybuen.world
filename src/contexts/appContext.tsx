"use client"

import React, { createContext, useState, useEffect } from "react"
import netlifyIdentity from "netlify-identity-widget"

interface AppContextType {
  apiCountAutocomplete: number
  apiEnabledAutoComplete: boolean
  apiCountYelp: number
  apiEnabledYelp: boolean
  apiCountGoogle: number
  apiEnabledGoogle: boolean
  setApiCountAutocomplete: (value: number) => void
  setApiCountYelp: (value: number) => void
  setApiCountGoogle: (value: number) => void
  setApiEnabledAutoComplete: (value: boolean) => void
  setApiEnabledYelp: (value: boolean) => void
  setApiEnabledGoogle: (value: boolean) => void
}

export const AppContext = createContext<AppContextType>({
  apiCountAutocomplete: 0,
  apiEnabledAutoComplete: true,
  apiCountYelp: 0,
  apiEnabledYelp: true,
  apiCountGoogle: 0,
  apiEnabledGoogle: true,
  setApiCountAutocomplete: () => {},
  setApiCountYelp: () => {},
  setApiCountGoogle: () => {},
  setApiEnabledAutoComplete: () => {},
  setApiEnabledYelp: () => {},
  setApiEnabledGoogle: () => {},
})

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [apiCountAutocomplete, setApiCountAutocomplete] = useState(0)
  const [apiCountYelp, setApiCountYelp] = useState(0)
  const [apiCountGoogle, setApiCountGoogle] = useState(0)
  const [apiEnabledAutoComplete, setApiEnabledAutoComplete] = useState(true)
  const [apiEnabledYelp, setApiEnabledYelp] = useState(true)
  const [apiEnabledGoogle, setApiEnabledGoogle] = useState(true)

  useEffect(() => {
    console.log({
      apiCountAutocomplete,
      apiCountYelp,
      apiCountGoogle,
      apiEnabledAutoComplete,
      apiEnabledYelp,
      apiEnabledGoogle,
    })
  }, [
    apiCountAutocomplete,
    apiCountYelp,
    apiCountGoogle,
    apiEnabledAutoComplete,
    apiEnabledYelp,
    apiEnabledGoogle,
    setApiCountAutocomplete,
    setApiCountYelp,
    setApiCountGoogle,
    setApiEnabledAutoComplete,
    setApiEnabledYelp,
    setApiEnabledGoogle,
  ])

  const context = {
    apiCountAutocomplete,
    apiCountYelp,
    apiCountGoogle,
    apiEnabledAutoComplete,
    apiEnabledYelp,
    apiEnabledGoogle,
    setApiCountAutocomplete,
    setApiCountYelp,
    setApiCountGoogle,
    setApiEnabledAutoComplete,
    setApiEnabledYelp,
    setApiEnabledGoogle,
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default AppContextProvider
