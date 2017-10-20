const withSimpleState = defaultState => BaseComponent => {
	return class WithSimpleState extends React.Component {
		constructor(props) {
			super(props)
			this.state = { value: defaultState }
			this.updateState = this.updateState.bind(this)
		}
		updateState(value) {
			this.setState({ value })
		}
		render() {
			return (
				<BaseComponent
					{...this.props}
					stateValue={this.state.value}
					stateHandler={this.updateState}
				/>
			)
		}
	}
}

const renderDisplayList = ({ list, stateValue, stateHandler })=> {
	const filteredList = list.filter(char => char.side === stateValue)
	const otherSide = stateValue === 'dark' ? 'light' : 'dark'
	return (
		<div>
			<button onClick={() => stateHandler(otherSide)}>Switch</button>
			{filteredList.map(char =>
				<div key={char.name}>
					<div>Character: {char.name}</div>
					<div>Side: {char.side}</div>
				</div>
			)}
		</div>
	)
}

const FilteredList = withSimpleState('dark')(renderDisplayList)

ReactDOM.render (
	<FilteredList list={starWarsChars} />,
	document.getElementById('app')
)