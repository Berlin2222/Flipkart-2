import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constact/data";

const Wrapperbox = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;
const Container = styled(Box)`
  padding: 12px 8px;
  text-align:center;
`;

const Text = styled(Typography)`
  font-size: 15px;
  margin-left: 29px;
  font-weight:600;
  font-family:inhert;
`;
export const Navbar = () => {
  return (
    <Wrapperbox>
      {navData.map((data) => (
        <Container>
          <img src={data.url} alt="nav" />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Wrapperbox>
  );
};
