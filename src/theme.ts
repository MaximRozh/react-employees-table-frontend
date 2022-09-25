import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    greenMainColor?: "#4DADA1";
  }
  interface PaletteOptions {
    greenMainColor?: "#4DADA1";
  }
}

const theme = createTheme({
  palette: {
    greenMainColor: "#4DADA1",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-containedPrimary": { backgroundColor: "#4DADA1" },
          "&.MuiButton-textPrimary": { color: "#4DADA1" },
          "&.Mui-disabled": { color: "#fff", backgroundColor: "gray" },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#4DADA1",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "yellow",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#4DADA1",
            },
          },
        },
      },
    },
  },
});

export default theme;
