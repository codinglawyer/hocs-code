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
  list: [...list, { name: 'Han Solo', side: 'light' }]
}))(DisplayList)

ReactDOM.render(
  <FilteredList side="dark" list={starWarsChars} />,
  document.getElementById('app')
)
