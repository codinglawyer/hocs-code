import { withProps, branch, compose, withState } from 'recompose'

const DisplayList = ({ filtered, setState, state }) => (
  <div>
    {filtered.map(char => (
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))}
    <button onClick={() => setState(state === 'dark' ? 'light' : 'dark')}>
      Toggle
    </button>
  </div>
)

const withWarning = () => () => (
  <div>You need to have more than one character</div>
)

const enhance = compose(
  withState('state', 'setState', 'dark'),
  withProps(({ list, state }) => ({
    filtered: list.filter(char => char.side === state)
  })),
  branch(({ filtered }) => filtered.length <= 1, withWarning)
)

const FilteredList = enhance(DisplayList)

ReactDOM.render(
  <FilteredList list={starWarsChars} />,
  document.getElementById('root')
)
