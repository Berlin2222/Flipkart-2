import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import { TextField, Button, Typography, styled } from "@mui/material/";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 35vh;
  height: 70vh;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
    margin-top: 30px;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 45px 35px;
  flex: 1;
  & > div,
  & > Button & > p {
    margin-top: 50px;
  }
`;

const Loginbtn = styled(Button)`
//   background: #fb641b;
  text-transform: none;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  &hover {
    background-color: orange !important;
`;

const Requestnbtn = styled(Button)`
  //   background: #2874f0;
  text-transform: none;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const Text = styled(Typography)`
  font-size: 13px;
  color: #878787;
`;

const accountInitialvalues = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "  Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new Here",
    subheading: " Sing up with Mobile number and get started",
  },
};

const signupInitialvalues = {
  firstName: "",
  lastName: "",
  Email: "",
  password: "",
  phone: "",
};
export const Login = ({ open, setopen }) => {
  const [account, toggleAccount] = useState(accountInitialvalues.login);

  const [singup, setSignup] = useState(signupInitialvalues);

  const handleclose = () => {
    setopen(false);
    toggleAccount(accountInitialvalues.login);
  };

  const toogleSignup = () => {
    toggleAccount(accountInitialvalues.signup);
  };

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setSignup({ ...singup, [e.target.name]: e.target.value });
    console.log(singup);
  };

  const signupUser = () => {
    
  }
  return (
    <Dialog
      open={open}
      onClose={handleclose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subheading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField label="Enter Email or Number" variant="standard" />
              <TextField label="Enter password" variant="standard" />
              <Text style={{ marginTop: "20px" }}>
                By continuing , you agree to Flipkart,s Terms of Use Privacy
                Policy
              </Text>
              <Loginbtn style={{ background: "#fb641b" }}>{Login}</Loginbtn>
              <Typography style={{ marginTop: "20px", textAlign: "center" }}>
                OR
              </Typography>
              <Requestnbtn style={{ marginTop: "20px", background: "#2874f0" }}>
                Request OTP
              </Requestnbtn>
              <Typography
                style={{
                  marginTop: "20px",
                  fontSize: "14px",
                  textAlign: "center",
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "#2874f0",
                }}
                onClick={() => toogleSignup()}
              >
                New to Flipkart ? Create Account Here
              </Typography>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                label="Enter firstName"
                variant="standard"
                name="firstName"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                label="Enter lastName"
                variant="standard"
                name="lastName"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                label="Enter Email"
                variant="standard"
                name="Email"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                label="Enter password"
                variant="standard"
                name="password"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                label="phone"
                variant="standard"
                name="phone"
                onChange={(e) => onInputChange(e)}
              />

              <Loginbtn onClick={()=> signupUser()} style={{ background: "#2874f0", marginTop: "20px" }}>
                Continue
              </Loginbtn>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};
