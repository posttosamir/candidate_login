import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Typography } from "@mui/material";
import { useStyles } from "./style";
import { SIDEBAR_CONSTANTS } from "../../constants";

const Sidebar = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.sideBarWrapper}>
      <Drawer className={classes.sideBar} variant="permanent" anchor="left">
        <Toolbar>
          <Typography variant="h5">Logo</Typography>
        </Toolbar>
        <Divider />
        <List>
          {SIDEBAR_CONSTANTS.map((value, index) => (
            <ListItem key={value.title} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <value.icon />
                </ListItemIcon>
                <ListItemText>{value.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
