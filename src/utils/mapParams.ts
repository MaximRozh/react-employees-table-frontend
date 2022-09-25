export interface EmployeesRequestParams {
  page: number;
  perPage: number;
  search: string;
  sortBy: string;
  order: string;
}

export function cleanEmptyParams(a: Partial<EmployeesRequestParams>) {
  return Object.entries(a).reduce(
    (acc, [k, v]) => ({ ...acc, ...(v ? { [k]: v } : {}) }),
    {}
  );
}
