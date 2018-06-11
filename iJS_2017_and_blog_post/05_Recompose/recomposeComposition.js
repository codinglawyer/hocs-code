import { withState, mapProps, compose } from 'recompose';

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
)

const FilteredList = enhance(renderDisplayList)

ReactDOM.render (
	<FilteredList list={starWarsChars} />,
	document.getElementById('app')
)