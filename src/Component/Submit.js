import React from 'react'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { green, purple } from '@material-ui/core/colors'


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button)

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    
  },
  
}))

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
})


export default function CustomizedButtons() {
  const classes = useStyles()

  return (
    <div>
      
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          SUBMIT
        </Button>
      </ThemeProvider>
      
    </div>
  )
}