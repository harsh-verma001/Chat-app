// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2_oLmWBvExN8bZDqPgHA_yvT98qhiPnw",
  authDomain: "chat-app-f7061.firebaseapp.com",
  projectId: "chat-app-f7061",
  storageBucket: "chat-app-f7061.appspot.com",
  messagingSenderId: "511619880816",
  appId: "1:511619880816:web:7253e234e1a7e824cd21b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {  //collection
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey i am using chat app",
      lastSeen: Date.now()
    })

    await setDoc(doc(db, "chats", user.uid), {  //collection
      chatData:[]
    })
  } catch (error) {
    console.error(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}


const login = async(email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.error(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}


const logout = async () => {
  try {
    await signOut(auth)

  } catch (error) {
     console.error(error)
     toast.error(error.code.split('/')[1].split('-').join(" "))
  }
  
}


export { signup, login, logout, auth, db};