import React, { Component, Fragment } from 'react';
import {Header, Footer} from './layout';
import Exercises from './Exercises';
import { muscles, exercises } from './store';

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
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ] 
    }) )
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(item => item.id !== id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
    { category, exercise } = this.state;
    return (
      <Fragment>
        <Header 
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
          <Exercises 
            exercise={exercise}
            category={category}
            exercises={exercises} 
            onSelect={this.handleExerciseSelect}
            onDelete={this.handleExerciseDelete}
          />
        <Footer
            category={category}
            muscles={muscles}
            onSelect={this.handleCategorySelect}
          />
      </Fragment>
    );
  }
}

export default App;
