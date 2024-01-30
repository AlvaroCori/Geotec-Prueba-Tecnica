import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { CatModel } from '../Models/CatModel';
import copyToClipboard from '../functions/copyToClipboard';
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
      <DialogTitle className='flex items-center text-center justify-center font-bold text-2xl'>{cat.name}</DialogTitle>
      <DialogContent>
        <img src={cat.url} alt="Imagen" className='w-full' />
        <DialogContentText className='my-6'>{cat.fact}</DialogContentText>
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