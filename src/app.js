import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from '../components/ToDoApp';

class App extends React.Component {
  render(){ // Every react component has a render method.
    return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
		<div className="row">
		  <div className="col-md-10 col-md-offset-1">
		    <div className="panel panel-default">
		      <div className="panel-body">
		        <h1>My To Do App</h1>
		        <hr/>
		        List goes here.
		        <ToDoApp />
		      </div>
		    </div>
		  </div>
		</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));