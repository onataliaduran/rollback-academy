import { combineReducers } from 'redux';

const todos = [{ title: 'learn redux' }];

const addToDoReducer = (state = todos, action) => {
  if (action.type === 'SUbMIT_TODO') {
    return action.payload;
  }

  return state;
};

const rootReducer = combineReducers({
  todos: addToDoReducer,
});

export default rootReducer;
