import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Login } from "./Login/Login";
import { useState } from "react";

const Wrapper = styled(Box)`
  display: flex;
  margin-left: 60px;
  & > button,
  & > p,
  & > div {
    margin-right: 10px;
    font-size: 14px;
    align-items: center;
  }
`;
const Loginbtn = styled(Button)`
  background: white;
  color: #2874f0;
  text-transform: none;
  border-radius: 2px;
  box-shadow: none;
  height: 32px;
  padding: 5px 35px;
`;
export const Custombtn = () => {

  const [open, setopen] = useState(false);

  const openDailog = () => {
    setopen(true);
  }
  return (
    <Wrapper>
      <Loginbtn variant="contained" onClick={() => openDailog()}>
        Login
      </Loginbtn>
      <Typography style={{ marginTop: "4px", width: 135 }}>
        Become a seller
      </Typography>
      <Typography style={{ marginTop: "4px", width: 135 }}>More</Typography>

      <Box style={{ display: "flex" }}>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Box>
      <Login open={open} setopen={setopen} />
    </Wrapper>
  );
};
