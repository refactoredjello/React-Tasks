import React from 'react'

export default class TaskEntry extends React.Component {
  constructor() {
    super()
    this.state = {
      editing: false
    }
  }
  launchEditTask(){
      this.setState({editing: !this.state.editing})
  }
  render() {
    const { taskDetail, isCompleted } = this.props.task
    const { updateChecked, idx } = this.props
    let edit = this.state.editing
    console.log(edit)
    return (
      <div><span onClick={this.launchEditTask.bind(this)}> {taskDetail} </span> <input type="checkbox" checked={isCompleted} onChange={e => updateChecked(idx)} /></div>
    )
  }
}