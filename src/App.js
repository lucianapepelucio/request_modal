import React from "react";
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

const styles = (theme) => ({
  titleModal: {
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
  return (
    <MuiDialogTitle disableTypography className={classes.titleModal} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.moreButton}
          onClick={onClose}
        >
          <MoreVertIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
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
            <Button variant="contained" color="primary">
              Solicitar edição
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

  