/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import Presentational from './presentational';
import * as actions from './actions';
import * as Constants from '../../constants';


const mapStateToProps : ReactRedux.MapStateToProps = (state: any) => {
  return { 
    ActiveTab: state.App.ActiveTab
  }
}

const mapDispatchToProps : ReactRedux.MapDispatchToPropsFunction = (dispatch: Redux.Dispatch) => {
  return { 
    OnTabSelect: (tab: Constants.Tabs) => { dispatch(actions.setTab(tab)); }
  }
}

const Container = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational)

export default Container;