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
    padding: "40px 24px",
    gap: 16,
    alignItens: "center",
  },
  avatar: {
    width: "56px",
    height: "56px",
    float: "left",
    background: "#bdbdbd",
  },
  forceText: {
    fontWeight: 400,
    fontSize: 16,
  },
  forceActions: {
    width: 544,  //544 + 16 + 16 = 560
    height: 36,  //36 + 16 + 16 = 68
    gap: 14,  // 14 + marginLeft 8 = 22
    padding: "16px 16px 16px 0px",
  },
  cancelButton: {
    width: 107,
    height: 36,
    borderRadius: 4,
    // border: 1,
    // padding: "6px 16px",
    // gap: 6,
  },
  forceButton: {
    width: 160,
    height: 36,
    padding: 0,
    marginLeft: 0, // ver porque aparece margin 8?
    fontSize: 14,
    lineHeight: "24px",
    letterSpacing: 0.4,
    //fontWeight: "bold",
    // usar o button da admin lib por causa da cor
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
      <Grid item lg={12}>
        <DialogContent className={classes.forceContent}>
          <Typography>
            <Grid item className={classes.avatar}>
              <IconButton>
                <PersonIcon />
              </IconButton>
            </Grid>
            <Grid item className={classes.forceText}>
              <strong>Atenção! </strong>
              É recomendado solicitar a edição da matéria e aguardar. 
              Somente force a edição em <strong>situações necessárias.</strong>
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
    </div>
  );
});

export default ForceContent;

