import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

const EditContent = withStyles(styles)(({ onClose, classes }) => {
 
  const handleRequestEdit = () => {
    // adicionar a lógica para solicitar a edição
  };

  const handleCloseEditModal = () => {
    onClose();
  }

  return (
    <Grid container direction="row">
      <Grid item xl={12} >
        <Grid container 
          className={classes.containerContent} 
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xl={3} className={classes.avatar}>
            <div>
              <img alt=""/>
            </div>
          </Grid>
          <Grid item xl={9} className={classes.contentText}>
            <Typography>
              <div>
                <strong>Nome do solicitante</strong>, você está solicitando a
                edição para <strong>nome do editor</strong>
                <i>(email do editor)</i>. Pode levar algum tempo até sua
                solicitação ser aceita.
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="flex-end">
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
  );
});

export default EditContent;

