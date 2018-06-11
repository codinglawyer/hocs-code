// Class-based component
class Button extends React.Component {
	render(){
		return <button>{this.props.title}</button>
	}
}

// Functional component
const Button = (props) =>
	<button>{props.title}</button>
