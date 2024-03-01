import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export default function ForceEditModal() {
    const [open, setOpen] = useState(false);

    const handleSecondModalClose = () => {
        setOpen(false);
    }

    return (
        <Dialog open={open} onClose={handleSecondModalClose}>
            <DialogTitle>Forçar edição</DialogTitle>
            <DialogContent>
                <p><strong>Atenção!</strong></p>
                <p>É recomendado solicitar a edição da matéria e aguardar.</p>
                <p>Somente force a edição em <strong>situações necessárias.</strong></p>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleSecondModalClose} color="default">
                    Voltar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

  

