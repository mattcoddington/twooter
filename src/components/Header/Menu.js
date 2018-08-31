import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Menu = (props) => {
  const { classes } = props;
  return (
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
  )
}
export default withStyles(styles)(Menu);
