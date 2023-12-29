"use client"

import React, { createContext, useState, useEffect } from "react"
import netlifyIdentity from "netlify-identity-widget"

interface AuthContextType {
  user: netlifyIdentity.User | null
  login: () => void
  logout: () => void
  authReady: boolean
  updateUser: (user: netlifyIdentity.User) => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
  updateUser: () => {},
})

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<netlifyIdentity.User | null>(null)
  const [authReady, setAuthReady] = useState(false)

  const updateUser = async (userData: netlifyIdentity.User) => {
    // Prepare the data for the API
    // id,audience,confirmation_sent_at,confirmed_at,created_at,email,role,updated_at,url,user_metadata
    const apiData = {
      id: userData?.id || null,
      audience: userData?.audience || null,
      confirmed_at: userData?.confirmed_at || null,
      created_at: userData?.created_at || null,
      email: userData?.email || null,
      role: userData?.role || null,
      updated_at: userData?.updated_at || null,
      url: userData?.url || null,
      user_metadata: userData?.user_metadata || null,
    }

    console.log("apiData", apiData)

    // Call the API endpoint
    try {
      const response = await fetch("/api/database/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      })

      if (!response.ok) {
        console.log("response", response)

        throw new Error(`Error: ${response.status}`)
      }

      const result = await response.json()
      console.log("User updated:", result.message)
    } catch (error) {
      console.error("Failed to update user:", error)
    }
  }

  const login = () => netlifyIdentity.open("login")
  const logout = () => netlifyIdentity.logout()

  useEffect(() => {
    netlifyIdentity.init()

    netlifyIdentity.on("login", (user) => {
      setUser(user)
      updateUser(user)
      netlifyIdentity.close()
      setAuthReady(true)
    })

    netlifyIdentity.on("logout", () => {
      setUser(null)
    })

    // Cleanup event listeners on unmount
    return () => {
      netlifyIdentity.off("login")
      netlifyIdentity.off("logout")
    }
  }, [])

  const context = {
    user,
    login,
    logout,
    authReady,
    updateUser,
  }

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
