// React component in JSX
class Button extends React.Component {
	render(){
		return <button>{this.props.title}</button>
	}
}

//React component in plain JS
const Button = React.createClass({
	render() {
		return React.createElement('button', null, this.props.title)
	}
})
