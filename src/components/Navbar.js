import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component {
  render() {
    return (
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit'><Link to={'/'} style={{ color: 'white' }}>Conductor</Link></Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar;