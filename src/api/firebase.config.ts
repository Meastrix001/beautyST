// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Firebase config (from .env.local in Next.js)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
};

// Singleton pattern to prevent re-initialization in dev
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Modular exports
export const firestoreDB = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);

export async function getAllReviews(): Promise<Review[]> {
  const reviewsRef = collection(firestoreDB, "reviews");

  // 🔹 Only fetch docs where approved == true
  const q = query(reviewsRef, where("approved", "==", true));

  const snapshot = await getDocs(q);
  const reviews = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Review));

  // 🔹 Shuffle the array
  for (let i = reviews.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [reviews[i], reviews[j]] = [reviews[j], reviews[i]];
  }

  return reviews;
}
export type Review = {
  message: string | undefined;
  name: string | undefined;
  rating: number;
  created: Timestamp;
  approved: boolean;
  id: string;
};
