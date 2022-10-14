import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { MyButton } from "../../UI";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ClearIconWrapper,
  BoxWrapper,
} from "./style";

interface TableToolbarProp {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  clearValue: () => void;
  addNewUser: () => void;
}

const TableToolbar: React.FC<TableToolbarProp> = ({
  onChange,
  value,
  clearValue,
  addNewUser,
}) => {
  return (
    <Box sx={{ flexGrow: 1, background: "#078E96" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <BoxWrapper>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={value}
              onChange={onChange}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />

            {value && (
              <ClearIconWrapper onClick={clearValue}>
                <ClearIcon />
              </ClearIconWrapper>
            )}
          </Search>

          <MyButton onClick={addNewUser} variant="contained">
            Add new
          </MyButton>
        </BoxWrapper>
      </Toolbar>
    </Box>
  );
};
export default React.memo(TableToolbar);
