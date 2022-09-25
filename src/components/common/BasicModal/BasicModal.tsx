import React from "react";
import Modal from "@mui/material/Modal";
import { StyledBoxModal, StyledTypographyModal } from "./style";

interface BasicModalProps {
  openModal: boolean;
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const BasicModal: React.FC<BasicModalProps> = ({
  openModal,
  onClose,
  children,
  title,
}) => {
  return (
    <Modal
      open={openModal}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ padding: "10px" }}
    >
      <StyledBoxModal>
        {title ? (
          <StyledTypographyModal
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {title}
          </StyledTypographyModal>
        ) : null}
        {children}
      </StyledBoxModal>
    </Modal>
  );
};

export default BasicModal;
