// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBZND19qye1_lZqEHMRRSlWxGeWZqZhKJc",
    authDomain: "my-auth-app-a83c3.firebaseapp.com",
    projectId: "my-auth-app-a83c3",
    storageBucket: "my-auth-app-a83c3.firebasestorage.app",
    messagingSenderId: "134853089687",
    appId: "1:134853089687:web:526c25d5236434b0d9ccd2",
    measurementId: "G-KGY39HYE47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

