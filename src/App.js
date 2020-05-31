import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

// why would we want to use a Class vs a function?
// by using a class component we have access
// to state
// jsx mimics what html does and it helps us build
// components with different states

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

// when react puts our component on our page it'll 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

// render method comes built in with the react component
  render() {
    // need to get the filtered monster names
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField:e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
