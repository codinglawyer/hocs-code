const TransformProps = ({ children, mapperFunc, ...props}) => {
	const transformedProps = mapperFunc(props)
	return children(transformedProps)
}

const DisplayList  = ({ list }) =>
	<div>
		{list.map(char =>
			<div key={char.name}>
				<div>Character: {char.name}</div>
				<div>Side: {char.side}</div>
			</div>
		)}
	</div>


ReactDOM.render (
	<TransformProps
		side='dark'
		list={starWarsList}
		mapperFunc={
			({list, side}) => ({
				list: list.filter(char => char.side === side),
			})
		}
	>
		{props =>
			<DisplayList list={props.list} />
		}
	</TransformProps>,
	document.getElementById('app')
)
