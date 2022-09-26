export interface EmployeeModel {
  firstName: string;
  lastName: string;
  birthYear: string;
  position: string;
  salary: number | null;
  _id: string;
  fullName?: string;
}
