import React, { Component } from "react";

type Props = {};

type State = {};

class Loader extends Component<Props, State> {
  state = {};

  render() {
    return <span className="loading loading-spinner loading-xs"></span>;
  }
}

export default Loader;
