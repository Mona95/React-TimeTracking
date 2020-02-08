import React, { Component } from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import uuid from "uuid";

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
  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList timers={this.state.timers} />
          <ToggleableTimerForm isOpen={false} />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
