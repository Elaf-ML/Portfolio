import { db } from './config';
import { collection, addDoc, serverTimestamp, DocumentData } from 'firebase/firestore';

// Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Save a contact message to Firestore database
 * @param formData Contact form data
 * @returns Promise with submitted document reference
 */
export const sendContactMessage = async (formData: ContactFormData): Promise<DocumentData> => {
  const messagesCollection = collection(db, 'messages');
  
  // Add message to Firestore with timestamp
  const docRef = await addDoc(messagesCollection, {
    ...formData,
    timestamp: serverTimestamp(),
    read: false,
  });
  
  console.log('Message saved to database with ID:', docRef.id);
  return docRef;
}; 