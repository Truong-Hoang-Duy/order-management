import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { EmployeeView } from '../modules/Employee/ViewList';

const EmployeeViewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-end gap-4 mr-3 mt-4">
        <Button variant="contained" onClick={() => navigate('/employee/chart')}>
          Chart
        </Button>
        <Button variant="outlined" onClick={() => navigate('/employee/create')}>
          Create employee
        </Button>
      </div>
      <EmployeeView />
    </>
  );
};

export default EmployeeViewPage;
