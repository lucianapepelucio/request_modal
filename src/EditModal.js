import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import styles from "./styles";

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
        <Grid container direction="row" className={classes.containerContent}>
          <DialogContent>
            <Grid item lg={12} className={classes.avatar}>
              <IconButton>
                <PersonIcon />
              </IconButton>
            </Grid>
            <Typography>
              <Grid item lg={12}>
                <div className={classes.contentText}>
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
          <DialogActions className={classes.containerActions}>
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
              className={classes.principalButton}
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

