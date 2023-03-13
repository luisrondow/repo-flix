import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  where,
} from 'firebase/firestore'

import app from '../../services/firebase'

export default function useFirebase() {
  const auth = getAuth(app)
  const db = getFirestore(app)

  const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      return Promise.reject(err)
    }
  }
  const registerWithEmailAndPassword = async (
    username: string,
    email: string,
    password: string,
  ) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const user = res.user
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        username,
        authProvider: 'local',
        email,
      })
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const getUsername = async (email: string): Promise<string> => {
    const snapshot = await getDocs(collection(db, 'users'))
    const user = snapshot.docs.find((document) => document.data().email === email)
    return user?.data().username
  }

  const updateUsername = async (username: string, email: string) => {
    const q = query(collection(db, 'users'), where('email', '==', email))
    const snapshot = await getDocs(q)

    const user = snapshot.docs[0]

    if (user) {
      console.log(user)
      try {
        await updateDoc(doc(db, 'users', user.id), {
          username,
          ...(email && { email }),
        })
      } catch (err) {
        console.error(err)
        return Promise.reject(err)
      }
    }
  }

  const logout = () => {
    signOut(auth)
  }

  return {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    getUsername,
    updateUsername,
  }
}
