import React from "react";

type Order = "asc" | "desc";

const useSortTable = () => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<string>("");

  const handleRequestSort = React.useCallback(
    (property: string) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    },
    [orderBy, order]
  );

  return { order, orderBy, handleRequestSort };
};

export default useSortTable;
