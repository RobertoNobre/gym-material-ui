import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateModal from './../Components/CreateModal';

class Header extends Component {
  render() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit" style={{flex: 1}}>
                    Exercise Database
                </Typography>

                <CreateModal />
            </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
