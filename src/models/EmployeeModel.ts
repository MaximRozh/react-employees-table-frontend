export interface EmployeeModel {
  firstName: string;
  lastName: string;
  birthYear: string;
  position: string;
  salary: number | null;
  _id: string;
  fullName?: string;
}

export interface ListResponse {
  currentPage: number;
  numberOfPages: number;
  total: number;
  employees: EmployeeModel[];
}
