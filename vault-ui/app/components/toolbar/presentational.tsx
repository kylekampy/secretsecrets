/// <reference path="../../typings.d.ts" />
"use strict";

import * as React from "react";
import * as RB from "react-bootstrap";
import * as constants from "../../constants";

interface IToolbarProps {
    ActiveTab: constants.Tabs;
    OnTabSelect: (tab: constants.Tabs) => {};
}

export default (props: IToolbarProps) => {
    return (
        <RB.Navbar fixedTop={true}>
            <RB.Navbar.Header>
                <RB.Navbar.Brand>
                    <a href="/">
                        <span className="fa-stack">
                            <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                            <i className="fa fa-user-secret fa-stack-2x"></i>
                        </span>
                        <span>Secret Secrets</span>
                    </a>
                </RB.Navbar.Brand>
            </RB.Navbar.Header>
            <RB.Nav>
                <RB.NavItem href="#" active={props.ActiveTab === constants.Tabs.Home}
                            onClick={() => props.OnTabSelect(constants.Tabs.Home)}>Home</RB.NavItem>
                <RB.NavItem href="#about" active={props.ActiveTab === constants.Tabs.About}
                            onClick={() => props.OnTabSelect(constants.Tabs.About)}>About</RB.NavItem>
                <RB.NavItem href="#contact" active={props.ActiveTab === constants.Tabs.Contact}
                            onClick={() => props.OnTabSelect(constants.Tabs.Contact)}>Contact</RB.NavItem>
            </RB.Nav>

        </RB.Navbar>
    );
}

