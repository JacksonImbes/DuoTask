import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6VeNcGMHOQIoLXi7FSEemw7-AhjUDySM",
  authDomain: "duotask-plus.firebaseapp.com",
  projectId: "duotask-plus",
  storageBucket: "duotask-plus.appspot.com",
  messagingSenderId: "803071142357",
  appId: "803071142357:web:9d26cf888633ac9dc4b55c"
};

let firebaseApp: any;
let db: Firestore | null = null;

const initializeFirebase = (): void => {
  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
    console.log("Firebase inicializado com sucesso!");
  }
};

const getFirestoreDB = (): Firestore => {
  if (!firebaseApp) {
    console.error("Firebase app not initialized");
    throw new Error("Firebase app not initialized");
  }

  if (!db) {
    db = getFirestore(firebaseApp);
  }
  return db;
};

export { initializeFirebase, getFirestoreDB }