import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init'

const auth = getAuth(app)
export const AuthContext = createContext()

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider()

  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  //1. Create User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //   2. Update Name

  const updateName = name => {
    setLoading(true)
    return updateProfile(auth.currentUser, { displayName: name })
  }

  //   3. Email Verify
  const verifyEmail = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser)
  }

  // 4. Google Signin

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // 5. Logout
  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  //6. Login with Password
  const signin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //7. Forget Password
  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    updateName,
    verifyEmail,
    signInWithGoogle,
    logout,
    signin,
    resetPassword,
    loading,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default UserContext
