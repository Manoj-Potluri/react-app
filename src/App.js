import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Manoj', age: 25 },
      { id: 2, name: 'Meher', age: 25 },
      { id: 3, name: 'Rajesh', age: 31 }
    ],
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons })

  }

  onChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState(
      {
        persons: persons
      }
    )
  }

  onToggleViewHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const buttonStyle = {
      backgroundColor: 'blue',
      color: 'white',
      border: '2px solid rgba(0, 0, 0, 0.058823529411764705)',
      padding: '8px',
      cursor: 'pointer',
      boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.21)',
      ':hover' :{
        backgroundColor: 'lightblue',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.onChangedHandler(event, person.id)} />
          })}
        </div> 
      );
      buttonStyle.backgroundColor= 'green';
      buttonStyle[':hover'] ={
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    return (
      <div className="App">
        <h1>Persons List</h1>
        <button style={buttonStyle} onClick={this.onToggleViewHandler}>Toggle view</button>
        {persons}
        {/* <button onClick={this.switchNameHandler}>Change Names</button> */}
      </div>
    );
  }
}

export default Radium(App);
