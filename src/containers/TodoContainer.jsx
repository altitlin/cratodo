import React, { Component } from 'react'
import { connect } from 'react-redux'

import Todo from '../components/Todo/Todo'

import withLoading from '../hocs/withLoading'

import {
  addTodo,
  removeTodo,
  doTodo,
  requestTodo
} from '../redux/actions/todoActions'
import { changeActiveFilter } from '../redux/actions/filterActions'

import { getId } from '../helpers'

const TodoWithLoading = withLoading(Todo)

class TodoContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: '',
      textToast: '',
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

    if (key === 'Enter') {
      const newTodo = {
        id: getId(todos.length),
        title: inputText,
        done: false,
      }

      addTodo(newTodo)

      this.setState({
        inputText: '',
        textToast: `${inputText} added success!`,
      })
    }
  }

  removeTask = id => {
    const { removeTodo } = this.props

    removeTodo(id)

    this.setState({
      textToast: 'Task removed success!',
    })
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
    const { todos, isLoading, doTodo, changeActiveFilter, activeFilter } = this.props
    const { inputText } = this.state
    const filteredTasks = this.filterTasks(todos, activeFilter)
    const countActiveTasks = filteredTasks.filter(({ done }) => !done).length


    return (
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
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
