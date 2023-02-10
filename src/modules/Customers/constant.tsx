import { GridColDef } from '@mui/x-data-grid';
import { Action } from '../../shared/components/Action';

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
    headerName: 'Stress',
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
      return <Action row={row} />;
    },
  },
];
