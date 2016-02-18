/// <reference path="../typings/react.d.ts" />
/// <reference path="../typings/react-dom.d.ts" />
"use strict"

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class DemoProps {
  public name:string;
  // public age:number;
}

class Demo extends React.Component<DemoProps, any> {
  constructor(props:DemoProps) {
    super(props);
  }
  render() {
    return <div>Hello React!!!</div>
  }
}

export function render(element: Element) {
  ReactDOM.render(<Demo name="bubu!" />, element)
}