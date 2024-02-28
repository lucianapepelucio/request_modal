import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const styles = (theme) => ({
  root: {
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
  const { children, classes, onClose, ...other } = props;
  //const [showButton, setShowButton] = useState(false);

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <>
          <IconButton
            aria-label="close"
            className={classes.moreButton}
            onClick={onClose}
          >
            <MoreVertIcon />
          </IconButton>
        </>
      ) : null}
      {/* {showButton && (
        <Button variant="outlined" color="default">
          Forçar edição
        </Button>
      )} */}
    </MuiDialogTitle>
  );
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleRequestEdit = () => {
    setSnackbarOpen(true);
    setOpen(false);
    // adicionar a lógica para solicitar a edição
    // ver como funciona no Multicontent
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Solicitar edição (cabeçograma)
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} >
          Solicitando edição 
        </DialogTitle>
        <DialogContent dividers>
          <Typography>
            <IconButton>
              <PersonIcon />
            </IconButton>
            <strong>(nome do solicitante)</strong>, você está solicitando a
            edição para <strong>(nome do editor)</strong>
            <strong>(email do editor)</strong>. Pode levar algum tempo até sua
            solicitação ser aceita.
          </Typography>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose} color="default">
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRequestEdit}
            >
              Solicitar edição
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="info">
          Solicitação de edição enviada. Aguarde a resposta!
        </Alert>
      </Snackbar>
    </div>
  );
}
