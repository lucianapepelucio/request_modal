import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";

const styles = (theme) => ({
  editContent: {
    padding: theme.spacing(2),
  },
  editActions: {
    margin: 0,
    padding: theme.spacing(2),
  },
});

const EditContent = withStyles(styles)(({ onClose, classes }) => {
 
  const handleRequestEdit = () => {
    // adicionar a lógica para solicitar a edição
    // ver como funciona no Multicontent
  };

  const handleCloseEditModal = () => {
    onClose();
  }

  return (
    <div>
      <DialogContent className={classes.editContent}>
        <Typography>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <strong>(Nome do solicitante)</strong>, você está solicitando a
          edição para <strong>(nome do editor)</strong>
          <strong>((email do editor))</strong>. Pode levar algum tempo até sua
          solicitação ser aceita.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.editActions}>
        <Button variant="outlined" onClick={handleCloseEditModal} color="default">
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
    </div>
  );
});

export default EditContent;

