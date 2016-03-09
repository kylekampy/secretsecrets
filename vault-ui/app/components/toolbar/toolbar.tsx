/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import * as React from 'react';

export class ToolbarProps { }

export class ToolbarState { }

export class Toolbar extends React.Component<ToolbarProps, ToolbarState>  {
    constructor(props: ToolbarProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <nav className="toolbar">
                <div className="container">
                    <div className="one column">
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                            <i className="fa fa-user-secret fa-stack-2x"></i>
                        </span>
                    </div>
                    <div className="two columns">
                        <a className="button" href="/nav1/">NAV1</a>                
                    </div>
                    <div className="two columns">
                        <a className="button" href="/nav2/">NAV2</a>
                    </div>
                </div>
            </nav>
        )
    }
}
