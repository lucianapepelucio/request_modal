import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";

const DialogContent = withStyles((theme) => ({
  forceContent: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  forceActions: {
    margin: 0,
    padding: theme.spacing(2),
  },
}))(MuiDialogActions);

export default function ForceContent({ onClose }) {
 
  const handleForceEdit = () => {
    // adicionar a lógica para forçar a edição
  };

  const handleCloseForceEditModal = () => {
    onClose();
  }

  return (
    <div>
      <DialogContent>
        <Typography>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <p><strong>Atenção!</strong></p>
          <p>É recomendado solicitar a edição da matéria e aguardar. Somente force a edição em <strong>situações necessárias.</strong></p>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleCloseForceEditModal} color="default">
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleForceEdit}
        >
          Forçar edição
        </Button>
      </DialogActions>
    </div>
  );
}



