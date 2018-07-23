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

const compose = (...hocs) => BaseComponent =>
  hocs.reduceRight((acc, hoc) => hoc(acc), BaseComponent)

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

const Warning = () => <div>You need to have more than one character</div>

const enhance = compose(
  withTransformProps(({ list, side }) => ({
    list: list.filter(char => char.side === side)
  })),
  withCondition(({ list }) => list.length <= 1, Warning)
)

const FilteredList = enhance(DisplayList)

ReactDOM.render(
  <FilteredList side="dark" list={starWarsChars} />,
  document.getElementById('app')
)
