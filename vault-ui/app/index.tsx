/// <reference path="../typings/tsd.d.ts" />
"use strict";

import * as ReactDOM from 'react-dom';
import App from './components/app/app';

export function render(element: Element) {
  ReactDOM.render(<App />, element)
}


