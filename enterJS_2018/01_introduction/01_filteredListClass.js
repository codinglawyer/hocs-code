const starWarsChars = [
  { name: 'Luke', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
  { name: 'Obi-wan Kenobi', side: 'light' },
  { name: 'Palpatine', side: 'dark' }
]

class FilteredList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { side: 'dark' }
  }
  toggleState() {
    this.setState({ side: this.state.side === 'dark' ? 'light' : 'dark' })
  }
  render() {
    const filtered = this.props.list.filter(
      char => char.side === this.state.side)
    return filtered.length > 1 ? (
      <div>
        {filtered.map(char => (
          <div key={char.name}>
            <div>Character: {char.name}</div>
            <div>Side: {char.side}</div>
          </div>
        ))}
        <button onClick={() => this.toggleState()}>Toggle</button>
      </div>
    ) : (<div>You need to have more than one character.</div>)}}

ReactDOM.render(
  <FilteredList list={starWarsChars} />,
  document.getElementById('root')
)
