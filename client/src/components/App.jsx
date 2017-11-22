import React from 'react'
import TaskList from './TaskList'

export default class App extends React.Component {
  constructor(){
    super()
    this.state ={
      taskList: [],
      task: ''
    }
  }
  handleTaskInput(e) {
    this.setState({task: e.target.value})
  }
  saveTask() {
    let task = {
      taskDetail: this.state.task,
      isCompleted: false, 
    }
    this.setState((prevState) => { 
      let updatedList = prevState.taskList.slice()
      updatedList.push(task) 
      return {taskList: updatedList} 
    })
    this.setState({task: ''})
  }
  updateChecked(idx) {
    this.setState((prevState) => {
      let updatedList = prevState.taskList.slice()
      updatedList[idx].isCompleted = !updatedList[idx].isCompleted
      return {taskList: updatedList}
    }, () => console.log(this.state.taskList))
  }
  render() {       
    return (
      <div className="container">
        <div className="header">
          <h1>React-Tasks</h1>
        </div>
        <div>
          <input type="text" value={this.state.task} onChange={this.handleTaskInput.bind(this)} />
          <button onClick={this.saveTask.bind(this)}> Add Task </button>
        </div>
        <div className="Tasklist">
          <TaskList tasks={this.state.taskList} updateChecked={this.updateChecked.bind(this)}/>
        </div>
      </div>
    )
  }
}