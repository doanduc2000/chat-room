import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

export const addDocument = async (collect, data) => {
  return await addDoc(collection(db, collect), { ...data, createdAt: serverTimestamp() });
};
