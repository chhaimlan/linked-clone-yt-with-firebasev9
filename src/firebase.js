// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
//my firebase email lan chhaim 5555
 const firebaseConfig = {
  apiKey: "AIzaSyDRBmcn5T1cBFuvs9O3T6mkUtTNVoOGbnw",
  authDomain: "linkedin-clone-yt-d5b79.firebaseapp.com",
  projectId: "linkedin-clone-yt-d5b79",
  storageBucket: "linkedin-clone-yt-d5b79.appspot.com",
  messagingSenderId: "73756884094",
  appId: "1:73756884094:web:ea310ced27d14c23b56c2f"
};
//my firebase email vannanchin2020

// const firebaseConfig = {
//   apiKey: "AIzaSyBBByq7lhIvEt84vB8JSh39QPJtF7Qbx84",
//   authDomain: "linkedin-clone-yt-3c39b.firebaseapp.com",
//   projectId: "linkedin-clone-yt-3c39b",
//   storageBucket: "linkedin-clone-yt-3c39b.appspot.com",
//   messagingSenderId: "1377176630",
//   appId: "1:1377176630:web:eed1f3d52b43858455dc97"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyA3UtSzlroeN5_Pu1sD1p1n3Ssz3BEyVGQ",
//   authDomain: "indedin-youtub.firebaseapp.com",
//   projectId: "indedin-youtub",
//   storageBucket: "indedin-youtub.appspot.com",
//   messagingSenderId: "247723976083",
//   appId: "1:247723976083:web:1330c31ff127a795b77466"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
//export default {db, auth};