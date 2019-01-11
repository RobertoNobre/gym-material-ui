import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Footer extends Component {
  render() {
    return (
        <Paper>
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label='All' />
            { this.props.muscles.map((group, index) => 
                <Tab label={group} key={index}/>
              ) }
          </Tabs>
        </Paper>
    );
  }
}

export default Footer;
