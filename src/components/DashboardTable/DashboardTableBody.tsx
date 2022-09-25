import React from "react";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledTableCell } from "./style";
import { TableColumn } from "../../types/TableColumn";
import { ConfirmDialogType } from "../../types/ConfirmDialogType";
import { EmployeeModel } from "../../models/EmployeeModel";

interface DashboardTableBodyProps {
  setConfirmDialog: (value: ConfirmDialogType) => void;
  userRowsPerPage: EmployeeModel[];
  columns: TableColumn[];
  handleDelete: (id: string) => void;
  handleEdit: (value: EmployeeModel) => void;
}

const DashboardTableBody: React.FC<DashboardTableBodyProps> = ({
  setConfirmDialog,
  userRowsPerPage,
  columns,
  handleEdit,
  handleDelete,
}) => {
  return (
    <TableBody>
      {userRowsPerPage?.map((row: any, index: number): JSX.Element => {
        return (
          <TableRow hover tabIndex={-1} key={row._id}>
            <TableCell align="center">{index + 1}</TableCell>
            {columns.map((column) => {
              const value = row[column.id];
              return (
                <StyledTableCell key={column.id} align={column.align}>
                  {column.format ? column.format(value) : value}
                </StyledTableCell>
              );
            })}
            <StyledTableCell align="center">
              <EditIcon
                sx={{ marginRight: "10px", cursor: "pointer" }}
                onClick={() => handleEdit(row)}
              />
              <DeleteIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setConfirmDialog({
                    title: `Are you sure to delete ${row.fullName}`,
                    onConfirm: () => handleDelete(row._id),
                  });
                }}
              />
            </StyledTableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default DashboardTableBody;
