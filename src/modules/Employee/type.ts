export interface EmployeeType {
  id?: string;
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
  action?: boolean;
}

export interface EmployeeIDType {
  id: string;
}
