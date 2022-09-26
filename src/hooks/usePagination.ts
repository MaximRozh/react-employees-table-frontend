import React from "react";

const usePagination = () => {
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onPageChange = (e: any, newPage: number) => setPage(newPage);
  return {
    page,
    rowsPerPage,
    handleChangeRowsPerPage,
    onPageChange,
  };
};
export default usePagination;
