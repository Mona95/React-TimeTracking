import React, { Component } from "react";

export default class TimerForm extends Component {
  state = {
    title: this.props.title || "",
    project: this.props.project || ""
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { title, project } = this.state;
    const submitText = title ? "Update" : "Create";
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="field">
              <label>Project</label>
              <input
                type="text"
                name="project"
                value={project}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="ui two bottom attached buttons">
              <button className="ui basic blue button">{submitText}</button>
              <button className="ui basic red button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
