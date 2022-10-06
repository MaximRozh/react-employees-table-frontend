import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledTableCell } from "../style";
import { EmployeeModel } from "../../../models/EmployeeModel";
import { ConfirmDialogType } from "../../../types/ConfirmDialogType";

interface TableBodyRowActionProps {
  employeeId: string;
  employeeName?: string;
  handleDelete: (id: string) => void;
  handleEdit: (value: EmployeeModel | any) => void;
  setConfirmDialog: (value: ConfirmDialogType) => void;
}

const TableBodyRowAction: React.FC<TableBodyRowActionProps> = ({
  handleEdit,
  handleDelete,
  setConfirmDialog,
  employeeId,
  employeeName,
}) => {
  return (
    <StyledTableCell align="center">
      <EditIcon
        sx={{ marginRight: "10px", cursor: "pointer" }}
        onClick={() => handleEdit(employeeId)}
      />
      <DeleteIcon
        sx={{ cursor: "pointer" }}
        onClick={() => {
          setConfirmDialog({
            title: `Are you sure to delete ${employeeName}`,
            onConfirm: () => handleDelete(employeeId),
          });
        }}
      />
    </StyledTableCell>
  );
};

export default React.memo(TableBodyRowAction);
