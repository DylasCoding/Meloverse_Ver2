import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCnNhU4PkGRLn4SbPeivAPqDk6PIAw-uW4",
    authDomain: "meloverse-hh.firebaseapp.com",
    projectId: "meloverse-hh",
    storageBucket: "meloverse-hh.appspot.com",
    messagingSenderId: "707614293342",
    appId: "1:707614293342:web:03a1f2acc2a220a11d23cf",
    measurementId: "G-XZ0FKP741T"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };