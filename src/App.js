import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DynamicSelect from './DynamicSelect';

const arrayOfData = [
  {
    id: '1 - Jerry',
    name: 'Jerry'    
  },
  {
    id: '2 - Elaine',
    name: 'Elaine'    
  },
  {
    id: '3 - Kramer',
    name: 'Kramer'    
  },
  {
    id: '4 - George',
    name: 'George'    
  },
];

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedValue: 'Nothing selected'
    }
  }

  handleSelectChange = (selectedValue) =>{
    this.setState({
      selectedValue: selectedValue
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dynamic Select Dropdown List</h1>
        </header>
        <p className="App-intro">
          <DynamicSelect arrayOfData={arrayOfData} onSelectChange={this.handleSelectChange} /> <br /><br />
          <div>
            Selected value: {this.state.selectedValue}
          </div>
        </p>
      </div>
    );
  }
}

export default App;
