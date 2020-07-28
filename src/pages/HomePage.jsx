import React, { Component } from 'react'

import Todo from '../components/Todo/Todo'

import { getId } from '../helpers'
import Provider from '../context'
import Alert from '../components/Alert/Alert'

import withLoading from '../hocs/withLoading'

const TODOS = [
  { id: '1', title: 'Task One', done: false },
  { id: '2', title: 'Task Two', done: false },
  { id: '3', title: 'Task Three', done: true },
  { id: '4', title: 'Task Four', done: false },
]

const TodoWithLoading = withLoading(Todo)

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      inputText: '',
      isLoading: false,
      textToast: '',
      showToast: false,
    }
  }

  componentDidMount() {
    this.setState(prev => ({
      isLoading: !prev.isLoading,
    }))

    setTimeout(() => {
      this.setState(prev => ({
        todos: [...prev.todos, ...TODOS],
        isLoading: !prev.isLoading,
      }))
    }, 2500);
  }

  inputChangeHandler = ({ target: { value } }) => {
    this.setState({ inputText: value })
  }

  inputKeyPressHandler = ({ key }) => {
    const { inputText, todos } = this.state

    if (key === 'Enter') {
      this.setState(prev => ({
        todos: [...prev.todos, { id: getId(todos.length), title: inputText, done: false }],
        textToast: `${inputText} added success!`,
        inputText: '',
        showToast: !prev.showToast
      }))

      setTimeout(() => {
        this.setState(prev => ({ showToast: !prev.showToast }))
      }, 3000)
    }
  }

  removeTask = id => {
    const { todos } = this.state

    this.setState({
      todos: todos.filter(todo => todo.id !== id),
      textToast: 'Task removed success!',
      showToast: true,
    })

    setTimeout(() => {
      this.setState(prev => ({ showToast: !prev.showToast }))
    }, 3000)
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
    const { todos, inputText, isLoading, showToast, textToast } = this.state
    const countDoneTasks = todos.filter(({ done }) => !done).length
    const value = {
      todos,
      countDoneTasks,
      isLoading,
      value: inputText,
      onClickBtn: this.clickBtnHandler,
      onChange: this.inputChangeHandler,
      onKeyPress: this.inputKeyPressHandler,
      removeTask: this.removeTask,
      doTask: this.doTask,
    }

    return (
      <Provider value={value}>
        <TodoWithLoading isLoading={value.isLoading} />
        <Alert showToast={showToast} text={textToast} />
      </Provider>
    )
  }
}

export default HomePage
