import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const StyledBoxModal = styled(Box)(({ theme }: any): any => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: 500,
    backgroundColor: "white",
    border: `1px solid ${theme.palette.greenMainColor}`,
    boxShadow: 24,
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  };
});

export const StyledTypographyModal = styled(Typography)(({ theme }) => ({
  marginBottom: "10px",
  fontSize: "22px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
})) as typeof Typography;
