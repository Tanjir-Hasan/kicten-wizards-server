// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3VP_e2Ki0-ZSWBrFoDPqZ-_pjGXtO1UA",
  authDomain: "kitchen-wizards-client.firebaseapp.com",
  projectId: "kitchen-wizards-client",
  storageBucket: "kitchen-wizards-client.appspot.com",
  messagingSenderId: "405912029840",
  appId: "1:405912029840:web:aaaca4e46c64ea00d26615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;