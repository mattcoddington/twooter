import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Menu from './Menu'

const styles = {
  flex: {
    flexGrow: 1,
  },
};

const Logo = (props) => {
  const { classes } = props;
  return (
        <Typography variant="title" color="inherit" className={classes.flex}>
          Twooter
        </Typography>
  )
}
export default withStyles(styles)(Logo);
