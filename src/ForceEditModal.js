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

const ForceContent = withStyles(styles)(({ onClose, classes }) => {
 
  const handleForceEdit = () => {
    // adicionar a lógica para forçar a edição
  };

  const handleCloseForceEditModal = () => {
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
                  <strong>Atenção! </strong>
                  É recomendado solicitar a edição da matéria e aguardar. 
                  Somente force a edição em <strong>situações necessárias.</strong>
                </div>
              </Grid>
            </Typography>
          </DialogContent>
        </Grid>
        <Grid item lg={12}>
          <DialogActions className={classes.containerActions}>
            <Button
            variant="outlined" 
            onClick={handleCloseForceEditModal} 
            color="default"
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
    </div>
  );
});

export default ForceContent;

