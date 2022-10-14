import * as React from "react";
import { Paper, Table, TableContainer } from "@mui/material";
import { EmployeeModel } from "../models/EmployeeModel";
import {
  useSortTable,
  usePagination,
  useConfirmDialog,
  useDebounce,
  useSearch,
} from "../hooks";
import {
  COLUMNS,
  TableToolbar,
  DashboardTableBody,
  DashboardTableHeader,
  DashboardPagination,
} from "../components/DashboardTable";
import { UserTableFormModal } from "../components/modals";
import TableSkeleton from "../components/DashboardTable/TableSkeleton";
import { EmployeeService } from "../services/EmployeeService";

const defaultEdit = {
  isEdit: false,
  selectedEmployee: undefined,
} as {
  isEdit: boolean;
  selectedEmployee: EmployeeModel | undefined;
};

const DashboardTable = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [editMode, setEditMode] = React.useState(defaultEdit);

  const { searched, handleChangeSearch, clearSearchValue } = useSearch();
  const debouncedSearchValue = useDebounce<string>(searched.trim(), 300);

  const { order, orderBy, handleRequestSort } = useSortTable();
  const { page, rowsPerPage, handleChangeRowsPerPage, onPageChange } =
    usePagination();
  const { setConfirmDialogData, renderConfirmDialog, closeConfirmDialog } =
    useConfirmDialog();

  const { data, isLoading } = EmployeeService.useGetEmployeesQuery({
    page,
    perPage: rowsPerPage,
    search: debouncedSearchValue,
    order,
    sortBy: orderBy,
  });

  const employees = React.useMemo(
    () => data?.employees || [],
    [data?.employees]
  );
  const total = data?.total || 0;

  const [deleteEmployee] = EmployeeService.useDeleteEmployeeMutation();
  const [addEmployee] = EmployeeService.useAddEmployeeMutation();
  const [updateEmployee] = EmployeeService.useUpdateEmployeeMutation();

  const handleDelete = React.useCallback(
    (id: string) => {
      deleteEmployee(id);
      closeConfirmDialog();
    },
    [closeConfirmDialog, deleteEmployee]
  );

  const handleSubmit = React.useCallback(
    (user: EmployeeModel) => {
      if (editMode.isEdit) {
        updateEmployee(user);
        setEditMode(defaultEdit);
      } else {
        addEmployee(user);
        setOpenModal(false);
      }
    },
    [addEmployee, editMode.isEdit, updateEmployee]
  );

  const handleEdit = React.useCallback((employee: EmployeeModel) => {
    setEditMode({ isEdit: true, selectedEmployee: employee });
  }, []);

  const handleCloseModal = React.useCallback(() => {
    editMode.isEdit ? setEditMode(defaultEdit) : setOpenModal(false);
  }, [editMode.isEdit]);

  const handleOpenModal = React.useCallback(() => {
    setOpenModal(true);
  }, []);

  return (
    <Paper sx={{ width: "100%" }}>
      <TableToolbar
        onChange={handleChangeSearch}
        value={searched}
        clearValue={clearSearchValue}
        addNewUser={handleOpenModal}
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
      <DashboardPagination
        total={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {openModal || editMode.isEdit ? (
        <UserTableFormModal
          title={editMode.isEdit ? "Edit Employee info" : "New Employee"}
          onClose={handleCloseModal}
          submitHandler={handleSubmit}
          employeeInfo={editMode?.selectedEmployee}
        />
      ) : null}
      {renderConfirmDialog()}
    </Paper>
  );
};

export default DashboardTable;
