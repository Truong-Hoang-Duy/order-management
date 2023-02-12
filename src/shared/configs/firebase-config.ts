import { initializeApp } from 'firebase/app';
import { collection, CollectionReference, DocumentData, getFirestore } from 'firebase/firestore';
import { CustomersType } from '../../modules/Customers/type';
import { EmployeeType } from '../../modules/Employee/type';
import { OrdersType } from '../../modules/Orders/type';

const firebaseConfig = {
  apiKey: 'AIzaSyD9WElEHXorJsraWlILZol3YHRcB69mUl8',
  authDomain: 'order-management-web-564c1.firebaseapp.com',
  projectId: 'order-management-web-564c1',
  storageBucket: 'order-management-web-564c1.appspot.com',
  messagingSenderId: '2560406857',
  appId: '1:2560406857:web:f8b7d5ad4442ce04291698',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};
export const customersCol = createCollection<CustomersType>('Customers');
export const ordersCol = createCollection<OrdersType>('Orders');
export const employeeCol = createCollection<EmployeeType>('Employee');
