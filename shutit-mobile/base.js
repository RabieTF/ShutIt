import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import "dotenv/config";


const firebaseConfig = {    
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJET_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    databaseURL: process.env.DB_URL,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
};
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
