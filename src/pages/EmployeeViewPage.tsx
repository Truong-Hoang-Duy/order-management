import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { EmployeeView } from '../modules/Employee/ViewList';

const EmployeeViewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-right block mr-3 mt-4">
        <Button variant="outlined" onClick={() => navigate('/employee/create')}>
          Create employee
        </Button>
      </div>
      <EmployeeView />
    </>
  );
};

export default EmployeeViewPage;
