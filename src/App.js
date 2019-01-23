import React, { Component } from 'react';
import {Header, Footer} from './layout';
import Exercises from './Exercises';
import { muscles, exercises } from './store';
import { Provider } from './context';
import { CssBaseline } from '@material-ui/core';

class App extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles(){
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
 
        exercises[muscles] = [...exercises[muscles], exercise]

        return exercises;
      }, initExercises )
    );
  }

  handleCategorySelect = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }))
  }

  handleExerciseCreate = exercise => 
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ] 
    }) )
  
  handleExerciseDelete = id => 
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(item => item.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }))
  

  handleExerciseSelectEdit = id => {
    console.log(exercises.find(item => item.id === id))
    this.setState(({ exercises }) => ({
      exercise: exercises.find(item => item.id === id),
      editMode: true
    }))}
  

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ], 
      exercise
    }))
  }

  getContext = () => ({
    muscles,
    ...this.state,
    exercisesByMuscle: this.getExercisesByMuscles(),
    onCategorySelect: this.handleCategorySelect,
    onCreate: this.handleExerciseCreate,
    onEdit: this.handleExerciseEdit,
    onSelectEdit: this.handleExerciseSelectEdit,
    onDelete: this.handleExerciseDelete,
    onSelect: this.handleExerciseSelect
  })

  render() {
    return (
      <Provider value={this.getContext()}>
        <CssBaseline />
        <Header />
        <Exercises />
        <Footer/>
      </Provider>
    );
  }
}

export default App;
