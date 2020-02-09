import React, { Component } from "react";
import { helpers } from "../helpers";

export default class Timer extends Component {
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">{this.props.title}</div>
          <div className="meta">{this.props.project}</div>
          <div className="center aligned description">
            <h2>{elapsedString}</h2>
          </div>
          <div className="extra content">
            <span
              className="right floated edit icon"
              style={{ cursor: "pointer" }}
              onClick={this.props.onEditClick}
              data-tooltip="Edit Timer"
            >
              <i className="green edit icon"></i>
            </span>
            <span
              className="right floated trash icon"
              style={{ cursor: "pointer" }}
              data-tooltip="Delete Timer"
            >
              <i className="red trash icon"></i>
            </span>
          </div>
        </div>
        <div className="ui bottom attached blue basic button">Start</div>
      </div>
    );
  }
}
