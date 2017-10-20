const withTransformProps = mapperFunc =>
	BaseComponent => baseProps => {
		const transformedProps = mapperFunc(baseProps)
		return <BaseComponent {...transformedProps} />
	}

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

const renderDisplayList = ({ list, stateHandler, otherSide }) => (
	<div>
		<button onClick={() => stateHandler(otherSide)}>Switch</button>
		{list.map(char =>
			<div key={char.name}>
				<div>Character: {char.name}</div>
				<div>Side: {char.side}</div>
			</div>
		)}
	</div>
)

const FilteredList = withSimpleState('dark')(
	withTransformProps(({ list, stateValue, stateHandler }) => {
		const otherSide = stateValue === 'dark' ? 'light' : 'dark'
		return {
			stateHandler,
			otherSide,
			list: list.filter(char => char.side === stateValue),
		}
	})(renderDisplayList)
)

ReactDOM.render (
	<FilteredList list={starWarsChars} />,
	document.getElementById('app')
)
