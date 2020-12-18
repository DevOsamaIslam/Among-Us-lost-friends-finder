import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '../Component/TextField';
import DateTime from '../Component/DateTime';
import SharingInfo from '../Component/SharingInfo';
import UploadPhoto from '../Component/UploadPhoto';
import Submit from '../Component/Submit';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    height: 585,
    backgroundColor: "black",
    border: '2px solid #000',
    boxShadow: '1px 1px 5px 2px rgba(255, 255, 255)',
    padding: theme.spacing(1, 4, 3),
    // 243
  },

  register: {
    position: 'relative',
    margin: theme.spacing(1),
    background: 'black',
    border: 0,
    borderRadius: 3,
    boxShadow: '1px 1px 5px 2px rgba(255, 255, 255)',
    color: 'white',
    height: 48,
    width: 1200,
    padding: '0 30px',
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <TextField/>
        <SharingInfo/>
        <DateTime/>
        <UploadPhoto/>
        <Submit/>
    </div>
  );

  return (
    <div>
      <button style={modalStyle} className={classes.register} type="button" onClick={handleOpen}>
      Registration Here
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}