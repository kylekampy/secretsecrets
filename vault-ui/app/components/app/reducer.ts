/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import * as constants from '../../constants';
import * as actions from './actions';

interface State {
    ActiveTab: constants.Tabs;
}

const initialState: State = {
    ActiveTab: constants.Tabs.Home
}

export default (state: State = initialState, action: any): State => {
    switch (action.type) {
        case actions.Types.SET_TAB:
            return {
                ActiveTab: action.tab
            };
        
        default:
            console.log("Returning state", state);
            return state;
    }
}