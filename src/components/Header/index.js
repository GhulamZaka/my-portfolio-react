import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "./header.css";
import Navi from "../Nav/index";

function Header(props) {
  return (
    <AppBar className="title" position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Ghulam Mustafa Zaka
          <Navi setPage={props.setPage} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
