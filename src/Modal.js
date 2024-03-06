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
    margin: 0,
    padding: theme.spacing(3),
  },
  dialogTitle: {
    margin: 0,
    padding: theme.spacing(3),
  },
  moreButton: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(2),
    color: theme.palette.grey[500],
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
              <button onClick={onStartForce}> Forçar edição </button>
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




