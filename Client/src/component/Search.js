import { InputBase, Box, styled } from "@mui/material";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";

const Serchcon = styled(Box)`
  background: #fff;
  width: 38%;
  borer-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputseachBase = styled(InputBase)`
  padding-left: 5%;
  width: 100%;
  font-size: unset;
`;

const Searchicon = styled(Box)`
  color: blue;
  padding: 5px;
  display:flex
`;
export const Search = () => {
  return (
    <Serchcon>
      <InputseachBase placeholder="Search for Product , Brands, And more" />
      <Searchicon>
        <SearchIcon />
      </Searchicon>
    </Serchcon>
  );
};
