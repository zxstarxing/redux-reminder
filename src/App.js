import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { add_reminder,remove_reminder,clean_reminder } from './actions/'
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  renderReminders() {
    const { reminders,remove_reminder } = this.props;
    return (
      <ul className="list-group col-sm-8 mt-2">
        {
          reminders.map(reminder => (
            <li className="list-group-item" key={reminder.id}>
              <div className="list-item">
                <div>{reminder.text}</div>
                <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
              </div>
              <div
                className="list-item delete-button"
                onClick={()=>remove_reminder(reminder.id)}
                >&#x2715;
                </div>
            </li>
          ))
        }
      </ul>
    )
  }

  render() {
    //dispatch ations
    const { add_reminder,clean_reminder } = this.props;
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>
        <div className="form-inline">
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                this.setState({
                  text: event.target.value
                })
              }}
              placeholder="I have to..." />
            <input
              type="datetime-local"
              className="form-control"
              onChange={(event) => {
                this.setState({
                  dueDate: event.target.value
                })
              }}
            />
          </div>
          <button type="button" onClick={() => { add_reminder(this.state.text, this.state.dueDate) }} className="btn btn-success">Add Reminder</button>
        </div>
        {this.renderReminders()}
        <div className="text-center mt-2">
           <button 
           type="button" 
           className="btn btn-danger" 
           onClick={()=>clean_reminder()} 
           >Clear Reminders</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reminders: state
  }
}


export default connect(mapStateToProps, { add_reminder,remove_reminder,clean_reminder })(App);