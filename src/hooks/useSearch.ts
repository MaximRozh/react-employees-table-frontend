import React from "react";

const useSearch = () => {
  const [searched, setSearched] = React.useState<string>("");

  const handleChangeSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.target.value;
      setSearched(searchValue);
    },
    []
  );

  const clearSearchValue = React.useCallback(() => {
    setSearched("");
  }, []);

  return {
    searched,
    handleChangeSearch,
    clearSearchValue,
  };
};

export default useSearch;
