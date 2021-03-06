import React,{Component} from 'react';
import './App.css';
import CardList from './components/cardlist';
import {robots} from './components/robots';
import SearchBox from './components/searchbox';
import Scroll from './components/scroll';
import ErrorBoundry from './components/ErrorBoundry'

class App extends Component {
   constructor(){
      super();
      this.state={
         robots:robots,
         searchfield:''
      }
   }

   onSearchChange =(e) =>{
      console.log(e.target.value);
      this.setState({ searchfield :e.target.value})
   }

   render(){
      const filteredRobots= this.state.robots.filter(robots =>
        robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      );
      return (
         <div className='tc'>
         <h1>Robot Search</h1>
           <SearchBox searchChange={this.onSearchChange}/>
           <Scroll>
           <ErrorBoundry>
           <CardList robots={filteredRobots}/>
           </ErrorBoundry>
           
           </Scroll>
           
           
         </div>
       
        );
   }
 
}

export default App;
