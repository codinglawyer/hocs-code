const withFilterProps = BaseComponent => ({ list, side }) => {
	const transformedProps = list.filter(char => char.side === side)
	return <BaseComponent list={transformedProps} />
}

const renderDisplayList = ({ list }) =>
	<div>
		{list.map(char =>
			<div key={char.name}>
				<div>Character: {char.name}</div>
				<div>Side: {char.side}</div>
			</div>
		)}
	</div>

const FilteredList = withFilterProps(renderDisplayList)

ReactDOM.render (
	<FilteredList side='dark' list={starWarsChars} />,
	document.getElementById('app')
)