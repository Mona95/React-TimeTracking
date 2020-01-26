import React, { Component } from "react";

export default class TimerForm extends Component {
  render() {
    const { title, project } = this.props;
    const submitText = title ? "Update" : "Create";
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <input type="text" defaultValue={title} />
            </div>
            <div className="field">
              <label>Project</label>
              <input type="text" defaultValue={project} />
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
