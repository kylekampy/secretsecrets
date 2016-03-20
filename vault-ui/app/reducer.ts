/// <reference path="../typings/tsd.d.ts" />
"use strict";

import * as Redux from 'redux';
import App from './components/app';

export default Redux.combineReducers({
    App: App.Reducer
});