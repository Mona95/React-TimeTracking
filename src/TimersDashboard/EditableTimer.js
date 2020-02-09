import React, { Component } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default class EditableTimer extends Component {
  state = {
    editFormOpen: false
  };
  closeForm = () => {
    this.setState({ editFormOpen: false });
  };
  openForm = () => {
    this.setState({ editFormOpen: true });
  };
  handleEditClick = timer => {
    this.openForm();
  };
  handleFormClose = () => {
    this.closeForm();
  };
  handleSubmitForm = timer => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };
  render() {
    const {
      id,
      title,
      project,
      editFormOpen,
      runningSince,
      elapsed
    } = this.props;
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleSubmitForm}
        />
      );
    } else {
      return (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
          onEditClick={this.handleEditClick}
          onDeleteClick={this.props.onDeleteClick}
        />
      );
    }
  }
}
