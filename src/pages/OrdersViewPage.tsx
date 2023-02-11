import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OrdersView } from '../modules/Orders/ViewList';

const OrdersViewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-right block mr-3 mt-4">
        <Button variant="outlined" onClick={() => navigate('/orders/create')}>
          Create orders
        </Button>
      </div>
      <OrdersView />
    </>
  );
};

export default OrdersViewPage;
