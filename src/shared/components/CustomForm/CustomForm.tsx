import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { getDocs } from 'firebase/firestore';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { CustomersIDType } from '../../../modules/Customers/type';
import { EmployeeIDType } from '../../../modules/Employee/type';
import { customersCol, employeeCol } from '../../configs/firebase-config';
import { fDateReverse } from '../../utils/formatDate';
import { Heading } from '../Heading';

interface CustomFormProps<T extends Record<string, unknown>> {
  textField: {
    id: number;
    desc: string;
    name: string;
    type: string;
    select?: boolean;
  }[];
  handleClick: (values: T, props: { resetForm: () => void }) => void;
  initialValues: T;
  validationSchema: yup.ObjectSchema<{}, yup.AnyObject, {}, ''>;
}

const CustomForm = <T extends Record<string, unknown>>(props: CustomFormProps<T>) => {
  const { pathname } = useLocation();
  const formTitle =
    pathname.split('/')[2].charAt(0).toUpperCase() +
    pathname.split('/')[2].slice(1) +
    ' ' +
    pathname.split('/')[1];

  const { textField, initialValues, handleClick, validationSchema } = props;

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    onSubmit: handleClick,
    validationSchema,
    enableReinitialize: true,
  });

  const [employee, setEmployee] = useState<EmployeeIDType[]>([]);
  useEffect(() => {
    getDocs(employeeCol)
      .then((snapshot) => {
        const employee: EmployeeIDType[] = [];
        snapshot.docs.forEach((doc) => {
          employee.push({
            id: doc.id,
          });
        });
        setEmployee(employee);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [employee]);

  const [customers, setCustomers] = useState<CustomersIDType[]>([]);
  useEffect(() => {
    getDocs(customersCol)
      .then((snapshot) => {
        const customer: CustomersIDType[] = [];
        snapshot.docs.forEach((doc) => {
          customer.push({
            id: doc.id,
          });
        });
        setCustomers(customer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customers]);

  return (
    <form onSubmit={handleSubmit}>
      <Heading>{formTitle}</Heading>
      <div className="w-full flex gap-8 flex-wrap">
        {textField.map((item) => {
          // check error in input
          const checkTypeof =
            typeof values[`${item.name}`] === 'string' ||
            typeof values[`${item.name}`] === 'number';

          const checkDataTypes =
            (values[`${item.name}`] as string).length === 0 ||
            (values[`${item.name}`] as number) === 0;

          const checkTouched = !!touched[`${item.name}`];
          //

          // message error in div
          const checkMessageError = touched[`${item.name}`] && errors[`${item.name}`];
          let checkMessageDateHired = null;
          if (item.name === 'DateHired' || item.name === 'OrderDate' || item.name === 'ShipDate') {
            checkMessageDateHired =
              new Date(values[`${item.name}`] as Date).getFullYear() === 2020 &&
              touched[`${item.name}`];
          }
          //

          const valueInput =
            item.name === 'DateHired' || item.name === 'OrderDate' || item.name === 'ShipDate'
              ? fDateReverse(values[`${item.name}`] as number)
              : values[`${item.name}`];

          if (!item.select) {
            return (
              <div className="w-[calc(50%-32px)]" key={item.id}>
                <TextField
                  type={item.type}
                  name={item.name}
                  id={item.name}
                  label={item.desc}
                  variant="outlined"
                  className="w-full"
                  onChange={handleChange}
                  value={valueInput}
                  error={(checkTypeof && checkDataTypes && checkTouched) || !!checkMessageDateHired}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {checkMessageError || checkMessageDateHired ? (
                  <div className="text-red">
                    {(errors[`${item.name}`] as string) || 'Please enter your date'}
                  </div>
                ) : null}
              </div>
            );
          } else {
            return (
              <div className="w-[calc(50%-32px)]" key={item.id}>
                <FormControl fullWidth>
                  <InputLabel id={`${item.name}-select-label`}>{item.desc}</InputLabel>
                  <Select
                    labelId={`${item.name}-select-label`}
                    id={item.name}
                    value={valueInput}
                    label="Age"
                    onChange={handleChange}
                    name={item.name}
                    error={
                      (checkTypeof && checkDataTypes && checkTouched) || !!checkMessageDateHired
                    }
                  >
                    {item.name === 'EmpID'
                      ? employee.map((emp) => (
                          <MenuItem key={emp.id} value={emp.id}>
                            {emp.id}
                          </MenuItem>
                        ))
                      : customers.map((cus) => (
                          <MenuItem key={cus.id} value={cus.id}>
                            {cus.id}
                          </MenuItem>
                        ))}
                  </Select>
                  {checkMessageError || checkMessageDateHired ? (
                    <div className="text-red">
                      {(errors[`${item.name}`] as string) || 'Please enter your date hired'}
                    </div>
                  ) : null}
                </FormControl>
              </div>
            );
          }
        })}
      </div>
      <div className="my-5">
        <Button
          type="submit"
          sx={{ fontSize: '20px' }}
          variant="contained"
          className="w-[calc(100%-32px)] h-14"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CustomForm;
