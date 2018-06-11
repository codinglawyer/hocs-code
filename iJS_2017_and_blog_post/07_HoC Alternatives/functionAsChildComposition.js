class SimpleState extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: this.props.defaultState }
		this.updateState = this.updateState.bind(this)
	}
	updateState(value) {
		this.setState({ value })
	}
	render() {
		return this.props.children({
			...this.props,
			stateValue: this.state.value,
			stateHandler: this.updateState,
		})
	}
}

const TransformProps = ({ children, mapperFunc, ...props}) => {
	const transformedProps = mapperFunc(props)
	return children(transformedProps)
}

const DisplayList = ({ list, stateHandler, otherSide }) => (
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

ReactDOM.render (
	<SimpleState defaultState='dark' list={starWarsChars}>
		{props =>
			<TransformProps
				{...props}
				mapperFunc={
					({ list, stateValue, stateHandler }) => {
						const otherSide = stateValue === 'dark' ? 'light' : 'dark'
						return {
							otherSide,
							stateHandler,
							list: list.filter(char => char.side === stateValue),
						}
					}
				}
			>
				{props =>
					<DisplayList
						list={props.list}
						stateHandler={props.stateHandler}
						otherSide={props.otherSide}
					/>
				}
			</TransformProps>
		}
	</SimpleState>,
	document.getElementById('app')
)








