/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import * as React from "react";

export default class Jumbotron extends React.Component<{}, {}>  {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1>Hello, world!</h1>
                    <p>...</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </div>
            </div>
        );
    }
}
