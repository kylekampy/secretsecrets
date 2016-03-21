/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import * as React from "react";
import * as Constants from "../../constants";
import Toolbar from "../toolbar";
import Jumbotron from "../jumbotron";

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
                <Jumbotron.Container />
            </div>
        </div>
    );
}
