const starWarsChars = [
	{ name:'Luke', side:'light' },
	{ name:'Darth Vader', side:'dark' },
	{ name:'Obi-wan Kenobi', side:'light'},
	{ name:'Palpatine', side:'dark'},
]

const DisplayList = ({ list }) =>
	<div>
		{list.map(char =>
			<div key={char.name}>
				<div>Character: {char.name}</div>
				<div>Side: {char.side}</div>
			</div>
		)}
	</div>

ReactDOM.render (
	<DisplayList list={starWarsChars} />,
	document.getElementById('app')
)