import React, { Component } from 'react'
import { connect } from 'react-redux'

import Alert from '../components/Alert/Alert'
import Todo from '../components/Todo/Todo'

import withLoading from '../hocs/withLoading'

import {
  addTodo,
  removeTodo,
  doTodo,
  requestTodo,
  showToast,
} from '../redux/actions/todoActions'
import { changeActiveFilter } from '../redux/actions/filterActions'

import { getId, isValid } from '../helpers'
import messages from '../messages'

const TodoWithLoading = withLoading(Todo)

class TodoContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: '',
    }
  }

  componentDidMount() {
    const { requestTodo } = this.props

    requestTodo()
  }

  inputChangeHandler = ({ target: { value } }) => {
    this.setState({ inputText: value })
  }

  addTask = ({ key }) => {
    const { todos, addTodo } = this.props
    const { inputText } = this.state

    if (key === 'Enter' && isValid(inputText)) {
      const newTodo = {
        id: getId(todos.length),
        title: inputText,
        done: false,
      }

      addTodo(newTodo)

      this.setState({ inputText: '' })
    }
  }

  removeTask = id => {
    const { removeTodo, showToast } = this.props

    removeTodo(id)
    showToast(messages.successRemove)
  }

  filterTasks = (todos, activeFilter) => {
    switch (activeFilter) {
      case 'ACTIVE':
        return todos.filter(({ done }) => !done)

      case 'DONE':
        return todos.filter(({ done }) => done)

      default:
        return todos
    }
  }

  render() {
    const { todos, isLoading, doTodo, changeActiveFilter, activeFilter, isShowToast, textToast } = this.props
    const { inputText } = this.state
    const filteredTasks = this.filterTasks(todos, activeFilter)
    const countActiveTasks = filteredTasks.filter(({ done }) => !done).length


    return (
      <>
        <TodoWithLoading
          isLoading={isLoading}
          todos={filteredTasks}
          value={inputText}
          countActiveTasks={countActiveTasks}
          doTodo={doTodo}
          onChange={this.inputChangeHandler}
          onKeyPress={this.addTask}
          onClickBtn={changeActiveFilter}
          removeTask={this.removeTask}
        />
        <Alert text={textToast} showToast={isShowToast} />
      </>
    )
  }
}

const mapStateToProps = state => ({ ...state.todo, ...state.filter })

const mapDispatchToProps = {
  addTodo,
  removeTodo,
  doTodo,
  requestTodo,
  changeActiveFilter,
  showToast,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
