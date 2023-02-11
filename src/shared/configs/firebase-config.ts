import { initializeApp } from 'firebase/app';
import {
  collection,
  CollectionReference,
  DocumentData,
  DocumentReference,
  getFirestore,
} from 'firebase/firestore';
import { CustomersType } from '../../modules/Customers/type';
import { EmployeeType } from '../../modules/Employee/type';
import { OrdersType } from '../../modules/Orders/type';

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
export const ordersCol = createCollection<OrdersType>('Orders');
export const employeeCol = createCollection<EmployeeType>('Employee');
