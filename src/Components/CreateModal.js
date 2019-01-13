import React, { Fragment, Component } from 'react';
import { Dialog, Button, TextField, FormControl, MenuItem, InputLabel, Select,Fab } from '@material-ui/core/';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    FormControl: {
        width: 500
    }
})

class CreateModal extends Component {
    state = {
        open: false,
        exercise: { 
            title: '', 
            descriptoin: '', 
            muscles: ''
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = e => {
        this.setState({
            ...this.state, 
            exercise: { 
                ...this.state.exercise, 
                [e.target.name]: e.target.value
            } 
        })
    }

    handleSubmit = () => {

        const { exercise } = this.state;

        this.props.onCreate({
            ...exercise
        });

        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        })
    }

    render(){
        const { open, exercise: { title, description, muscles } } = this.state;
        const { classes, muscles: categories } = this.props;
        return(
            <Fragment>
                <Fab onClick={this.handleToggle} color="primary" mini="true">
                    <Add />
                </Fab>
                <Dialog
                  open={open}
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
                        <TextField
                            label="Title"
                            value={title}
                            name="title"
                            onChange={this.handleChange}
                            margin="normal"
                            className={classes.FormControl}
                        />
                        <br/>
                        <FormControl className={classes.FormControl}>
                            <InputLabel >Muscles</InputLabel>
                            <Select
                                value={muscles}
                                onChange={this.handleChange}
                                name="muscles"
                            >
                                { categories.map(category =>
                                    <MenuItem key={category} value={category}>{category}</MenuItem>
                                    ) }
                            </Select>
                        </FormControl>
                        <br/>
                        <TextField
                            multiline
                            rows="4"
                            label="Description"
                            value={description}
                            name="description"
                            onChange={this.handleChange}
                            margin="normal"
                            className={classes.FormControl}
                        />
                    </form>
        
                  </DialogContent>
                  <DialogActions>
                    <Button 
                        color="primary" 
                        variant="contained"
                        onClick={this.handleSubmit}
                    >
                      Create
                    </Button>
                  </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
export default withStyles(styles)(CreateModal)