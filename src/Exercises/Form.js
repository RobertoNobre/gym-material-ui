import React, { Component } from 'react';
import { Button, TextField, FormControl, MenuItem, InputLabel, Select } from '@material-ui/core/';

export default class extends Component {
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
        this.props.onSubmit({
            id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...this.state
        });
    }

    render(){
        const { title, muscles, description } = this.state,
            { exercise, muscles: categories } = this.props;
            console.log(this.state)
        return <form>
        <TextField
            label="Title"
            value={title}
            name="title"
            onChange={this.handleChange}
            margin="normal"
            fullWidth
        />
        <br/>
        <FormControl
            fullWidth>
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
            fullWidth
        />
        <br/>
        <Button 
            color="primary" 
            variant="contained"
            onClick={this.handleSubmit}
            disabled={!muscles || !title}
        >
        { exercise ? 'Edit' : 'Create' }
        </Button>
    </form>
    }
}