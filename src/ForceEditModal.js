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
  forceContent: {
    display: "flex",
    alignItens: "center",
    padding: "40px 24px",
  },
  avatar: {
    width: "56px",
    height: "56px",
    float: "left",
    background: "#bdbdbd",
    marginRight: 16,
  },
  forceText: {
    fontWeight: 400,
    fontSize: 16,
    width: 440,
    height: 72,
  },
  forceActions: {
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
  forceButton: {
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
        <Grid container direction="row" className={classes.forceContent}>
          <DialogContent>
            <Grid item lg={12} className={classes.avatar}>
              <IconButton>
                <PersonIcon />
              </IconButton>
            </Grid>
            <Typography>
              <Grid item lg={12}>
                <div className={classes.forceText}>
                  <strong>Atenção! </strong>
                  É recomendado solicitar a edição da matéria e aguardar. 
                  Somente force a edição em <strong>situações necessárias.</strong>
                </div>
              </Grid>
            </Typography>
          </DialogContent>
        </Grid>
        <Grid item lg={12}>
          <DialogActions className={classes.forceActions}>
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
              className={classes.forceButton}
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

