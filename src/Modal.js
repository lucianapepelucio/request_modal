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
    // width: 560,
    //height: 296,
    top: 390,
    left: 440,
    borderRadius: 6,
    border: 1,
  },
  dialogTitle: {
    position: "relative",
    //width: 560,
    justify: "space-between",
    padding: 24,
  },
  titleText: {
    width: 166,
    height: 28,
    fontWeight: "bold",
    fontSize: 20,
    color: "#212121",
    lineHeight: "28px",
},
  moreButton: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(2),
    color: theme.palette.grey[600],
    // width: 25.2,
    // height: 24,
    // top: 414,
    // left: 951,
  },
  list: {
    listStyleType: "none",
    padding: 0, // verificar porque aparece como padding: 8
  },
  forceButton: {
    width: 131.21,
    height: 48,
    top: 443,
    left: 841,
    borderRadius: 4,
    border: 0,
    padding: 0,
    backgroundColor: "transparent",
    variant: "outlined",
    color: "default",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: "24px",
    letterSpacing: 0.15,
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
                  <button onClick={onStartForce} className={classes.forceButton}>
                     Forçar edição
                  </button>
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
          {isForcing 
            ? <span className={classes.titleText}>Forçar edição</span> 
            : <span className={classes.titleText}>Solicitando edição</span>
          }
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




