/// <reference path="typings.d.ts" />
"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { Provider } from "react-redux";
import * as Constants from "./constants";
import App from "./components/app";
import reducer from "./reducer";

class Main extends React.Component<{}, {}> {
    private store: Redux.Store;

    constructor(props: any) {
        super(props);
        this.store = Redux.createStore(reducer);
    }

    public render(): JSX.Element {
        return (
            <Provider store={this.store}>
                <App.Container ActiveTab={Constants.Tabs.Home} />
            </Provider>
        );
    }
}


export function render(element: Element): void {
    "use strict";

    ReactDOM.render(<Main />, element);
};