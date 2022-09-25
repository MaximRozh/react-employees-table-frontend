import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { ConfirmDialogType } from "../../types/ConfirmDialogType";
import { MyButton } from "../UI";

interface ConfirmDialogProps {
  confirmDialog: ConfirmDialogType;
  setConfirmDialog: (val: ConfirmDialogType) => void;
  isOpen: boolean;
  closeConfirmDialog: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  confirmDialog,
  setConfirmDialog,
  isOpen,
  closeConfirmDialog,
  ...rest
}) => {
  return (
    <Dialog open={isOpen} {...rest}>
      <DialogTitle>
        <IconButton
          disableRipple
          sx={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <WarningAmberIcon sx={{ fontSize: "50px" }} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions>
        <MyButton onClick={closeConfirmDialog}>No</MyButton>
        <MyButton color="secondary" onClick={confirmDialog.onConfirm}>
          Yes
        </MyButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
