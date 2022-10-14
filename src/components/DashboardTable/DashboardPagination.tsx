import React from "react";
import { TablePagination } from "@mui/material";

interface DashboardPaginationProps {
  total: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (e: any, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DashboardPagination: React.FC<DashboardPaginationProps> = ({
  total,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, 100]}
      component="div"
      count={total}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
};

export default React.memo(DashboardPagination);
