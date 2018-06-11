import { withState, mapProps, withHandlers, compose } from 'recompose';

const renderDisplayList = ({ list, handleSetState }) => (
	<div>
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
	mapProps(({ list, stateValue, stateHandler }) => {
		const otherSide = stateValue === 'dark' ? 'light' : 'dark'
		return {
			stateHandler,
			otherSide,
			list: list.filter(char => char.side === stateValue),
		}
	}),
	withHandlers({
		handleSetState: ({ stateHandler, otherSide }) => () => stateHandler(otherSide)
	})
)

const FilteredList = enhance(renderDisplayList)

ReactDOM.render (
	<FilteredList list={starWarsChars} />,
	document.getElementById('app')
)