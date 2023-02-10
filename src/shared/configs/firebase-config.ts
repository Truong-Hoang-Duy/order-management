import { initializeApp } from 'firebase/app';
import { collection, CollectionReference, DocumentData, getFirestore } from 'firebase/firestore';
import { CustomersType } from '../../modules/Customers/type';

const firebaseConfig = {
  apiKey: 'AIzaSyDDrxSY35U3NRzJBFXaIwlzVVlr7LKCTyM',
  authDomain: 'order-management-web.firebaseapp.com',
  projectId: 'order-management-web',
  storageBucket: 'order-management-web.appspot.com',
  messagingSenderId: '994403437018',
  appId: '1:994403437018:web:64c4a24bd232c8abe058e3',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export const customersCol = createCollection<CustomersType>('Customers');
