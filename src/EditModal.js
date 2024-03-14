import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";

const styles = () => ({
  editContent: {
    display: "flex",
    alignItems: "center",
    padding: "40px 24px",
  },
  avatar: {
    width: "56px",
    height: "56px",
    float: "left",
    background: "#bdbdbd",
    marginRight: 16,
  },
  editText: {
    fontWeight: 400,
    fontSize: 16,
    width: 440,
    height: 72,
  },
  editActions: {
    display: "flex",
    alignItems: "flex-end",
    width: 544,  
    height: 36,  
    gap: 14, 
    padding: "16px 16px 16px 0px",
  },
  cancelButton: {
    width: 107,
    height: 36,
    borderRadius: 4,
    fontWeight: "bold",
  },
  requestButton: {
    width: 160,
    height: 36,
    padding: 0,
    marginLeft: 0, // ver porque aparece margin 8?
    fontSize: 14,
    lineHeight: "24px",
    letterSpacing: 0.4,
    fontWeight: "bold",
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
      <Grid container>
        <Grid container direction="row" className={classes.editContent}>
          <DialogContent>
            <Grid item lg={12} className={classes.avatar}>
              <IconButton>
                <PersonIcon />
              </IconButton>
            </Grid>
            <Typography>
              <Grid item lg={12}>
                <div className={classes.editText}>
                  <strong>(Nome do solicitante)</strong>, você está solicitando a
                  edição para <strong>(nome do editor)</strong>
                  <i>((email do editor))</i>. Pode levar algum tempo até sua
                  solicitação ser aceita.
                </div>
              </Grid>
            </Typography>
          </DialogContent>
        </Grid>
        <Grid item lg={12}>
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
        </Grid>
      </Grid>
    </div>
  );
});

export default EditContent;

