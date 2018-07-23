import { connect } from 'react-redux'

const TodoItem = ({ todo, removeTodo }) => <div> {/* render UI*/} </div>

const mapStateToProps = state => ({
  todo: state.todos[0]
})

const mapDispatchToProps = dispatch => ({
  removeTodo: () =>
    dispatch({
      type: 'REMOVE_TODO'
    })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem)
