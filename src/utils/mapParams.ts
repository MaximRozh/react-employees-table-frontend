export interface EmployeesRequestParams {
  page: number;
  perPage: number;
  search: string;
  sortBy: string;
  order: string;
}

export function cleanEmptyParams<
  T extends object & Partial<EmployeesRequestParams>
>(params: T) {
  return Object.entries(params).reduce(
    (acc, [k, v]) => ({ ...acc, ...(v ? { [k]: v } : {}) }),
    {}
  );
}
