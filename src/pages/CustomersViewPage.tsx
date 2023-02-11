import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomersView } from '../modules/Customers/ViewList';

const CustomersViewPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-right block mr-3 mt-4">
        <Button variant="outlined" onClick={() => navigate('/customers/create')}>
          Create custormers
        </Button>
      </div>
      <CustomersView />
    </>
  );
};

export default CustomersViewPage;
