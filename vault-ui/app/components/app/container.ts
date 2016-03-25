/// <reference path="../../typings.d.ts" />
"use strict";

import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import Presentational from "./presentational";
import * as actions from "./actions";
import * as constants from "../../constants";
import IState from "../../state";


const mapStateToProps: ReactRedux.MapStateToProps = (state: IState): any => {
    return {
        ActiveTab: state.App.ActiveTab,
    };
};

const mapDispatchToProps: ReactRedux.MapDispatchToPropsFunction = (dispatch: Redux.Dispatch): any => {
    return {
        OnTabSelect: (tab: constants.Tabs): void => { dispatch(actions.setTab(tab)); },
    };
};

const container = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(Presentational);

export default container;