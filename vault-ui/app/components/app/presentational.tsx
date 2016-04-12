/// <reference path="../../typings.d.ts" />
"use strict";

import * as React from "react";
import * as RB from "react-bootstrap";
import * as Constants from "../../constants";
import Toolbar from "../toolbar";

interface IAppProps {
    ActiveTab: Constants.Tabs;
    OnTabSelect?: (tab: Constants.Tabs) => {};
}

export default (props: IAppProps) => {
    return (
        <div>
            <div>
                <Toolbar.Container
                    ActiveTab={props.ActiveTab}
                    OnTabSelect={props.OnTabSelect}
                    />

                <RB.Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>...</p>
                    <p><RB.Button bsStyle="primary">Learn more</RB.Button></p>
                </RB.Jumbotron>
            </div>
        </div>
    );
}
