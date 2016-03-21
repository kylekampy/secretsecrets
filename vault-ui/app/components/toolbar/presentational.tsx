/// <reference path="../../typings.d.ts" />
"use strict";

import * as React from "react";
import * as constants from "../../constants";

interface IToolbarProps {
    ActiveTab: constants.Tabs;
    OnTabSelect: (tab: constants.Tabs) => {};
}

export default (props: IToolbarProps) => {
    console.log("props", props);

    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar"
                        aria-expanded="false"
                        aria-controls="navbar">

                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <span className="fa-stack">
                            <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                            <i className="fa fa-user-secret fa-stack-2x"></i>
                        </span>
                        <span>Secret Secrets</span>
                    </a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className={ props.ActiveTab === constants.Tabs.Home ? "active" : undefined }>
                            <a href="#" onClick={() => props.OnTabSelect(constants.Tabs.Home) }>Home</a>
                        </li>
                        <li className={ props.ActiveTab === constants.Tabs.About ? "active" : undefined }>
                            <a href="#about" onClick={() => props.OnTabSelect(constants.Tabs.About) }>About</a>
                        </li>
                        <li className={ props.ActiveTab === constants.Tabs.Contact ? "active" : undefined }>
                            <a href="#contact" onClick={() => props.OnTabSelect(constants.Tabs.Contact) }>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

