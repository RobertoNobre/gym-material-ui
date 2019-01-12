import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Footer extends Component {
  render() {
    const index = this.props.category
      ? this.props.muscles.findIndex(group => group === this.props.category) + 1
      : 0

    const onIndexSelect = (e, index) => 
      this.props.onSelect(index === 0 ? '' : this.props.muscles[index - 1])
    
    return (
        <Paper>
          <Tabs
            value={index}
            onChange={onIndexSelect}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label='All' />
            { this.props.muscles.map(group => 
                <Tab label={group} key={group}/>
              ) }
          </Tabs>
        </Paper>
    );
  }
}

export default Footer;
