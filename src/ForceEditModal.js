import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from '@material-ui/icons/Person';
import Typography from "@material-ui/core/Typography";

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

export default function ForceContent() {
 
  const handleForceEdit = () => {
    // adicionar a lógica para forçar a edição
  };

  const handleCloseModal = () => {
  
  }

  return (
    <div>
        <DialogContent dividers>
          <Typography>
            <IconButton>
              <PersonIcon />
            </IconButton>
            <p><strong>Atenção!</strong></p>
            <p>É recomendado solicitar a edição da matéria e aguardar.</p>
            <p>Somente force a edição em <strong>situações necessárias.</strong></p>
          </Typography>
          <DialogActions>
            <Button variant="outlined" onClick={handleCloseModal} color="default">
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
    </div>
  );
}



