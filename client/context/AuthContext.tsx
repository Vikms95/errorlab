import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'

const AuthContext = createContext({ user: '' })

const SetAuthContext = createContext({
  setUser: () => {},
})

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('')

  return (
    <AuthContext.Provider value={{ user }}>
      <SetAuthContext.Provider value={() => setUser}>
        {children}
      </SetAuthContext.Provider>
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

const useSetAuth = () => {
  return useContext(SetAuthContext)
}

export { AuthContextProvider, useAuth, useSetAuth }
