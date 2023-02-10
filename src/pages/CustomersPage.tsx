import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Customers } from '../modules/Customers';

const CustomersPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-right block mr-3 mt-4">
        <Button variant="outlined" onClick={() => navigate('/customers/create')}>
          Create custermer
        </Button>
      </div>
      <Customers />
    </>
  );
};

export default CustomersPage;
