import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    margin: theme.spacing(1),
    background: 'black',
    border: 0,
    borderRadius: 1,
    boxShadow: '1px 1px 5px 2px rgba(255, 255, 255)',
    color: 'white',
    height: 48,
    padding: '8px 20px 10px 20px',
      
    },
  },
  input: {
    display: 'none',
  },
}))

export default function UploadButtons() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button   component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="Green" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  )
}