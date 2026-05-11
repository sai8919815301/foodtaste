import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  type DocumentData,
} from 'firebase/firestore';
import { db } from './firebase';

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

// Get all products
export async function getProducts() {
  const snapshot = await getDocs(collection(db, 'products'));
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Get a single product by ID (slug)
export async function getProductById(id: string) {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
}

// Get featured products
export async function getFeaturedProducts(count = 6) {
  const q = query(collection(db, 'products'), where('featured', '==', true), limit(count));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Add a product (admin)
export async function addProduct(data: DocumentData) {
  return await addDoc(collection(db, 'products'), data);
}

// Update a product (admin)
export async function updateProduct(id: string, data: Partial<DocumentData>) {
  await updateDoc(doc(db, 'products', id), data);
}

// Delete a product (admin)
export async function deleteProduct(id: string) {
  await deleteDoc(doc(db, 'products', id));
}

// ─── ORDERS ───────────────────────────────────────────────────────────────────

// Create a new order
export async function createOrder(userId: string, orderData: DocumentData) {
  return await addDoc(collection(db, 'orders'), {
    ...orderData,
    userId,
    status: 'pending',
    createdAt: new Date().toISOString(),
  });
}

// Get orders for a specific user
export async function getUserOrders(userId: string) {
  const q = query(
    collection(db, 'orders'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Get all orders (admin)
export async function getAllOrders() {
  const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Update order status (admin)
export async function updateOrderStatus(orderId: string, status: string) {
  await updateDoc(doc(db, 'orders', orderId), { status });
}

// ─── USERS ────────────────────────────────────────────────────────────────────

// Get user profile from Firestore
export async function getUserProfile(uid: string) {
  const docSnap = await getDoc(doc(db, 'users', uid));
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
}

// Get all users (admin)
export async function getAllUsers() {
  const snapshot = await getDocs(collection(db, 'users'));
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}
