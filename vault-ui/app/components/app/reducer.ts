/// <reference path="../../typings.d.ts" />
"use strict";

import * as immutable from "immutable";
import * as constants from "../../constants";
import * as actions from "./actions";
import IComponentState from "./state";

const stateRecord = immutable.Record(<IComponentState>{
    ActiveTab: constants.Tabs.Home,
});

const initialState = new stateRecord();

export default (
    state: immutable.Map<string, any> = initialState,
    action: any
): immutable.Map<string, any> => {

    switch (action.type) {
        case actions.Types.SET_TAB:
            return state.set("ActiveTab", action.tab);

        default:
            return state;
    }
};