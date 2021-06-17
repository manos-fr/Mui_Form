import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "16.6%",
    minWidth: "120px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

export default function SideMenu() {
  const classes = useStyles();

  return (
    <Box display={{ xs: "none", sm: "block" }}>
      <div className={classes.sideMenu}></div>;
    </Box>
  );
}
