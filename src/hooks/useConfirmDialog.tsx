import React from "react";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { ConfirmDialogType } from "../types/ConfirmDialogType";

const defaultConfirm = {
  isOpen: false,
  title: "",
  subTitle: "",
};

const useConfirmDialog = () => {
  const [confirmDialog, setConfirmDialog] =
    React.useState<ConfirmDialogType>(defaultConfirm);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const setConfirmDialogData = React.useCallback(
    (data: ConfirmDialogType) => {
      setConfirmDialog(data);
      setIsOpen(true);
    },
    [setConfirmDialog]
  );

  const closeConfirmDialog = React.useCallback(
    () => setIsOpen(false),
    [setIsOpen]
  );

  const renderConfirmDialog = React.useCallback(
    (props?: any) => (
      <ConfirmDialog
        {...props}
        isOpen={isOpen}
        closeConfirmDialog={closeConfirmDialog}
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialogData}
      />
    ),
    [isOpen, confirmDialog, setConfirmDialogData, closeConfirmDialog]
  );

  return {
    setConfirmDialog,
    renderConfirmDialog,
    closeConfirmDialog,
    setConfirmDialogData,
  };
};

export default useConfirmDialog;
