//capacitor
import { App } from '@capacitor/app'
import { Plugins } from '@capacitor/core'
import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

const StateContext = createContext<any | null>(null)

export const ContextProvider = ({ children }: any) => {
  const [currentMode, setcurrentMode] = useState(() => {
    const themeFromLocalStorage = window.localStorage.getItem('man_theme')
    return themeFromLocalStorage ? themeFromLocalStorage : 'light'
  });

  const [projectFilter, setprojectFilter] = useState("active");
  const [searchProject, setSearchProject] = useState("");

  useEffect(() => {
    window.localStorage.setItem('man_theme', currentMode)
  }, [currentMode])

  return <StateContext.Provider value={{
    currentMode,
    projectFilter, setprojectFilter,
    searchProject, setSearchProject
  }}>{children}</StateContext.Provider>
}

export const appContext = () => useContext(StateContext)
