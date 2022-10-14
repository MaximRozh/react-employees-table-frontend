import React from "react";
import TableBody from "@mui/material/TableBody";
import { TableColumn } from "../../../types/TableColumn";
import { ConfirmDialogType } from "../../../types/ConfirmDialogType";
import { EmployeeModel } from "../../../models/EmployeeModel";
import TableBodyRow from "./TableBodyRow";

interface DashboardTableBodyProps {
  setConfirmDialog: (value: ConfirmDialogType) => void;
  userRowsPerPage: EmployeeModel[];
  columns: readonly TableColumn[];
  handleDelete: (id: string) => void;
  handleEdit: (employee: EmployeeModel) => void;
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
      {userRowsPerPage?.map(
        (employee: EmployeeModel, index: number): JSX.Element => (
          <TableBodyRow
            key={employee._id}
            {...employee}
            index={index}
            columns={columns}
            setConfirmDialog={setConfirmDialog}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )
      )}
    </TableBody>
  );
};

export default React.memo(DashboardTableBody);
