import { Typography } from "@mui/material";
import React from "react";

import { StyledPaper } from "./style";

interface FormWrapperProps {
  children: any;
  title?: string;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children, title }) => {
  return (
    <StyledPaper>
      {title ? (
        <Typography variant="h5" textAlign="center">
          {title}
        </Typography>
      ) : null}
      {children}
    </StyledPaper>
  );
};

export default FormWrapper;
