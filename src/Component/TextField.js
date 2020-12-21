
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      position : 'center',
    },
  },

  text: {
      color: '#9e9e9e',
      fontFamily: 'Arial',
      fontSize: 40 , 
      fontWeight: 'bold',
      // margin: 'auto',
  },
}))

export default function BasicTextFields() {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <p className={classes.text}>YOUR INFO</p>
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Colour" />
      <p className={classes.text}>THEIR INFO</p>
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Colour" />
    </form>
  )
}


