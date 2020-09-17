import React, { Component } from 'react';
import { CardList } from './compnents/card-list/card-list.component'
import { SearchBox } from './compnents/search-box/search-box.component'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [ ],
     searchField : ''
    };
    /* this.handleChange could also be done here like:-
    this.handleChange = this.handleChange.bind(this);   where bind is used to intact the function with the app component and shows that 'this' belongs to the App
    */
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then( users => this.setState( { monsters : users } ) )
  }

  handleChange = e => {
    this.setState({ searchField : e.target.value });
  }
  /* If bind would have used then the function would be:-
  handleChange(e){
    this.setState({ searchField : e.target.value });
  }
  */
  
  render(){
    
    const { monsters, searchField } = this.state;  //Desctructuring is taking properties off of an object and assigning it to other const objects like monsters and searchFields.
    /* Equivalent to :-
    const monsrers = this.state.monsters;
     const searchField = this.state.searchField; */
     const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) 
      );
    
    return(
      <div className="App">
        <SearchBox
          placeholder='search monsters'
          handleChange= { this.handleChange }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
