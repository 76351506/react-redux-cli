import React, { Component } from "react";
import RouterView from "@/router";

export default class Interview extends Component {
  render() {
    return (
      <div>
        Interview
        <RouterView routes={this.props.routes} />
      </div>
    );
  }
}
