import { Container } from '@mui/material';
import { addDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { CustomForm } from '../../../shared/components/CustomForm';
import { customersCol } from '../../../shared/configs/firebase-config';
import { textField } from '../constant';

interface initType {
  CustFirstName: string;
  CustLastName: string;
  CustPhone: number;
  CustEmail: string;
  CustStreet: string;
  CustCity: string;
  CustState: string;
  CustZipcode: string;
}

const CustomersFeatures = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  const initialValues = {
    CustFirstName: '',
    CustLastName: '',
    CustPhone: 0,
    CustEmail: '',
    CustStreet: '',
    CustCity: '',
    CustState: '',
    CustZipcode: '',
  };

  const [value, setValue] = useState(initialValues);

  useEffect(() => {
    if (id) {
      getDocs(customersCol)
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id === id) {
              setValue(doc.data());
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object({
    CustFirstName: yup.string().required('Please enter your first name'),
    CustLastName: yup.string().required('Please enter your last name'),
    CustPhone: yup.string().matches(phoneRegExp, 'Please enter your phone'),
    CustEmail: yup.string().email('Invalid email address').required('Please enter your email'),
    CustStreet: yup.string().required('Please enter your street address'),
    CustCity: yup.string().required('Please enter your city address'),
    CustState: yup.string().required('Please enter your state'),
    CustZipcode: yup.string().required('Please enter your zipcode'),
  });

  const handleClick = (values: initType, { resetForm }: { resetForm: () => void }) => {
    if (pathname.includes('customers/create')) {
      addDoc(customersCol, {
        CustFirstName: values.CustFirstName,
        CustLastName: values.CustLastName,
        CustPhone: values.CustPhone,
        CustEmail: values.CustEmail,
        CustStreet: values.CustStreet,
        CustCity: values.CustCity,
        CustState: values.CustState,
        CustZipcode: values.CustZipcode,
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
    } else {
      const customersDocRef = doc(customersCol, id);
      updateDoc(customersDocRef, {
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

export default CustomersFeatures;
