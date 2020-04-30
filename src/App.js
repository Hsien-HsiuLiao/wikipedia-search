import React, {Component} from 'react';

import './App.css';
import Header from './components/Header';
import SearchWiki from './components/SearchWiki';
import WikiResults from './components/WikiResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: 'test'
    }
  }

  
  appjsFunc =  ()  => {
    console.log('appjs called')
   /* setstate = {
      searchResults: 'function called'
    }
    */
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        <SearchWiki searchResults={this.state.searchResults} appjsFunc={this.appjsFunc} />
        <WikiResults searchResults={this.state.searchResults} />
      </div>
    );
  }
};

export default App;
