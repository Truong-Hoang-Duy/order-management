import { Container } from '@mui/material';
import { addDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { CustomForm } from '../../../shared/components/CustomForm';
import { employeeCol } from '../../../shared/configs/firebase-config';
import { fDateReverse, fFullDate } from '../../../shared/utils/formatDate';
import { textField } from '../constant';

interface initType {
  EmpFirstName: string;
  EmpLastName: string;
  EmpCity: string;
  DateHired: Date;
  EmpPhone: number;
  EmpState: string;
  EmpStreet: string;
  EmpZipcode: string;
  HourlyRate: number;
  Position: string;
}

const EmployeeFeatures = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  const initialValues = {
    EmpFirstName: '',
    EmpLastName: '',
    EmpPhone: 0,
    Position: '',
    EmpStreet: '',
    EmpCity: '',
    EmpState: '',
    EmpZipcode: '',
    HourlyRate: 0,
    DateHired: new Date('2020'),
  };
  const [value, setValue] = useState(initialValues);

  useEffect(() => {
    if (id) {
      getDocs(employeeCol)
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id === id) {
              setValue({
                ...doc.data(),
                DateHired: new Date((doc.data().DateHired as any).seconds * 1000),
              });
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object({
    EmpFirstName: yup.string().required('Please enter your first name'),
    EmpLastName: yup.string().required('Please enter your last name'),
    EmpPhone: yup.string().matches(phoneRegExp, 'Please enter your phone'),
    Position: yup.string().required('Please enter your position'),
    HourlyRate: yup.number().min(1, 'The minimum amount is one'),
    DateHired: yup.date().required('Please enter your date hired'),
    EmpStreet: yup.string().required('Please enter your street address'),
    EmpCity: yup.string().required('Please enter your city address'),
    EmpState: yup.string().required('Please enter your state'),
    EmpZipcode: yup.string().required('Please enter your zipcode'),
  });

  const handleClick = (values: initType, { resetForm }: { resetForm: () => void }) => {
    const checkNotDate = fFullDate(new Date(values['DateHired'])) !== '01/01/2020';
    if (pathname.includes('employee/create')) {
      if (checkNotDate) {
        addDoc(employeeCol, {
          EmpFirstName: values.EmpFirstName,
          EmpLastName: values.EmpLastName,
          EmpPhone: values.EmpPhone,
          Position: values.Position,
          HourlyRate: values.HourlyRate,
          DateHired: new Date(values['DateHired']),
          EmpStreet: values.EmpStreet,
          EmpCity: values.EmpCity,
          EmpState: values.EmpState,
          EmpZipcode: values.EmpZipcode,
        })
          .then(() => {
            toast.success('Create success', {
              pauseOnHover: false,
            });
            resetForm();
          })
          .catch((err) => {
            toast.error(err, {
              pauseOnHover: false,
            });
          });
      }
    } else {
      const employeeDocRef = doc(employeeCol, id);
      updateDoc(employeeDocRef, {
        ...values,
      });
      toast.success('Edit success', {
        pauseOnHover: false,
      });
    }
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <CustomForm
        textField={textField}
        initialValues={value}
        handleClick={handleClick}
        validationSchema={validationSchema}
      />
    </Container>
  );
};

export default EmployeeFeatures;
