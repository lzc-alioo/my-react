从0搭建React项目

>参考网址：https://www.jianshu.com/p/324fd1c124ad


基础篇，搭建
```
mkdir my-react
cd my-react

#生成 package.json 文件.
npm init 

#安装各种依赖
npm install --save react react-dom 
npm install --save webpack webpack-dev-server webpack-cli
npm install --save babel-core babel-cli babel-polyfill babel-loader babel-runtime babel-plugin-transform-runtime  babel-preset-es2015 babel-preset-react babel-preset-stage-2


```

#打开 package.json 然后添加下面的scripts:
"scripts": {
  "dev": "webpack-dev-server --mode production ",
  "build": "webpack  --mode production"
}


命令行输入 npm run dev 将要启动webpack-dev-server 
命令行输入 npm run build 将会进行生产环境打包

#启动webpack
至此，React项目已经搭建好了，启动吧
npm run dev

这个时候打开浏览器访问 localhost:8080/就可以看到东东了



进阶篇，使用React创建类
在my-react目录中创建index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
</head>
<body>
  <div id="app"></div>
  <script src="bundle.js"></script>
</body>
</html>


在my-react目录中创建子目录src,在src中创建文件app.js，内容如下

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){ // Every react component has a render method.
    return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
      <div>
        Hello World
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


在my-react目录中创建webpack.config.js，内容如下
该文件名是默认命名，如果叫其它名字，比如webpack.config.prod.js，则需要在script中进行显性指定
"build": "webpack --mode production webpack.config.prod.js"

var webpack = require('webpack');
module.exports = {
  entry: './src/app.js',        //默认配置：./src/index.js
  output: {
      path: __dirname + '/build', //默认配置：/dist
      filename: "bundle.js"       //默认配置：main.js
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }]
  }
};

打开浏览器查看效果


实战篇：创建可复用的组件

在my-react目录中创建components文件夹，并在components文件夹中创建文件 ToDoApp.js
import React from 'react';
class ToDoApp extends React.Component {
  render() {
    return (
      <div>To Do App</div>
    );
  }
}

export default ToDoApp;


重新编辑my-react/src/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from '../components/ToDoApp';

class App extends React.Component {
  render(){ // Every react component has a render method.
    return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
      <div>
        <div>Hello World</div>
        <ToDoApp />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



打开浏览器看看效果吧
react3,png


进一步迭代app.js return方法里内容
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
		      </div>
		    </div>
		  </div>
		</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


效果
react4,png

接下来搞个真实的列表
创建my-react/components/List.js,内容如下：
import React from 'react';

const List = (props) => {

  const list = props.listItems.map((el, i)=>(
    <li key={i}><h2>{el}</h2></li>
  ));

  return (
    <div>
      <ul>
        {
          list
        }
      </ul>
    </div>
  )
};

export default List;

修改my-react/components/ToDoApp.js，内容为：
import React from 'react';
import List from '../components/List';

class ToDoApp extends React.Component {

  componentWillMount(){ // run before the render method
    this.setState({ // add an array of strings to state.
      list: ['thing1', 'thing2', 'thing3']
    })
  };

  render() {
    return (
      <div>
      	<div>aaaa</div>
      	  <List listItems={this.state.list} />
      </div>
    );
  }
}

export default ToDoApp;

看看效果吧
react5.png



给APP添加功能
创建my-react/components/Input.js,内容如下：
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
		      Email address
		    </label>
		    <input
		      type="text"
		      className="form-control"
		      id="listItemInput"
		      placeholder="Add new todo"
		    />
		    <button
		      className="btn btn-primary">
		      Add Item
		    </button>
		  </div>
		</form>

      </div>
    );
  }
}

export default Input;





修改my-react/components/ToDoApp.js，内容为：
import React from 'react';
import List from '../components/List';
import Input from '../components/Input';

class ToDoApp extends React.Component {

  componentWillMount(){ // run before the render method
    this.setState({ // add an array of strings to state.
      list: ['thing1', 'thing2', 'thing3']
    })
  };

  render() {
    return (
      <div>
      	<Input />
      </div>
    );
  }
}

export default ToDoApp;

这时候会发现一个输入框和按钮的视图，这个组件的静态视图已经写好了，下面就需要添加功能了。

首先我们需要做的是如何获取输入框的值，因为这个输入框的值需要在其他组件中获取，所以我们并不想要在Input组件中来处理这个数据存储。事实上，在子组件中存储数据在任何时候都是不推荐的，我们应该将数据存储在app的顶端组件并且通过props传递下来。

另一个需要记住的是即使我们目前把数据存储在了上层的 ToDoApp 组件，后期还是会用redux来代替来处理整个app的数据。这里先仅仅使用react的state来实现。

ok，我们在ToDoApp的 componentWillMount的setState中新增一个newToDo属性用来存储输入框的值。

好了，直接看代码吧
修改my-react/components/ToDoApp.js，内容为：

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


修改my-react/components/Input.js,内容如下：
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
		      Email address
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


备注：还没有搞明白修改newToDo 与list 的方式为什么不一致

this.setState((previousState)=>({
	  list: [...previousState.list, previousState.newToDo ],
	  newToDo: ''
	}));
为什么不直接这样呢，简书上有解释却没有看明白
this.setState((previousState)=>({
  list: previousState.list.push(previousState.newToDo) ;
  newToDo: ''
}))

简书就此问题描述如下：
正如我上面的描述，最开始写state的时候很多人都会犯这样的错误，直接用push这样的方法，修改了state，这样就不算immutable的，我们一定要保证绝不直接修改原state。

看看效果吧
























