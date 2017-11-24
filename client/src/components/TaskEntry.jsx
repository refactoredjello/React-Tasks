
//TODO - Update task on press enter 
//TODO - Update task in taskList on App
import React from 'react'

export default class TaskEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      currentTaskDetail: this.props.task.taskDetail
    }
  }
  launchEditTask(){
    this.setState({editing: !this.state.editing})
  }
  updateTaskDetail(e){
    this.setState({currentTaskDetail: e.target.value},
       () => console.log(this.state.currentTaskDetail))
  }
  render() {
    const { isCompleted } = this.props.task
    const { updateChecked, idx } = this.props

    //Show and hide editable text field to edit task
    let textField = <span onClick={this.launchEditTask.bind(this)}> {this.state.currentTaskDetail} </span> 
    if (this.state.editing) {
      textField = <input 
                    type="text" 
                    value={this.state.currentTaskDetail} 
                    onChange={this.updateTaskDetail.bind(this)} 
                    onMouseLeave={this.launchEditTask.bind(this)}
                    onKeyPress={(e) => { 
                      if (e.key === 'Enter') this.launchEditTask.call(this)
                      } 
                    }
                  />
    }
    return (
      <div>
        {textField}
        <input type="checkbox" checked={isCompleted} onChange={e => updateChecked(idx)} />
      </div>
    )
  }
}