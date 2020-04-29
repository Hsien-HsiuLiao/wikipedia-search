import React, {Component} from 'react';
import PropTypes from 'prop-types';


class WikiResults extends Component {
   /*
    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=primal&namespace=0&limit=10&callback=?')
        .then(res => console.log(res.data))
     
        document.addEventListener("keydown", this.handleKeyPress);
      }
*/
    render(){
        return(
            <div style={resultStyle}>{this.props.searchResults}</div>
        )
    }
}

const resultStyle = {
    background: '#111',
    color: '#f00',
    textAlign: 'center',
    padding: '10px'
  }

//PropTypes

WikiResults.propTypes = {
    
}


export default WikiResults;