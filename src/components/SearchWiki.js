import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import $ from 'jquery';

class SearchWiki extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input : '', 
      
   //   submit: '', 
        url: '', 
        results: [], 
        title: [],
        desc: [],
        link: [], 
        resFormatted: [], 
        resultsAssigned: false
    }
    this.handleChange = this.handleChange.bind(this);
      
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState(
      {
        input: event.target.value, 
       // url: 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+event.target.value+'&namespace=0&limit=10&callback=?'
        url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+event.target.value+'&namespace=0&limit=10&callback=?'
      }
    )
   // console.log('url: ', this.state.url )
  }

  handleSubmit(event) {
    event.preventDefault();
  /*  this.setState({
      submit:this.state.input, 
  //   url: 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+event.target.value+'&namespace=0&limit=10&callback=?'  
    })
    */
  //  console.log('url: ', this.state.url)
    this.getWikiResults();
    //this.props.getWikiResults(this.state.url);
  }

  

  getWikiResults(){

    $.getJSON(this.state.url, function(result){
       // console.log("getjson: ",result)
        return result;
      })
    .then(res => {
     // console.log("res: ",res);
     //this.props.searchResults = 'getjson';
      this.setState({
        results: res,
        searchResults : 'getjson'
      }) 
    })
    .then( () => {
     console.log('this.state.results: ',this.state.results);
      this.setState({
        title: this.state.results[1], 
        desc: this.state.results[2], 
        link: this.state.results[3],
        resultsAssigned: true
      })
    })
    .then( () => {
      console.log("title: ",this.state.link);
      if (this.state.resultsAssigned){
          this.state.resFormatted = [];
          for (var i = 0; i < 10; i++) {
              this.state.resFormatted.push(
                  <div>
                      <p>
                        <h3>
                          <a href={ this.state.link[i] } target="_blank" rel="noopener noreferrer"> 
                          { this.state.title[i] } 
                          </a>
                          </h3> - 
                          { this.state.desc[i] }
                       </p>
                  </div>
              );
          }
           this.setState({
              resFormatted: this.state.resFormatted
          }) 
      }
      console.log('this.state.resFormatted: ',this.state.resFormatted)
     })
    
//    this.outputResults()
  }
  
/* when button clicked or keypress Enter, get wikiresults and output it

 */

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text" 
          id="searchInput" 
          placeholder="type here" 
          value={this.state.input} 
          onChange={this.handleChange} 
          ></input>
          
          <button id="searchButton" type="submit" className="btn  btn-primary">Enter search terms and click here to search Wikipedia</button>
        </form>
        
        <p>
          
        {this.state.resFormatted.map(
              function (d, idx) {
                let output=<div>{d}</div>
                return output
              }
            )}
        </p>
      </div>
    )
  }

}

export default SearchWiki;