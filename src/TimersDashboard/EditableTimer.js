import React, { Component } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default class EditableTimer extends Component {
  state = {
    editFormOpen: false
  };
  render() {
    const { title, project, editFormOpen, runningSince, elapsed } = this.props;
    if (this.state.editFormOpen) {
      return <TimerForm title={title} project={project} />;
    } else {
      return (
        <Timer
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
        />
      );
    }
  }
}
