import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import styles from "./styles";

const ForceContent = withStyles(styles)(({ onClose, classes }) => {
 
  const handleForceEdit = () => {
    // adicionar a lógica para forçar a edição
  };

  const handleCloseForceEditModal = () => {
    onClose();
  }

  return (
    <Grid container>
      <Grid item lg={12} direction="row">
        <Grid container
         className={classes.containerContent}
         justifyContent="center"
         alignItems="center"
        >
          <Grid item lg={2} className={classes.avatar}>
            <div>
              <PersonIcon />
            </div>
          </Grid>
          <Grid item lg={10} className={classes.contentText}>
            <Typography>
              <div>
                <strong>Atenção! </strong>
                É recomendado solicitar a edição da matéria e aguardar. 
                Somente force a edição em <strong>situações necessárias.</strong>
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row">
        <DialogActions className={classes.containerActions}>
          <Button
          variant="outlined" 
          color="default"
          onClick={handleCloseForceEditModal} 
          className= {classes.cancelButton}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleForceEdit}
            className={classes.principalButton}
            >
            Forçar edição
          </Button>
        </DialogActions>
      </Grid>
    </Grid>
  );
});

export default ForceContent;

