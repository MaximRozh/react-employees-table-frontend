import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { clearUserData } from "../../../store/auth/authSlilce";
import { useConfirmDialog } from "../../../hooks";
import { MyButton } from "../../UI";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const { isAuth, userInfo } = useAppSelector((state) => state.auth);
  const { setConfirmDialogData, renderConfirmDialog, closeConfirmDialog } =
    useConfirmDialog();

  const onClickLogout = () => {
    setConfirmDialogData({
      title: `Are you sure to leave your account?`,
      onConfirm: () => {
        dispatch(clearUserData());
        closeConfirmDialog();
        window.localStorage.removeItem("token");
      },
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "10px 0",
        borderBottom: "1px solid #e0e0e0",
        marginBottom: "30px",
      }}
    >
      <Container maxWidth="xl">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <div>Home</div>
          </Link>
          <div>
            {isAuth ? (
              <div
                style={{ display: "flex", gap: "15px", alignItems: "center" }}
              >
                <div>{userInfo?.fullName}</div>
                <MyButton
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  Log out
                </MyButton>
              </div>
            ) : (
              <>
                <Link to="/sign-in">
                  <MyButton variant="outlined" style={{ marginLeft: "10px" }}>
                    Sign in
                  </MyButton>
                </Link>
                <Link to="/sing-up">
                  <MyButton variant="contained" style={{ marginLeft: "10px" }}>
                    Sign Up
                  </MyButton>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
      {renderConfirmDialog()}
    </div>
  );
};

export default NavBar;
