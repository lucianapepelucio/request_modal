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

export default function EditContent() {
 
  const handleRequestEdit = () => {
    // adicionar a lógica para solicitar a edição
    // ver como funciona no Multicontent
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
            <strong>(Nome do solicitante)</strong>, você está solicitando a
            edição para <strong>(nome do editor)</strong>
            <strong>((email do editor))</strong>. Pode levar algum tempo até sua
            solicitação ser aceita.
          </Typography>
          <DialogActions>
            <Button variant="outlined" onClick={handleCloseModal} color="default">
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
    </div>
  );
}



