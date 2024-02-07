import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { useStyles } from "./style";
import Sidebar from "../sidebar";

const Protected = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.mainWrapper}>
      <Box component="aside" className={classes.sideBarWrapper}>
        <Sidebar />
      </Box>
      <Box component="main" className={classes.mainContentWrapper}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Protected;
