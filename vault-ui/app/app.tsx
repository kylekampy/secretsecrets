/// <reference path="../typings/tsd.d.ts" />
"use strict";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Toolbar from './components/toolbar/toolbar';

export default class App extends React.Component<{}, {}> {
    constructor(props:any) {
      super(props);
    }

    public render():JSX.Element {
        return (
            <div>
                <div>
                    <Toolbar />
                </div>
            </div>
        );
    }
}


export function render(element: Element) {
  ReactDOM.render(<App />, element)
}


