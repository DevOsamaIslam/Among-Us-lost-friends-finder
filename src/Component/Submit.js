import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    margin: theme.spacing(1),
    background: 'black',
    border: 0,
    borderRadius: 3,
    boxShadow: '1px 1px 5px 2px rgba(255, 255, 255)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: 783,
    "&:hover": {
      background: "green"
    },
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Submit</Button>
    </div>
  );
}
