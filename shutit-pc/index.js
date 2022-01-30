import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { exec } from "child_process";
import 'dotenv/config';

// email and password should ideally be retrieved from user or saved in a local database
// but since this is -for now- just for me this is okay
const password = process.env.PASSWORD;
const email = process.env.EMAIL;

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJET_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    databaseURL: process.env.DB_URL,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
}

// Initialize Firebase
const app = initializeApp(config);
const db = getDatabase(app);

const auth = getAuth();

let shutDownRef, lockRef, restartRef, errRef;

signInWithEmailAndPassword(auth, email, password)
.then(() => {
    shutDownRef = ref(db, '/shutdown');
    lockRef = ref(db, '/lockdown');
    restartRef = ref(db, '/restart');
    errRef = ref(db, '/err');
    set(shutDownRef, false);
    set(lockRef, false);
    set(restartRef, false);
    set(errRef, false);

    onValue(shutDownRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            set(shutDownRef, false);
    
            // Execute shell command to shutdown
            exec('shutdown /p', (err, stdout, stderr) => {
                if (err){
                    set(errRef,true);
                }
            });
        }
    });
    
    onValue(lockRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            set(lockRef, false);
    
            // Execute shell command to log off the session
            // Ideal would be rundll32.exe user32.dll,LockWorkStation to preserve data 
            // but for some reason it doesn't work when I run the script as a Windows service
            // sad :/
            exec('shutdown /l', (err, stdout, stderr) => {
                if (err){
                    set(errRef,true);
                }
            });
        }
    });
    
    onValue(restartRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            set(restartRef, false);
    
            // Execute shell command to restart
            exec('shutdown /r', (err, stdout, stderr) => {
                if (err){
                    set(errRef,true);
                }
            });
        }
    });
        
})





