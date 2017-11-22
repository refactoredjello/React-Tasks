import React from 'react'
import TaskEntry from './TaskEntry'

export default class TaskList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { tasks, updateChecked } = this.props
    return (
      <div> {tasks.map((task, idx) => <TaskEntry task={task} key={idx} idx= {idx} updateChecked={updateChecked} />) } </div>
    )
  }
}