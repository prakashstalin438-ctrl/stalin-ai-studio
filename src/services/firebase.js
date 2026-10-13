import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Check if valid Firebase configuration values have been supplied
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId &&
  !String(firebaseConfig.apiKey).includes('YOUR_') &&
  !String(firebaseConfig.apiKey).includes('your_')
);

let app = null;
let db = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } catch (error) {
    console.error('Firebase initialization failed:', error);
  }
}

/**
 * Saves a validated client inquiry to Cloud Firestore
 * Collection: 'inquiries'
 *
 * @param {Object} data
 * @param {string} data.name - Client's name
 * @param {string} [data.email] - Client's optional email
 * @param {string} data.service - Chosen service
 * @param {string} data.message - Project brief or questions
 * @returns {Promise<{success: boolean, id: string}>}
 */
export async function saveInquiryToFirestore({ name, email, service, message }) {
  if (!isFirebaseConfigured || !db) {
    const error = new Error('Firebase credentials are not configured in .env. Please configure Firebase to save inquiries to Firestore.');
    error.code = 'FIREBASE_NOT_CONFIGURED';
    throw error;
  }

  const payload = {
    name: name.trim(),
    email: email && email.trim() ? email.trim() : null,
    service: service.trim(),
    projectBrief: message.trim(),
    status: 'new',
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, 'inquiries'), payload);
  return { success: true, id: docRef.id };
}

export { db };
