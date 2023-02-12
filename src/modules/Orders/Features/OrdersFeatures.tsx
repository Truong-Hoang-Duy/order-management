import { Container } from '@mui/material';
import { addDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { CustomForm } from '../../../shared/components/CustomForm';
import { ordersCol } from '../../../shared/configs/firebase-config';
import { fFullDate } from '../../../shared/utils/formatDate';
import { textField } from '../constant';

interface initType {
  CusID: string;
  EmpID: string;
  OrderDate: Date;
  ShipDate: Date;
}

const OrdersFeatures = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  const initialValues = {
    CusID: '',
    EmpID: '',
    OrderDate: new Date('2020'),
    ShipDate: new Date('2020'),
  };

  const [value, setValue] = useState(initialValues);

  useEffect(() => {
    if (id) {
      getDocs(ordersCol)
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id === id) {
              setValue({
                ...doc.data(),
                OrderDate: new Date((doc.data().OrderDate as any).seconds * 1000),
                ShipDate: new Date((doc.data().ShipDate as any).seconds * 1000),
              });
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const validationSchema = yup.object({
    CusID: yup.string().required('Please select your customers ID'),
    EmpID: yup.string().required('Please select your employee ID'),
  });

  const handleClick = (values: initType, { resetForm }: { resetForm: () => void }) => {
    const checkOrderDate = fFullDate(new Date(values['OrderDate'])) !== '01/01/2020';
    const checkShipDate = fFullDate(new Date(values['ShipDate'])) !== '01/01/2020';
    if (pathname.includes('orders/create')) {
      if (checkOrderDate && checkShipDate) {
        addDoc(ordersCol, {
          CusID: values.CusID,
          EmpID: values.EmpID,
          OrderDate: new Date(values['OrderDate']),
          ShipDate: new Date(values['ShipDate']),
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
      const employeeDocRef = doc(ordersCol, id);
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

export default OrdersFeatures;
