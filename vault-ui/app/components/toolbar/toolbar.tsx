/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import * as React from 'react';

export default class Toolbar extends React.Component<{}, {}>  {
    constructor(props: any) {
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
                        <a href="/nav1/">NAV1</a>                
                    </div>
                    <div className="two columns">
                        <a href="/nav2/">NAV2</a>
                    </div>
                </div>
            </nav>
        )
    }
}
