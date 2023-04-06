import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import { Search } from "./Search";
import { Custombtn } from "./Custombtn";
import React from "react";
import "../App.css";

const CustomButtonwrapper = styled(Box)`
//   margin: 0 5% 0 auto;
  align-items:center
`;

export default function header() {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <div>
      <AppBar style={{ background: "#2874f0", height: "55px" }}>
        <Toolbar style={{ minHeight: 55 }}>
          <Box className="head">
            <img src={logoURL} alt="logo" className="logo-img" />
            <Box style={{ display: "flex" }}>
              <Typography className="base-h">
                Explore&nbsp; <span style={{ color: "yellow" }}>plus</span>
              </Typography>
              <img src={subURL} alt="sublogo" className="sub-logo" />
            </Box>
          </Box>
          <Search />
          <CustomButtonwrapper>
            <Custombtn />
          </CustomButtonwrapper>
        </Toolbar>
      </AppBar>
    </div>
  );
}
