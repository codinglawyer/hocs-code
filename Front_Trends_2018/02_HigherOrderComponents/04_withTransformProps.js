const withTransformProps = transformFunc => BaseComponent => baseProps => {
  const transformedProps = transformFunc(baseProps)
  return <BaseComponent {...transformedProps} />
}

const DisplayList = ({ list }) =>
  list.map(char => (
    <div key={char.name}>
      <div>Character: {char.name}</div>
      <div>Side: {char.side}</div>
    </div>
  ))

const FilteredList = withTransformProps(({ list, side }) => ({
  list: list.filter(char => char.side === side)
}))(DisplayList)

ReactDOM.render(
  <FilteredList side="dark" list={starWarsChars} />,
  document.getElementById('app')
)
