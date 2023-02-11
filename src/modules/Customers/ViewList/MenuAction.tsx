import { GridColDef } from '@mui/x-data-grid';
import { deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Action } from '../../../shared/components/Action';
import { customersCol } from '../../../shared/configs/firebase-config';

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
  },
  {
    field: 'CustFirstName',
    headerName: 'First Name',
    flex: 1,
    cellClassName: 'name-column--cell',
  },
  {
    field: 'CustLastName',
    headerName: 'Last Name',
    flex: 1,
    cellClassName: 'name-column--cell',
  },
  {
    field: 'CustStreet',
    headerName: 'Street',
    flex: 1,
  },
  {
    field: 'CustCity',
    headerName: 'City',
    flex: 1,
  },
  {
    field: 'CustState',
    headerName: 'State',
    flex: 1,
  },
  {
    field: 'CustZipcode',
    headerName: 'Zipcode',
    flex: 1,
  },
  {
    field: 'CustPhone',
    headerName: 'Phone',
    flex: 1,
  },
  {
    field: 'CustEmail',
    headerName: 'Email',
    flex: 1,
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
        navigate(`/customers/edit/${id}`);
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
