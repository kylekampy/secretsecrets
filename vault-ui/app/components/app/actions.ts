/// <reference path="../../typings.d.ts" />
"use strict";

import * as constants from "../../constants";

export enum Types {
    SET_TAB
}

export function setTab(tab: constants.Tabs): any {
    "use strict";
    return {
        tab: tab,
        type: Types.SET_TAB,
    };
}