import { mapProps, branch, compose } from 'recompose'

const DisplayList = ({ list }) => (
  <div>
    {list.map(char => (
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))}
  </div>
)

const withWarning = () => () => (
  <div>You need to have more than one character</div>
)

const enhance = compose(
  mapProps(({ list, side }) => ({
    list: list.filter(char => char.side === side)
  })),
  branch(({ list }) => list.length <= 1, withWarning)
)

const FilteredList = enhance(DisplayList)

ReactDOM.render(
  <FilteredList side="dark" list={starWarsChars} />,
  document.getElementById('root')
)
