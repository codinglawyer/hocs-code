const withFilterProps = BaseComponent => ({ list, side }) => {
  const transformedProps = list.filter(char => char.side === side)
  return <BaseComponent list={transformedProps} />
}

const DisplayList = ({ list }) =>
  list.map(char => (
    <div key={char.name}>
      <div>Character: {char.name}</div>
      <div>Side: {char.side}</div>
    </div>
  ))

const FilteredList = withFilterProps(DisplayList)

ReactDOM.render(
  <FilteredList side="dark" list={starWarsChars} />,
  document.getElementById('app')
)
