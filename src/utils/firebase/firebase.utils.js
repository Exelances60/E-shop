import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSUvrxu428-o1QBydB02s7qSDowhF4-Jw",
  authDomain: "fashion-app-a5a0c.firebaseapp.com",
  projectId: "fashion-app-a5a0c",
  storageBucket: "fashion-app-a5a0c.appspot.com",
  messagingSenderId: "804272618961",
  appId: "1:804272618961:web:751a157e0dcac9776f34f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const SignUpWithEmail = async (email, password, displayName) => {
  if (!email || !password) return;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName }); // displayName'i güncelle
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
export const SignİnWithEmail = async (email, password) => {
  if (!email || !password) return;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
