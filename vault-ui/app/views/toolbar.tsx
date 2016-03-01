/// <reference path="../../typings/tsd.d.ts" />
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
            <h4><i className="fa fa-user-secret"></i></h4>
        )
    }
}
