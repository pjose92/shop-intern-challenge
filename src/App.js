import './App.css';
import { React, Component } from "react"
import Alert from 'react-bootstrap/Button'
import Search from "./Search/Search";
import Nomination from "./Nomination/Nomination";
import SearchResult from "./SearchResult/SearchResult";
import NoResult from "./SearchResult/NoResult";
import List from "./Nomination/List";
import axios from 'axios';
class App extends Component  {
  state = {
    userInput: "",
    result: [], 
    nomination : [],
    showAlert: false
  }
  
inputHandler = (e) => {
  let nominationTitle= [];
  let moviesResult = [];
    axios.get(`https://www.omdbapi.com/?s=${e.target.value}&apikey=903adb0c`) 
    .then(res => {
    this.state.nomination.forEach(element => nominationTitle.push(element.Title))

    this.setState({userInput: `Search result for "${e.target.value}":`})
    if(res.data.Search !== undefined){
      for(let movies of res.data.Search.slice(0,6)) {
      if(nominationTitle.indexOf(movies.Title) === -1){
        movies.nominated = false;
        } else {
          movies.nominated = true;
        }
        moviesResult.push(movies);
       }
      this.setState( 
        {result: moviesResult}); 
    } 
  })
}

nominateHandler = (index) => {
  const nomination= [...this.state.nomination]; 
  nomination.push(this.state.result[index])
  this.setState({nomination: nomination}) 
  if(this.state.nomination.length >= 4) {
    this.setState({showAlert: true});
   } 
}

removeNominateHandler = (index) => {
  const nomination= [...this.state.nomination]; 
  nomination.splice(index,1)
  this.setState({nomination: nomination}) 
  if(this.state.nomination.length <= 5) {
    this.setState({showAlert: false});
   } 
}

render () {
  let results = null; 
  let search = null; 
  let nominateList = null; 
  let nominationTitle= [];
  
  this.state.nomination.forEach(element => nominationTitle.push(element.Title))

      const resultState = (result,index) => {
        if(result.Title !== "") {
        return <SearchResult
        id = {result.imdbID}
        title = {result.Title}
        year = {`(${result.Year})`} 
        nominated = {nominationTitle.indexOf(result.Title) === -1 ? false : true}
        nominate = {() => this.nominateHandler(index)}
        maxLimit = {this.state.nomination.length >= 5? true : false}
        /> 
        }  
      }

      const nominationState = (list, index) => {
        return <List 
        id = {list.imdbID}
        nominateTitle = {list.Title}
        removeNomination = {() => this.removeNominateHandler(index)}
        />  
      }
      
      nominateList = ( 
        <div >
          {this.state.nomination.map(nominationState)}
        </div>
      ) 
      
      if( this.state.userInput.length >= 24 && this.state.result.length > 0) {
       search = (
       <h5 
        className= "result_for" 
      > 
        {this.state.userInput}
      </h5>)

      results = (
        <div>
          {this.state.result.map(resultState)}
        </div> 
      )} else results= <NoResult></NoResult>

  return (

    <div className="App">
      <Nomination
        list = {nominateList}
      >
      </Nomination>
      <Search 
        input = {this.inputHandler} 
      ></Search>
      {search}
      {this.state.showAlert? 
      <Alert variant='success' >
        Thank you! You have reached 5 nomination! 
      </Alert> : null
      }
      {results}
    </div>
  );
  } 
}

export default App;