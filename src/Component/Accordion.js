import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '../Component/TextField';
import DateTime from '../Component/DateTime';
import SharingInfo from '../Component/SharingInfo';
import UploadPhoto from '../Component/UploadPhoto';
import Submit from '../Component/Submit';
import logo from '../assets/images/NavPic.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },

  heading: {
    // fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "30px",  
  },

  
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.logo}>
       
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Registration Here</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TextField/>
          <SharingInfo/>
          <DateTime/>
          <UploadPhoto/>
          <Submit/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


