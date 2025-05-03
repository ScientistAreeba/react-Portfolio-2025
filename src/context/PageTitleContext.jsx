"use client"

import { createContext, useState, useContext } from "react"

const PageTitleContext = createContext()

export const usePageTitle = () => useContext(PageTitleContext)

export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("Home")

  return <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>{children}</PageTitleContext.Provider>
}
