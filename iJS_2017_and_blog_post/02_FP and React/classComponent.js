class DisplayList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			starWarsChars: [
				{ name:'Luke Skywalker', side:'light' },
				{ name:'Darth Vader', side:'dark' },
				{ name:'Obi-wan Kenobi', side:'light' },
				{ name:'Palpatine', side:'dark' },
			]
		}
	}
	render() {
		return (
			<div>
				{this.state.starWarsChars.map(char =>
					<div key={char.name}>
						<div>Character: {char.name}</div>
						<div>Side: {char.side}</div>
					</div>
				)}
			</div>
		)
	}
}

ReactDOM.render(
	<DisplayList />,
	document.getElementById('app')
)