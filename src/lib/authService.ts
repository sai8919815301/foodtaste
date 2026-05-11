import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  type User
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

// ─── Register with Email & Password ───────────────────────────────────────────
export async function registerUser(email: string, password: string, name: string) {
  // Step 1: Create user in Firebase Auth (this always works if Auth is enabled)
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Step 2: Try to save profile to Firestore (may fail if rules block it)
  try {
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email,
      name,
      role: 'customer',
      createdAt: new Date().toISOString(),
    });
    console.log('✅ User profile saved to Firestore');
  } catch (firestoreErr) {
    // Auth succeeded but Firestore failed — user is still created
    console.warn('⚠️ Auth user created, but Firestore profile save failed:', firestoreErr);
    console.warn('   → Go to Firebase Console → Firestore → Rules → Set to test mode');
  }

  return user;
}

// ─── Login with Email & Password ──────────────────────────────────────────────
export async function loginUser(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

// ─── Login with Google ─────────────────────────────────────────────────────────
export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // Check if user already exists in Firestore, if not, create a record
  try {
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        role: 'customer',
        createdAt: new Date().toISOString(),
      });
    }
  } catch (firestoreErr) {
    console.warn('⚠️ Google auth succeeded, but Firestore save failed:', firestoreErr);
  }

  return user;
}

// ─── Logout ────────────────────────────────────────────────────────────────────
export async function logoutUser() {
  await signOut(auth);
}

// ─── Get current user (for use in components) ─────────────────────────────────
export function onUserChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
