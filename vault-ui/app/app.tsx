/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./models/clock.ts" />
"use strict";

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import models = vaultUi.models

class DemoProps {
  public name:string;
}

class DemoState { 
    public time:Date;
}

class App extends React.Component<DemoProps, DemoState> {
  constructor(props:DemoProps) {
    super(props);
  }

  fetchStateFromServer() { 
      var state = new DemoState();
      state.time = new Date();
      this.setState(state);
  }

  public componentWillMount(): void {
      this.fetchStateFromServer();
  }

  public componentDidMount():void {
      setInterval(() => this.fetchStateFromServer(), 1000);
  }

  public render():JSX.Element {
    return (
        <div>
            <h1><i className="fa fa-user-secret"></i> {this.props.name}!</h1> 
            <p>The date is {this.state.time.toString()}</p>
        </div>
        );
  }
}

export function render(element: Element) {
  ReactDOM.render(<App name="Secret Service"/>, element)
}