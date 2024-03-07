import React, { useState } from "react";
import EditContent from "./EditModal";
import ForceContent from "./ForceEditModal";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = (theme) => ({
  dialog: {
    //width: 560,
    border: 1,
    borderRadius: 6,
  },
  dialogTitle: {
    position: "relative",
    //width: 560,
    fontSize: 28,
    justify: "space-between",
    padding: 24,
    fontWeight: "bold",
  },
  moreButton: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(2),
    color: theme.palette.grey[500],
  },
  list: {
    listStyleType: "none",
    padding: 0,
    height: 36,
    width: 107,
  },
  forceButton: {
    width: 107,
    height: 36,
    borderRadius: 4,
    border: "1px solid rgba(0, 0, 0, 0.23)",
    variant: "outlined",
    color: "default",
    padding: 0,
    backgroundColor: "transparent",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, isForcing, onStartForce, ...other } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(true);
  }

  return (
    <MuiDialogTitle disableTypography className={classes.dialogTitle} {...other}>
      <Typography variant="h6">{children}</Typography>
        {!isForcing && (
          <>
            <IconButton
            id="menubutton"
            aria-haspopup="true"
            aria-controls="menu"
            className={classes.moreButton}
            onClick={handleMenuClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu 
              id="menu"
              anchorEl={document.getElementById("menubutton")}
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
              MenuListProps={{
                'aria-labelledby': 'menubutton',
              }}
            >
              <ul className={classes.list}>
                <li>
                  <button onClick={onStartForce} className={classes.forceButton}> Forçar edição </button>
                </li>
              </ul>
            </Menu>
          </>
        )}
    </MuiDialogTitle>
  );
});

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const CustomizedDialogs = withStyles(styles)(({ classes }) => {
  const [open, setOpen] = useState(false);
  const [isForcing, setIsForcing] = useState(false);
  //const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSnackbarClose = () => {
  //   setSnackbarOpen(false);
  // };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Solicitar edição (cabeçograma)
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={classes.dialog}
      >
        <DialogTitle 
          onStartForce= {() => setIsForcing(true)}
          isForcing={isForcing}
          id="customized-dialog-title" 
        >
          {isForcing ? "Forçar edição" : "Solicitando edição"}
        </DialogTitle>
        <Divider />
        {isForcing ? <ForceContent onClose={handleClose}/> : <EditContent onClose={handleClose}/>}
      </Dialog>

      {/* <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="info">
          Solicitação de edição enviada. Aguarde a resposta!
        </Alert>
      </Snackbar> */}

    </div>
  );
}); 

export default CustomizedDialogs;




