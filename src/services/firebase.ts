import { initializeApp } from 'firebase/app'

// !!! IMPORTANT !!!
// !! I WILL LEAVE THE KEYS HERE FOR YOU TO TEST THE APP !!
// !! BUT YOU SHOULD NEVER DO THIS IN A REAL APP !!
// !! THIS APP IS ONLY FOR TESTING PURPOSES, THE REPO IS PRIVATE AND ONLY SHARED WITH THE RECRUITERS !!

const firebaseConfig = {
  apiKey: 'AIzaSyCLNGr1S7PB_qcKEIzAj-J2dy1i7VpeKfY',
  authDomain: 'repoflix-69648.firebaseapp.com',
  projectId: 'repoflix-69648',
  storageBucket: 'repoflix-69648.appspot.com',
  messagingSenderId: '696491115202',
  appId: '1:696491115202:web:6951c141a60e94b601315b',
}

const app = initializeApp(firebaseConfig)

export default app
