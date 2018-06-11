const starWarsChars = [
  { name: 'Luke', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
  { name: 'Obi-wan Kenobi', side: 'light' },
  { name: 'Palpatine', side: 'dark' }
]

const FilteredList = ({ list, side }) => {
  const transformedList = list.filter(char => char.side === side)
  return transformedList.length > 1 ? (
    transformedList.map(char => (
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))
  ) : (
    <div>You need to have more than one character.</div>
  )
}

ReactDOM.render(
  <FilteredList side="dark" list={starWarsChars} />,
  document.getElementById('app')
)
