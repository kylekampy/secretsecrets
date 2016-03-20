/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import Presentational from "./presentational";
import * as actions from "./actions";
import * as constants from "../../constants";


const mapStateToProps: ReactRedux.MapStateToProps = (state: any): any => {
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