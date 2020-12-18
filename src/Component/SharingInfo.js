
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '60ch',
    },
  },
}))

export default function BasicTextFields() {
  const classes = useStyles()
  

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <br>
      </br>

      <TextField id="standard-basic" label="Server Location" />
      <TextField id="standard-basic" label="Map" />
    </form>
  )
}


