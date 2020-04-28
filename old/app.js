$(document).ready(function() {
  
  const Header = () => {
    return (
    <header>
      <h3>
        <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Click for a random Wikipedia article</a>
      </h3>
     </header>
    );
  };
  
  
class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input : '', 
      submit: '', 
      url: 'https://en.wikipedia.org', 
      results: [], 
      title: [],
      desc: [],
      link: [], 
      test: [], 
      resultsAssigned: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  

  handleChange (event) {
    this.setState(
      {
        input: event.target.value
      }
    )
  }
  
  handleSubmit(event) {
    this.setState({
      submit:this.state.input, 
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+this.state.input+'&namespace=0&limit=10&callback=?'  
    })
    event.preventDefault()
  }
  
  componentDidMount() {
 
    document.addEventListener("keydown", this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  
  handleEnter() {
    var resultsFromWiki = []
    function generateOutput() {
      for (var i = 0; i < 10; i++) {
      this.state.test.push(<div>
          <p><h2> {this.state.title[i]} </h2></p>
            <p>desc {this.state.desc[i]}</p>
            
          </div>
        );
        }
    }
    
    $.getJSON(this.state.url, function(result){
      
      resultsFromWiki = result;
     
      }).then( () => {
          this.setState({
            results: resultsFromWiki
          })  
        })
        .then( () => {
          this.setState({
            title: this.state.results[1], 
            desc: this.state.results[2], 
            link: this.state.results[3],
            resultsAssigned: true
          })
        })
        .then( () => {
      if (this.state.resultsAssigned){
   
    this.state.test = [];
    for (var i = 0; i < 10; i++) {
      this.state.test.push(<div>
          <p><h2> {this.state.title[i]} </h2></p>
            <p> {this.state.desc[i]}</p>
            
          </div>
        );
        }
   
    this.setState({
            test: this.state.test
    })
    
  }
   
   
    })
      
  }
  
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.setState({
      submit:this.state.input, 
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+this.state.input+'&namespace=0&limit=10&callback=?'  
    })
      this.handleEnter();
    }
  }
  
  componentDidUpdate() {
  
  
  }
  
  render() {
    
    var wikiList = "";
     wikiList = <div>
         <p><h2><b> {this.state.title[0]}</b></h2></p>
            <p> {this.state.desc[0]}</p>
            <p> <a href={this.state.link[0]} target="_blank">wiki link</a></p>
         <p><h2><b> {this.state.title[1]}</b></h2></p>
            <p> {this.state.desc[1]}</p>
            <p> <a href={this.state.link[1]} target="_blank">wiki link</a></p>
          </div>
       
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" id="searchInput" placeholder="type here" value={this.state.input} onChange={this.handleChange} ></input>
        <p></p>
        <button id="searchButton" type="submit" class="btn  btn-primary">Enter search terms and click here to search Wikipedia</button>
        </form>
        <p>  {this.state.test.map(
            function (d, idx) {
              let output=<div>{d}</div>
              return output
            }
          )}</p>
       
       
    
      </div>
    );
  }
};
  
   class WikiApp extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Header />
          <SearchComponent />
        </div>
        );
    }
  };
  
  ReactDOM.render(<WikiApp />, document.getElementById("wiki-app"));
  
});


