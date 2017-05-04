import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import {TTT} from './TTT';
import {Scoreboard} from './Scoreboard';
import {reducer as tttReducer} from './TTT.reducer';
import './index.css';

const reducer = Redux.combineReducers({
  game: tttReducer
});

let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const TTTContainer = ReactRedux.connect(
  state => ({game: state.game}),
  dispatch => ({
    select: (index) => dispatch({
      type: 'select',
      idx: index
    }),
    reset: () => dispatch({
      type: 'reset'
    })
  })
)(TTT);

const ScoreboardContainer = ReactRedux.connect(
  state => ({scores: state.game.scores}),
  dispatch => ({
    select: (index) => dispatch({
      type: 'select',
      idx: index
    })
  })
)(Scoreboard);


ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <TTTContainer/>
      <ScoreboardContainer/>
    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
