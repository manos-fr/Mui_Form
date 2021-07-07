import { FiberPinRounded } from "@material-ui/icons";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles, Typography } from "@material-ui/core";
import Controls from "./controls/Controls";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  dialogWraper: {
    padding: theme.spacing(2),
    position: "absolut",
    top: theme.spacing(5),
  },
}));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles;

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWraper }}
    >
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography style={{ flexGrow: 1 }} variant="h6" component="div">
            {title}
          </Typography>
          <Controls.ActionButton color="secondary" text="X">
            <CloseIcon />
          </Controls.ActionButton>
        </div>
        <DialogContent dividers>{children}</DialogContent>
      </DialogTitle>
    </Dialog>
  );
}
