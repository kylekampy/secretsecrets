/// <reference path="../typings/tsd.d.ts" />
"use strict";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import views = require('./views');


class AppProps {
  public name:string;
}

class AppState { 
}

class App extends React.Component<AppProps, AppState> {
    constructor(props:AppProps) {
      super(props);
    }

    public render():JSX.Element {
        return (
            <div className="main">
                <div className="container">
                    <div className="row toolbar">
                        <views.Toolbar />
                    </div>

                    <div className="row">
                        <span>foo</span>
                    </div>

                                        <div className="row">
                        <span>foo</span>
                    </div>

                                        <div className="row">
                        <span>foo</span>
                    </div>

                                        <div className="row">
                        <span>foo</span>
                    </div>

                                        <div className="row">
                        <span>foo</span>
                    </div>

                                        <div className="row">
                        <span>foo</span>
                    </div>

                                        <div className="row">
                        <span>foo</span>
                    </div>

                                        <div className="row">
                        <span>foo</span>
                    </div>

                                        <div className="row">
                        <span>foo</span>
                    </div>

                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>


                                        <div className="row">
                        <span>foo</span>
                    </div>


                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                                        <div className="row">
                        <span>foo</span>
                    </div>
                </div>
            </div>
        );
    }
}

export function render(element: Element) {
  ReactDOM.render(<App name="Secret Secrets"/>, element)
}
