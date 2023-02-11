import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Table } from '../../../shared/components/Table';
import { employeeCol } from '../../../shared/configs/firebase-config';
import { EmployeeType } from '../type';
import { columns } from './MenuAction';

const EmployeeView = () => {
  const [employee, setEmployee] = useState<EmployeeType[]>([]);

  useEffect(() => {
    getDocs(employeeCol)
      .then((snapshot) => {
        const employee: EmployeeType[] = [];
        snapshot.docs.forEach((doc) => {
          employee.push({
            ...doc.data(),
            id: doc.id,
            action: true,
          });
        });
        setEmployee(employee);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [employee]);
  return <Table row={employee} columns={columns} />;
};

export default EmployeeView;
