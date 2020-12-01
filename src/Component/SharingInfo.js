
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '60ch',
      },
    },
  }));

export default function BasicTextFields() {
  const classes = useStyles();
  

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <br>
      </br>
        <br>
      </br>
       <br>
      </br>
      <TextField id="standard-basic" label="Server Location" />
      <TextField id="standard-basic" label="Map" />
    </form>
  );
}


