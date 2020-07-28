import React, { Component } from 'react'

import Todo from '../components/Todo/Todo'

import { getId } from '../helpers'
import Provider from '../context'

const TODOS = [
  { id: '1', title: 'Task One', done: false },
  { id: '2', title: 'Task Two', done: false },
  { id: '3', title: 'Task Three', done: true },
  { id: '4', title: 'Task Four', done: false },
]

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      inputText: ''
    }
  }

  componentDidMount() {
    this.setState(prev => ({
      todos: [...prev.todos, ...TODOS]
    }))
  }

  inputChangeHandler = ({ target: { value } }) => {
    this.setState({ inputText: value })
  }

  inputKeyPressHandler = ({ key }) => {
    const { inputText, todos } = this.state

    if (key === 'Enter') {
      this.setState(prev => ({
        todos: [...prev.todos, { id: getId(todos.length), title: inputText, done: false }]
      }))

      this.setState({ inputText: '' })
    }
  }

  removeTask = id => {
    const { todos } = this.state

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  doTask = id => {
    const { todos } = this.state

    this.setState({
      todos: todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)
    })
  }

  clickBtnHandler = ({ target: { innerText } }) => {
    let filteredTasks

    switch (innerText) {
      case 'ACTIVE':
        filteredTasks = TODOS.filter(({ done }) => !done)
        break;

      case 'DONE':
        filteredTasks = TODOS.filter(({ done }) => done)
        break;

      default:
        filteredTasks = TODOS
        break;
    }

    this.setState({ todos: filteredTasks })
  }

  render() {
    const { todos, inputText } = this.state
    const countDoneTasks = todos.filter(({ done }) => !done).length
    const value = {
      todos,
      countDoneTasks,
      value: inputText,
      onClickBtn: this.clickBtnHandler,
      onChange: this.inputChangeHandler,
      onKeyPress: this.inputKeyPressHandler,
      removeTask: this.removeTask,
      doTask: this.doTask,
    }

    return (
      <Provider value={value}>
        <Todo />
      </Provider>
    )
  }
}
