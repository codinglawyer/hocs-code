const withTransformProps = mapperFunc =>
	BaseComponent => baseProps => {
		const transformedProps = mapperFunc(baseProps)
		return <BaseComponent {...transformedProps} />
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

const FilteredList = withTransformProps(
	({ list, side }) => ({
		list: list.filter(char =>
			char.side === side)
	})
)(renderDisplayList)

ReactDOM.render (
	<FilteredList
		side='dark'
		list={starWarsChars}
	/>,
	document.getElementById('app')
)
