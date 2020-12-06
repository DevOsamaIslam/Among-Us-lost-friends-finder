import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



function Copyright() {
    return (
      <Typography variant="body2" color="black" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/DevOsamaIslam/Among-Us-lost-friends-finder">
          Among Us Lost Friends Finder
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Copyright;