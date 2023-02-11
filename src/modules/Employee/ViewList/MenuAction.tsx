import { Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Action } from '../../../shared/components/Action';
import { employeeCol } from '../../../shared/configs/firebase-config';
import { fDate } from '../../../shared/utils/formatDate';

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
  },
  {
    field: 'EmpFirstName',
    headerName: 'First Name',
    flex: 1,
    cellClassName: 'name-column--cell',
  },
  {
    field: 'EmpLastName',
    headerName: 'Last Name',
    flex: 1,
    cellClassName: 'name-column--cell',
  },
  {
    field: 'EmpStreet',
    headerName: 'Street',
    flex: 1,
    cellClassName: 'name-column--cell',
  },
  {
    field: 'EmpCity',
    headerName: 'City',
    flex: 1,
  },
  {
    field: 'EmpState',
    headerName: 'State',
    flex: 1,
  },
  {
    field: 'EmpZipcode',
    headerName: 'Zipcode',
    flex: 1,
  },
  {
    field: 'EmpPhone',
    headerName: 'Phone',
    flex: 1,
  },
  {
    field: 'Position',
    headerName: 'Position',
    flex: 1,
  },
  {
    field: 'HourlyRate',
    headerName: 'Hourly Rate',
    flex: 1,
  },
  {
    field: 'DateHired',
    headerName: 'Date Hired',
    flex: 1,
    renderCell: ({ row }) => {
      return <Typography>{fDate(row.DateHired.seconds * 1000)}</Typography>;
    },
  },
  {
    field: 'action',
    headerName: '',
    flex: 0,
    align: 'center',
    sortable: false,
    maxWidth: 30,
    editable: true,
    renderCell: ({ row }) => {
      const navigate = useNavigate();

      const handleEdit = (id: string) => {
        navigate(`/employee/edit/${id}`);
      };

      const handleRemove = async (id: string) => {
        const employeeDocRef = doc(employeeCol, id);
        await deleteDoc(employeeDocRef);
        toast.success('Delete success', {
          pauseOnHover: false,
        });
      };
      return (
        <Action
          row={row}
          handleEdit={() => handleEdit(row.id)}
          handleRemove={() => handleRemove(row.id)}
        />
      );
    },
  },
];
