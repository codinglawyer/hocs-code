const withCondition = (
  conditionFn,
  EitherComponent
) => BaseComponent => baseProps =>
  conditionFn(baseProps) ? (
    <EitherComponent />
  ) : (
    <BaseComponent {...baseProps} />
  )

const DisplayList = ({ list }) =>
  list.map(char => (
    <div key={char.name}>
      <div>Character: {char.name}</div>
      <div>Side: {char.side}</div>
    </div>
  ))

const Warning = () => <div>You need to have more than one character</div>

const ConditionedList = withCondition(({ list }) => list.length <= 1, Warning)(
  DisplayList
)

ReactDOM.render(
  <ConditionedList list={starWarsChars} />,
  document.getElementById('root')
)
