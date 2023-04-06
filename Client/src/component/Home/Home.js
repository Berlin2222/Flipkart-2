import React from "react";
import { Navbar } from "./Navbar";
import { Banner } from "./banner";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Component = styled(Box)`
  padding:10px;
  background: #bdbdbd14;
`;

export const Home = () => {
  return (
    <>
      <Navbar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};
