import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { CatModel } from '../Models/CatModel';
import copyToClipboard from '../functions/copyToClipboard';
import CloseIcon from '@mui/icons-material/Close';
interface MiDialogProps {
    open: boolean;
    onClose: () => void;
    cat: CatModel
  }

const MiDialog: React.FC<MiDialogProps> = ({ open, onClose, cat}) => {
  // Puedes cambiar la URL de la imagen y el contenido del párrafo según tus necesidades
  let cl = onClose;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Diálogo con Imagen</DialogTitle>
      <DialogContent>
        <img src={cat.url} alt="Imagen" style={{ width: '100%' }} />
        <DialogContentText>{cat.fact}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => copyToClipboard(cat.fact)} color="primary">
          COPY FACT
        </Button>

      </DialogActions>
    </Dialog>
  );
};

export default MiDialog;