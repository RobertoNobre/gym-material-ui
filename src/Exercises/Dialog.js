import React, { Fragment, Component } from 'react';
import { Dialog, Fab } from '@material-ui/core/';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Add } from '@material-ui/icons';
import Form from './Form'

class CreateDialog extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleSubmit = exercise => {
        this.handleToggle();
        this.props.onCreate(exercise);
    }

    render(){
        const { open } = this.state,
            { muscles } = this.props;
        return(
            <Fragment>
                <Fab onClick={this.handleToggle} color="secondary" mini="true">
                    <Add />
                </Fab>
                <Dialog
                  open={open}
                  onClose={this.handleToggle}
                  fullWidth
                  maxWidth='xs'
                >
                  <DialogTitle id="form-dialog-title">
                    Create a new exercise
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Please fill out the form below.
                    </DialogContentText>
                    <Form 
                        muscles={muscles}
                        onSubmit={this.handleSubmit}
                    />
        
                  </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}
export default CreateDialog