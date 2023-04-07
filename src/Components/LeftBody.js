import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import FileOpen from '@mui/icons-material/FileOpen';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FileUploader } from "react-drag-drop-files";

import Cloud from '@mui/icons-material/Cloud';


const fileTypes = ["stl"];


export default function LeftBody() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [file, setFile] = React.useState(null);
  const handleChange = (file) => {
    setFile(file);
  }
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}  className='menuList'>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <FileOpen fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={handleClickOpen}>
          Open          
          </ListItemText>

          
          <Typography variant="body2" color="text.secondary">
            ⌘O
          </Typography>
        </MenuItem>
      </MenuList>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Open STL File"}
        </DialogTitle>
        <DialogContent>
          <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
