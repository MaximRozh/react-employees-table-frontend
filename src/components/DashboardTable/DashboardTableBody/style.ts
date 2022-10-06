import TableCell from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

export const StyledTableCell = styled(TableCell)(({ theme }) => {
  return {
    minWidth: "120px",
  };
}) as typeof TableCell;
