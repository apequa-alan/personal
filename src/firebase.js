import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "some",
    authDomain: "fototeca-72110.firebaseapp.com",
    projectId: "fototeca-72110",
    storageBucket: "fototeca-72110.appspot.com",
    messagingSenderId: "523018472697",
    appId: "some",
    databaseURL: "https://fototeca-72110-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const storage = getStorage(app);
