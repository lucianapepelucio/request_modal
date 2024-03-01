import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(3),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
  
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
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
    padding: theme.spacing(1),
},
}))(MuiDialogActions);

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  
export default function ForceEditModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleClickModalOpen = () => {
        setIsModalOpen(true);
    }                        

    const handleClose = () => {
        setIsModalOpen(false);
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleForceEdit = () => {
        setSnackbarOpen(true);
        setIsModalOpen(false);
        // adicionar a lógica para forçar a edição
        // TAREFA DE OUTRO CARD DO JIRA
    };

    return (
        <div>
            <Dialog open={isModalOpen} onClose={handleClose} aria-labelledby="dialog-title">
                <DialogTitle
                    id="dialog-title"
                    onClose={handleClose}
                >
                    Forçar edição
                </DialogTitle>
                <DialogContent dividers>
                    <Typography>
                        <IconButton>
                            <PersonIcon />
                            <p><strong>Atenção!</strong></p>
                            <p>É recomendado solicitar a edição da matéria e aguardar.</p>
                            <p>Somente force a edição em <strong>situações necessárias.</strong></p>
                        </IconButton>
                    </Typography>
                    <DialogActions>
                    <Button variant="outlined" onClick={handleClose} color="default">
                        Voltar
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleForceEdit}
                    >
                        Forçar edição
                    </Button>
                </DialogActions>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity="success">
                    Agora você está editando o documento.
                </Alert>
            </Snackbar>
        </div>
    )
}




