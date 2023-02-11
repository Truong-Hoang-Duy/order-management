import { Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Action } from '../../../shared/components/Action';
import { customersCol } from '../../../shared/configs/firebase-config';
import { fDate } from '../../../shared/utils/formatDate';

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
  },
  {
    field: 'CusID',
    headerName: 'Customers ID',
    flex: 1,
    cellClassName: 'name-column--cell',
  },
  {
    field: 'EmpID',
    headerName: 'Employee ID',
    flex: 1,
    cellClassName: 'name-column--cell',
  },
  {
    field: 'OrderDate',
    headerName: 'Order Date',
    flex: 1,
    renderCell: ({ row }) => {
      return <Typography>{fDate(row.OrderDate.seconds * 1000)}</Typography>;
    },
  },
  {
    field: 'ShipDate',
    headerName: 'Ship Date',
    flex: 1,
    renderCell: ({ row }) => {
      return <Typography>{fDate(row.ShipDate.seconds * 1000)}</Typography>;
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
        navigate(`/orders/edit/${id}`);
      };

      const handleRemove = async (id: string) => {
        const customersDocRef = doc(customersCol, id);
        await deleteDoc(customersDocRef);
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
