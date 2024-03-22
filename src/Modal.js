import React, { useState } from "react";
import EditContent from "./EditModal";
import ForceContent from "./ForceEditModal";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, isForcing, onStartForce, ...other } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(true);
  }

  return (
    <Grid item xl={12}>
      <MuiDialogTitle disableTypography className={classes.dialogTitle} {...other}>
      <Typography variant="h6">{children}</Typography>
        {!isForcing && (
          <>
            <IconButton
            id="menubutton"
            aria-haspopup="true"
            aria-controls="menu"
            className={classes.moreButton}
            onClick={handleMenuClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu 
              id="menu"
              anchorEl={document.getElementById("menubutton")}
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
              MenuListProps={{
                'aria-labelledby': 'menubutton',
              }}
            >
              <ul className={classes.list}>
                <li>
                  <button onClick={onStartForce} className={classes.forceButton}>
                     Forçar edição
                  </button>
                </li>
              </ul>
            </Menu>
          </>
        )}
      </MuiDialogTitle>
    </Grid>
  );
});

const CustomizedDialogs = withStyles(styles)(({ classes }) => {
  const [open, setOpen] = useState(false);
  const [isForcing, setIsForcing] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Solicitar edição (cabeçograma)
      </Button>
      <Grid container alignItems="center">
        <Dialog
          open={open}
          onClose={handleClose}
          className={classes.dialog}
          aria-labelledby="customized-dialog-title"
        >
          <Grid item xl={12} justifyContent="space-between">
            <DialogTitle 
            onStartForce= {() => setIsForcing(true)}
            isForcing={isForcing}
            id="customized-dialog-title" 
            >
              {isForcing 
                ? <span className={classes.titleText}>Forçar edição</span> 
                : <span className={classes.titleText}>Solicitando edição</span>
              }
            </DialogTitle>
          </Grid>
          <Grid item xl={12}>
            <Divider />
          </Grid>
          <Grid item xl={12}>
            {isForcing ? <ForceContent onClose={handleClose}/> : <EditContent onClose={handleClose}/>}
          </Grid>
        </Dialog>
      </Grid>

    </div>
  );
}); 

export default CustomizedDialogs;




