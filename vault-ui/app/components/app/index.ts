/// <reference path="../../typings.d.ts" />
"use strict";

import container from "./container";
import reducer from "./reducer";
import * as actions from "./actions";

export default {
    Actions: actions,
    Container: container,
    Reducer: reducer,
};