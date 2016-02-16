/// <reference path="../typings/react.d.ts" />
"use strict"

import * as React from 'react';

class DemoProps {
  public name:string;
  public age:number;
}

class Demo extends React.Component<DemoProps, any> {
  private foo:number;
  constructor(props:DemoProps) {
    super(props);
    this.foo = 42;
  }
  render() {
    return <div>Hello world!!!</div>
  }
}