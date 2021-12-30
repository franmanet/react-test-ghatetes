import './App.css';
import React from 'react';
import { CardList } from './components/card-list/card-lista';
import { SearchField } from './components/search-field/search-field';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(data => this.setState({ users: data }))
  }

  render()  {

    const { users, searchField } = this.state;
    const filteredUsers = users.filter( user => 
      user.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <img src='mmason.jpg' />

        <SearchField 
           placeholder='Bucar gatete...'
           handleChange = {e =>  this.setState({searchField: e.target.value})}
        />        

        <CardList gatetes={filteredUsers}/>
      </div>
    );
  }
}

export default App;
