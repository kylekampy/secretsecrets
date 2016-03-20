/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import Presentational from './presentational';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as Constants from '../../constants';

const mapStateToProps : ReactRedux.MapStateToProps = (state: any) => {
  return {
    // ActiveTab: Constants.Tabs.About
  }
}

const mapDispatchToProps : ReactRedux.MapDispatchToPropsFunction = (dispatch: Redux.Dispatch) => {
  return {
    // onTodoClick: (id) => {
    //   dispatch(toggleTodo(id))
    // }
  }
}

const Container = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational)


export default Container;