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
  createTimer = timer => {
    const t = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t)
    });
  };
  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList timers={this.state.timers} />
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
