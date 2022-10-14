import React from "react";
import { Box, TableSortLabel } from "@mui/material";
import { StyledHeaderTableCell } from "./style";
import { visuallyHidden } from "@mui/utils";
import { TableColumn } from "../../../types/TableColumn";

interface TableHeaderCellProp {
  createSortHandler: (id: string) => void;
  orderBy: string;
  order: "asc" | "desc";
}
const TableHeaderCell: React.FC<TableHeaderCellProp & TableColumn> = ({
  createSortHandler,
  orderBy,
  order,
  id,
  align,
  label,
}) => {
  return (
    <StyledHeaderTableCell align={align}>
      {id === "salary" || id === "birthYear" ? (
        <TableSortLabel
          active={orderBy === id}
          direction={orderBy === id ? order : "asc"}
          onClick={() => createSortHandler(id)}
        >
          {label}
          {orderBy === id ? (
            <Box component="span" sx={visuallyHidden}>
              {order === "desc" ? "sorted descending" : "sorted ascending"}
            </Box>
          ) : null}
        </TableSortLabel>
      ) : (
        <div key={id}>{label}</div>
      )}
    </StyledHeaderTableCell>
  );
};

export default TableHeaderCell;
