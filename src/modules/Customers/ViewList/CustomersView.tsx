import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Table } from '../../../shared/components/Table';
import { customersCol } from '../../../shared/configs/firebase-config';
import { CustomersType } from '../type';
import { columns } from './MenuAction';

const CustomersView = () => {
  const [customers, setCustomers] = useState<CustomersType[]>([]);

  useEffect(() => {
    getDocs(customersCol)
      .then((snapshot) => {
        const customer: CustomersType[] = [];
        snapshot.docs.forEach((doc) => {
          customer.push({
            ...doc.data(),
            id: doc.id,
            action: true,
          });
        });
        setCustomers(customer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <Table row={customers} columns={columns} />;
};

export default CustomersView;
