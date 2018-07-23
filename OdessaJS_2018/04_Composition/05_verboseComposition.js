const withTransformProps = transformFunc => BaseComponent => baseProps => {
  const transformedProps = transformFunc(baseProps)
  return <BaseComponent {...transformedProps} />
}

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

const FilteredList = withTransformProps(({ list, side }) => ({
  list: list.filter(char => char.side === side)
}))(ConditionedList)

ReactDOM.render(
  <FilteredList side="dark" list={starWarsChars} />,
  document.getElementById('root')
)
