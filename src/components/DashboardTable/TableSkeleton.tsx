import React from "react";
import { Skeleton, TableBody, TableCell, TableRow } from "@mui/material";

interface TableSceletonProps {
  isLoading: boolean;
}

const TableSkeleton: React.FC<TableSceletonProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <TableBody>
          {Array.from(new Array(5)).map((row: undefined, indexRow: number) => (
            <TableRow key={indexRow}>
              {Array.from(new Array(6)).map(
                (item: undefined, indexCell: number) => (
                  <TableCell key={indexCell}>
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      animation="wave"
                    />
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      ) : null}
    </>
  );
};

export default TableSkeleton;
