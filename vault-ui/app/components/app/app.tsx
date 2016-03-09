/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import * as React from 'react';
import * as Toolbar from '../toolbar/toolbar';

export default class App extends React.Component<{}, {}> {
    constructor(props:any) {
      super(props);
    }

    public render():JSX.Element {
        return (
            <div>
                <div>
                    <Toolbar.Toolbar />
                </div>
                
            </div>
        );
    }
}


