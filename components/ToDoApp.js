import React from 'react';
import List from '../components/List';
import Input from '../components/Input';

class ToDoApp extends React.Component {

  componentWillMount() {
    this.setState({
      list: ['thing1', 'thing2', 'thing3'],
      newToDo: 'test'
    })
  } ;

  handleChange=(event) =>{
  	console.log("aa", event.target.value ) 
    this.setState({ newToDo: event.target.value});

 //    this.setState((previousState)=>({
	//   list: [...previousState.list, previousState.newToDo ],
	//   newToDo: ''
	// }));

  };

  handleClick =(event) =>{
  	console.log("bb" ,event.target.value ) 

  	event.preventDefault();
	this.setState((previousState)=>({
	  list: [...previousState.list, previousState.newToDo ],
	  newToDo: ''
	}));
	
  };

  render() {
    return (
      <div>
      	<Input newToDo={this.state.newToDo } updateStateProp={this.handleChange} updateStateClick={this.handleClick }/>

      	<List listItems={this.state.list } />
      </div>
    );
  }
}

export default ToDoApp;



