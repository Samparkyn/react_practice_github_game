var USER_DATA = {
	name: 'Sam Parkyn',
	username: 'samparkyn',
	image: 'https://avatars0.githubusercontent.com/u/12548530?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function(){
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
	}
});

var ProfileLink = React.createClass({
	render: function(){
		return (
			<div>
				<a href={'https://www.githubg.com/' + this.props.username}>
					{this.props.username}
				</a>
			</div>
			)
	}
});

var ProfileName = React.createClass({
	render: function(){
		return (
				<div>{this.props.name}</div>
			)
	}
});

var Avatar = React.createClass({
	render: function(){
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
			)
	}
});

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
	);

// ALL REACT COMPONENTS SHOULD FOLLOW THESE RULES:
/*
	Focused
	Independent
	Reusable
	Small
	Testable
*/


// var HelloWorld = React.createClass({
// 	render: function(){ // render is a pure function
// 		return (
// 			<div>Hello {this.props.name}</div> //now the property has been named below, i can use this.props here and set it to what i want.
// 			)
// 	}
// });

// ReactDOM.render(
// 	<HelloWorld name="Sam" age ={24} />, //here i have made a property on this HelloWorld component called name.
// 	 document.getElementById('app'));

// Pure functions 
//Evaluates the same result given then same arguments
//Doesn't depend on and doesn't modify the states of variables out of its scope.
//No side effects (mutations, async reqs)

//splice - modifies original array
//slice - make a shallow copy and modifies the copy