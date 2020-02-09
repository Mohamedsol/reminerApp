import React, { Component } from 'react'
import { add_Reminder, remove_Reminder, clear_Reminder } from '../Actions/Action'
import { connect } from 'react-redux'
import moment from 'moment'
import logo from './reminders-logo.jpg'




export class App extends Component {
  state = {
    text: '',
    date: new Date()
  }

  render_Reminders = () => {
    const {reminders} = this.props ;
    return(
      <ul className="list-group">
        {
          reminders.map(reminder => {
            return(
              <li key={reminder.id} className="list-group-item">
                <div>{reminder.text}</div>
                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                <div 
                className= "btn btn-danger closeIcon"
                onClick={ () => this.props.remove_Reminder(reminder.id)}>X</div>
              </li>
            )
          })
        }
      </ul>
    )
  }
  render() {
    return (
      <div className="main">
          <img src={logo} />
          <h2 className="reminder-title">What should U Do ?</h2>

          <input 
          type="text" 
          value= {this.state.text}
          className="form-control" 
          placeholder="Enter you reminder ...?"
          onChange={(e) => this.setState({text: e.target.value})}
          />

          <input 
          type="datetime-local"
          value= {this.state.date} 
          className="form-control" 
          onChange={(e) => this.setState({date: e.target.value})}
          />

          <button 
          className="btn btn-primary btn-block"
          onClick={ () => {
            this.props.add_Reminder(this.state.text, this.state.date)
            this.setState({
              text:"",
              date:""
            })
          }}
          
          >Add reminder</button>
          {this.render_Reminders()}
          <button 
          className="btn btn-danger btn-block"
          onClick={ () => this.props.clear_Reminder()}
          >Clear reminder</button> 
      </div>
    );
  }
}

function mapStateToProps(state){
  return { reminders: state }
}

export default connect(mapStateToProps, {add_Reminder, remove_Reminder, clear_Reminder})(App);
