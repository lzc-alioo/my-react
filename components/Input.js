import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div>
      	<form>
		  <div
		    className="form-group">
		    <label
		      htmlFor="listInput">
		      a{this.props.label }b
		    </label>
		    <input
		      type="text"
		      className="form-control"
		      id="listItemInput"
		      placeholder="Add new todo"
		      value={this.props.newToDo }
		      onChange={this.props.updateStateProp }
		    />
		    <button
		      className="btn btn-primary" onClick={this.props.updateStateClick } >
		      Add Item
		    </button>
		  </div>
		</form>

      </div>
    );
  }
}

export default Input;



