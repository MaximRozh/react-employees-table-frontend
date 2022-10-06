import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledHeaderTableCell } from "../style";
import { TableColumn } from "../../../types/TableColumn";
import TableHeaderCell from "./TableHeaderCell";

interface DashboardTableHeaderProps {
  columns: TableColumn[];
  createSortHandler: (id: string) => void;
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
          <TableHeaderCell
            key={column.id}
            createSortHandler={createSortHandler}
            orderBy={orderBy}
            order={order}
            {...column}
          />
        ))}
        <StyledHeaderTableCell align="center">Actions</StyledHeaderTableCell>
      </TableRow>
    </TableHead>
  );
};

export default React.memo(DashboardTableHeader);
