import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDqAcSdJ0r8uChLR-vId0RlW6sOzsavhjY',
  authDomain: 'crwn-cloth-db-a8c17.firebaseapp.com',
  databaseURL: 'https://crwn-cloth-db-a8c17.firebaseio.com',
  projectId: 'crwn-cloth-db-a8c17',
  storageBucket: 'crwn-cloth-db-a8c17.appspot.com',
  messagingSenderId: '863628160354',
  appId: '1:863628160354:web:f92f3eba360fd35874503b',
  measurementId: 'G-TGE77R4SFS',
};

const app = initializeApp(config);
export const auth = getAuth();
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const user = {
    id: userAuth.uid,
    displayName: userAuth.displayName,
    email: userAuth.email,
    createdAte: new Date(),
    ...additionalData,
  };
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const userSnapshot = await getDoc(userRef);
  if (userSnapshot.exists()) {
    return userRef;
  }
  await setDoc(userRef, user);
  return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.log(err.message);
  }
};
