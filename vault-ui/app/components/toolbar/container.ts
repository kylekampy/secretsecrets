/// <reference path="../../typings.d.ts" />
"use strict";

import Presentational from "./presentational";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";

const mapStateToProps: ReactRedux.MapStateToProps = (state: any) => {
    return {};
};

const mapDispatchToProps: ReactRedux.MapDispatchToPropsFunction = (dispatch: Redux.Dispatch) => {
    return {};
};

const container = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(Presentational);


export default container;