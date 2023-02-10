import { Box } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { DataGridPremium, GridToolbar } from '@mui/x-data-grid-premium';

interface TableProps<T extends Record<string, unknown>> {
  row: T[];
  columns: GridColDef<T>[];
}

const Table = <T extends Record<string, unknown>>(props: TableProps<T>) => {
  const { row, columns } = props;

  return (
    <Box m="-20px 20px 20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-main > div:nth-last-of-type(2)': {
            color: '#fff!important',
            width: '0!important',
            bottom: '0!important',
          },
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#3da58a',
            borderBottom: 'none',
            color: '#fff!important',
          },
          '& .MuiDataGrid-columnHeader span': {
            color: '#fff!important',
          },
          '& .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none!important',
          },
          '& .MuiButtonBase-root.MuiIconButton-root': {
            color: '#fff',
          },
          '& .MuiDataGrid-menuIcon.MuiDataGrid-menuOpen': {
            color: '#fff',
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: '#3da58a',
            color: '#fff',
          },
          '& .MuiTablePagination-root': {
            color: '#fff',
          },
          '& .MuiDataGrid-cell.MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-cell.MuiDataGrid-cell:focus-within': {
            outline: 'none',
          },
        }}
      >
        <DataGridPremium
          rows={row}
          columns={columns}
          disableColumnFilter
          disableDensitySelector
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Table;
