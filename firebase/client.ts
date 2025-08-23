import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSwEPrJCBvooG_8T1-Yn2lF25BNEdL3-E",
  authDomain: "careercoach-ai-5b0ce.firebaseapp.com",
  projectId: "careercoach-ai-5b0ce",
  storageBucket: "careercoach-ai-5b0ce.firebasestorage.app",
  messagingSenderId: "720092949048",
  appId: "1:720092949048:web:95fe5df6306642176f14cd",
  measurementId: "G-Q108CDLSLD"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);