/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import * as Constants from '../../constants';

export enum Types {
    SET_TAB
}

export function setTab(tab: Constants.Tabs) {
    return {
        type: Types.SET_TAB,
        tab: tab
    };
}