import React, { Component } from 'react';
import { Button, TextField, FormControl, MenuItem, InputLabel, Select } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    FormControl: {
        width: 300
    }
})

export default withStyles(styles)(class extends Component {
    state = this.getInitState();
    
    getInitState(){
        const { exercise } = this.props;

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        const { exercise } = this.state;

        this.props.onSubmit({
            ...exercise,
            id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
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
        const { title, muscles, description } = this.state,
            { classes, muscles: categories } = this.props;

        return <form>
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
        <br/>
        <Button 
            color="primary" 
            variant="contained"
            onClick={this.handleSubmit}
        >
        Create
        </Button>
    </form>
    }
})