import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import Box from "@mui/material/Box";
import { StyledHeaderTableCell } from "./style";
import { TableColumn } from "../../types/TableColumn";

interface DashboardTableHeaderProps {
  columns: TableColumn[];
  createSortHandler: any;
  orderBy: string;
  order: "asc" | "desc";
}

const DashboardTableHeader: React.FC<DashboardTableHeaderProps> = ({
  columns,
  createSortHandler,
  orderBy,
  order,
}) => {
  return (
    <TableHead>
      <TableRow>
        <StyledHeaderTableCell align="center">#</StyledHeaderTableCell>
        {columns.map((column) => (
          <StyledHeaderTableCell key={column.id} align={column.align}>
            {column.id === "salary" || column.id === "birthYear" ? (
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : "asc"}
                onClick={() => createSortHandler(column.id)}
              >
                {column.label}
                {orderBy === column.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              <div key={column.id}>{column.label}</div>
            )}
          </StyledHeaderTableCell>
        ))}
        <StyledHeaderTableCell align="center">Actions</StyledHeaderTableCell>
      </TableRow>
    </TableHead>
  );
};

export default DashboardTableHeader;
