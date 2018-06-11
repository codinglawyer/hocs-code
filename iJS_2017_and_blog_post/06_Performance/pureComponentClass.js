import { withState, mapProps, compose, withHandlers } from 'recompose';

class Heading extends React.PureComponent {
	render() {
		return <div>{this.props.text}</div>
	}
}

const renderDisplayList = ({ title, list, handleSetState }) => (
	<div>
		<Heading text={title} />
		<button onClick={handleSetState}>Switch</button>
		{list.map(char =>
			<div key={char.name}>
				<div>Character: {char.name}</div>
				<div>Side: {char.side}</div>
			</div>
		)}
	</div>
)

const enhance = compose(
	withState('stateValue', 'stateHandler', 'dark'),
	mapProps(({ list, stateValue, stateHandler, title }) => {
		const otherSide = stateValue === 'dark' ? 'light' : 'dark'
		return {
			stateHandler,
			otherSide,
			list: list.filter(char => char.side === stateValue),
			title,
		}
	}),
	withHandlers({
		handleSetState: ({ stateHandler, otherSide }) => () => stateHandler(otherSide)
	})
)

const FilteredList = enhance(renderDisplayList)

ReactDOM.render (
	<FilteredList title='List of SW Characters' list={starWarsChars} />,
	document.getElementById('app')
)

