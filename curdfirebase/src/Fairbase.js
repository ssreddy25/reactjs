// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC_GlqPcGvL14k-2-aZEoINBsvL17D26w",
  authDomain: "fir-curd-9115b.firebaseapp.com",
  projectId: "fir-curd-9115b",
  storageBucket: "fir-curd-9115b.appspot.com",
  messagingSenderId: "166981321451",
  appId: "1:166981321451:web:ca63ae855cd1012e0734ae" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// export default firebase;

