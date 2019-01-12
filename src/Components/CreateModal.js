import React, { Fragment, Component } from 'react';
import { Dialog, Button } from '@material-ui/core/';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Add } from '@material-ui/icons';

export default class extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        const { state } = this.state;
        return(
            <Fragment>
                <Button variant="fab" onClick={this.handleToggle} color="primary" mini>
                    <Add />
                </Button>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleToggle}
                >
                  <DialogTitle id="form-dialog-title">
                    Create a new exercise
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Please fill out the form below.
                    </DialogContentText>
                    <form>
        
                    </form>
        
                  </DialogContent>
                  <DialogActions>
                    <Button color="primary" variant="raised">
                      Create
                    </Button>
                  </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}