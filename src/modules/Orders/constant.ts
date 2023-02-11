import { TextFieldType } from '../../shared/components/CustomForm/type';

export const textField: TextFieldType[] = [
  {
    id: 1,
    desc: 'Customers ID',
    name: 'CusID',
    type: 'text',
    select: true,
  },
  {
    id: 2,
    desc: 'Employee ID',
    name: 'EmpID',
    type: 'text',
    select: true,
  },
  {
    id: 3,
    desc: 'Order Date',
    name: 'OrderDate',
    type: 'date',
  },
  {
    id: 4,
    desc: 'Ship Date',
    name: 'ShipDate',
    type: 'date',
  },
];
