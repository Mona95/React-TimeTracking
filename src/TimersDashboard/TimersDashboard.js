import React, { Component } from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import uuid from "uuid";
import { helpers } from "../helpers";

class TimersDashboard extends Component {
  state = {
    timers: [
      {
        title: "Practice squat",
        project: "Gym chores",
        id: uuid.v4(),
        elapsed: 5456099,
        runningSince: Date.now()
      },
      {
        title: "Bake Squash",
        project: "Kitchen chores",
        id: uuid.v4(),
        elapsed: 1273998,
        runningSince: null
      }
    ]
  };
  handleCreateFormSubmit = timer => {
    this.createTimer(timer);
  };
  handleEditFormSubmit = attr => {
    this.updateTimer(attr);
  };
  createTimer = timer => {
    const t = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t)
    });
  };
  updateTimer = attr => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === attr.id) {
          return Object.assign({}, timer, {
            title: attr.title,
            project: attr.project
          });
        } else {
          return timer;
        }
      })
    });
  };
  handleDeleteClick = timerId => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId)
    });
  };
  handleStartClick = timerId => {
    this.startTimer(timerId);
  };
  handleStopClick = timerId => {
    this.stopTimer(timerId);
  };
  startTimer = timerId => {
    let now = new Date();
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now
          });
        } else {
          return timer;
        }
      })
    });
  };
  stopTimer = timerId => {
    let now = new Date();
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null
          });
        } else {
          return timer;
        }
      })
    });
  };
  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onDeleteClick={this.handleDeleteClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
            isOpen={false}
          />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
