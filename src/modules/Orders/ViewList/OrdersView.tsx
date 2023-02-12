import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Table } from '../../../shared/components/Table';
import { ordersCol } from '../../../shared/configs/firebase-config';
import { OrdersType } from '../type';
import { columns } from './MenuAction';

const OrdersView = () => {
  const [orders, setOrders] = useState<OrdersType[]>([]);

  useEffect(() => {
    getDocs(ordersCol)
      .then((snapshot) => {
        const order: OrdersType[] = [];
        snapshot.docs.forEach((doc) => {
          order.push({
            ...doc.data(),
            id: doc.id,
            action: true,
          });
        });
        setOrders(order);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <Table row={orders} columns={columns} />;
};

export default OrdersView;
