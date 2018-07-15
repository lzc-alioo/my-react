import React from 'react';
import Select from '../components/Select';
import Input from '../components/Input';

class ToDoSelect extends React.Component {

  componentWillMount() {
    this.setState({  
      list: ['thing1', 'thing2', 'thing3'],  
      newToDo: 'test'  ,
      inputLabel: '柳海洋'
    })  
  } ;

  handleChange=(event) =>{
  	console.log("aa", event.target.value ) 
    this.setState({ newToDo: event.target.value});

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
      	<Input label={this.state.inputLabel} newToDo={this.state.newToDo } updateStateProp={this.handleChange} updateStateClick={this.handleClick }/>

      	<Select listItems={this.state.list } />
      </div>
    );
  }
}

export default ToDoSelect;



