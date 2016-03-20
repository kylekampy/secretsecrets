/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import * as constants from "../../constants";
import * as actions from "./actions";

interface IState {
    ActiveTab: constants.Tabs;
};

const initialState: IState = {
    ActiveTab: constants.Tabs.Home,
};

export default (state: IState = initialState, action: any): IState => {
    switch (action.type) {
        case actions.Types.SET_TAB:
            return {
                ActiveTab: action.tab,
            };

        default:
            console.log("Returning state", state);
            return state;
    }
};