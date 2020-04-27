$(document).ready(function() {
  
  class SearchComponent extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        
      }
      
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
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
            this.state.test.push(
            <div>
            <p><h2> {this.state.title[i]} </h2></p>
            <p>desc {this.state.desc[i]}</p>
            </div>
              );
          }
      }
      
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
          
        </div>
      );
    }
  };
    
     
    
    ReactDOM.render(<WikiApp />, document.getElementById("wiki-app"));
    
  });
  
  
  