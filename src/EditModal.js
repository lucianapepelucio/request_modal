import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";

const styles = () => ({
  editContent: {
    padding: "40px 24px",
    gap: 16,
  },
  editActions: {
    width: 544,  //544 + 16 + 16 = 560
    height: 36,  //36 + 16 + 16 = 68
    padding: "16px 16px 16px 0px",
    gap: 14,  // 14 + marginLeft 8 = 22
  },
  cancelButton: {
    width: 107,
    height: 36,
    borderRadius: 4,
  },
  requestButton: {
    width: 160,
    height: 36,
    padding: 0,
    marginLeft: 0, // ver porque aparece margin 8?
    fontSize: 14,
    //fontWeight: "bold",
    lineHeight: "24px",
    letterSpacing: 0.4,
    // usar o button da admin lib por causa da cor
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
        <Button
         variant="outlined" 
         color="default"
         onClick={handleCloseEditModal} 
         className= {classes.cancelButton} 
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRequestEdit}
          className={classes.requestButton}
        >
          Solicitar edição
        </Button>
      </DialogActions>  
    </div>
  );
});

export default EditContent;

