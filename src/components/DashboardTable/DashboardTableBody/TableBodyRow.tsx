import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { EmployeeModel } from "../../../models/EmployeeModel";
import { TableColumn } from "../../../types/TableColumn";
import { ConfirmDialogType } from "../../../types/ConfirmDialogType";
import TableBodyRowAction from "./TableBodyRowAction";
import TableBodyCell from "./TableBodyCell";

interface DashboardTableBodyRowProps {
  columns: readonly TableColumn[];
  index: number;
  handleDelete: (id: string) => void;
  handleEdit: (employee: EmployeeModel) => void;
  setConfirmDialog: (value: ConfirmDialogType) => void;
}

const TableBodyRow: React.FC<DashboardTableBodyRowProps & EmployeeModel> = ({
  index,
  columns,
  setConfirmDialog,
  handleEdit,
  handleDelete,
  fullName,
  birthYear,
  position,
  salary,
  lastName,
  firstName,
  _id,
}) => {
  const employee: EmployeeModel = {
    fullName,
    birthYear,
    position,
    salary,
    lastName,
    firstName,
    _id,
  };

  const editHandler = () => {
    handleEdit(employee);
  };
  return (
    <TableRow hover tabIndex={-1} key={_id}>
      <TableCell align="center">{index + 1}</TableCell>
      {columns.map((column) => {
        const value: any = employee[column.id as keyof EmployeeModel];
        return <TableBodyCell key={column.id} {...column} value={value} />;
      })}
      <TableBodyRowAction
        handleEdit={editHandler}
        handleDelete={handleDelete}
        setConfirmDialog={setConfirmDialog}
        employeeId={_id}
        employeeName={fullName}
      />
    </TableRow>
  );
};

export default React.memo(TableBodyRow);
