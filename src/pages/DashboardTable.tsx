import * as React from "react";
import { Paper, Table, TableContainer, TablePagination } from "@mui/material";
import { EmployeeModel } from "../models/EmployeeModel";
import { useSortTable, usePagination, useConfirmDialog } from "../hooks";
import {
  COLUMNS,
  DashboardTableBody,
  DashboardTableHeader,
  TableToolbar,
} from "../components/DashboardTable";
import { UserTableFormModal } from "../components/modals";
import TableSkeleton from "../components/DashboardTable/TableSkeleton";
import useDebounce from "../hooks/useDebaunce";
import { EmployeeService } from "../services/EmployeeService";

const defaultEdit = {
  isEdit: false,
  selectedUser: undefined,
};

const DashboardTable = () => {
  const [searched, setSearched] = React.useState("");
  const debouncedValue = useDebounce<string>(searched.trim(), 300);

  const [openModal, setOpenModal] = React.useState(false);
  const [editMode, setEditMode] = React.useState<{
    isEdit: boolean;
    selectedUser: EmployeeModel | undefined;
  }>(defaultEdit);

  const { order, orderBy, handleRequestSort } = useSortTable();
  const { page, rowsPerPage, handleChangeRowsPerPage, onPageChange } =
    usePagination();
  const { setConfirmDialogData, renderConfirmDialog, closeConfirmDialog } =
    useConfirmDialog();

  const { data, isLoading } = EmployeeService.useGetEmployeesQuery({
    page,
    perPage: rowsPerPage,
    search: debouncedValue,
    order,
    sortBy: orderBy,
  });
  const employees = data?.employees || [];
  const total = data?.total || 0;

  const [deleteEmployee] = EmployeeService.useDeleteEmployeeMutation();
  const [addEmployee] = EmployeeService.useAddEmployeeMutation();
  const [updateEmployee] = EmployeeService.useUpdateEmployeeMutation();

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearched(searchValue);
  };

  const handleDelete = (id: string) => {
    deleteEmployee(id);
    closeConfirmDialog();
  };

  const handleSubmit = (user: EmployeeModel) => {
    if (editMode.isEdit) {
      updateEmployee(user);
      setEditMode(defaultEdit);
    } else {
      addEmployee(user);
      setOpenModal(false);
    }
  };

  const handleEdit = (user: EmployeeModel) => {
    setEditMode({ isEdit: true, selectedUser: user });
  };

  const editClose = () => {
    setEditMode(defaultEdit);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableToolbar
        onChange={handleChangeSearch}
        value={searched}
        clearValue={() => setSearched("")}
        addNewUser={() => setOpenModal(true)}
      />
      <TableContainer sx={{ maxHeight: "540px" }}>
        <Table stickyHeader aria-label="sticky table">
          <DashboardTableHeader
            columns={COLUMNS}
            createSortHandler={handleRequestSort}
            orderBy={orderBy}
            order={order}
          />
          <DashboardTableBody
            setConfirmDialog={setConfirmDialogData}
            userRowsPerPage={employees}
            columns={COLUMNS}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <TableSkeleton isLoading={isLoading} />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {openModal || editMode.isEdit ? (
        <UserTableFormModal
          title={editMode.isEdit ? "Edit Employee info" : "New Employee"}
          onClose={() => (editMode.isEdit ? editClose() : setOpenModal(false))}
          submitHandler={handleSubmit}
          userInfo={editMode?.selectedUser}
        />
      ) : null}
      {renderConfirmDialog()}
    </Paper>
  );
};

export default DashboardTable;
