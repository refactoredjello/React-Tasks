import React from 'react'

export default class App extends React.Component {
  constructor(){
    super()
    this.state ={
      taskList: [{}],
      Task: ''
    }
  }
  

  render() {
    return (
      <div className="container">
        <div className="header">
        </div>
        <div>
          <input type="test" value={this.state.Task} onChange={this.handleChange} />
        </div>
        {/* {Tasklist} */}
      </div>
    )
  }
}