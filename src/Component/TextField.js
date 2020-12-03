
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      position : 'center',
    },
  },
}))

export default function BasicTextFields() {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h1>Your Info</h1>
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Colour" />
      
      <h1>Their Info</h1>
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Colour" />
      
      
    </form>
  )
}


