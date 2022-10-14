import React from "react";
import { TableColumn } from "../../../types/TableColumn";
import { StyledTableCell } from "./style";

const TableBodyCell: React.FC<Omit<TableColumn, "id"> & { value: string }> = ({
  format,
  align,
  value,
}) => {
  return (
    <StyledTableCell align={align}>
      {format ? format(value) : value}
    </StyledTableCell>
  );
};

export default React.memo(TableBodyCell);
