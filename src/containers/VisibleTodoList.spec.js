// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import VisibleTodoList from './VisibleTodoList';
import { toggleTodo, setVisibilityFilter } from '../actions';

const setup = (setupProps = {}) => {
  const store = configureStore()({
    todos: [
      {
        text: 'Leo',
        completed: false,
        id: 0
      },
      {
        text: 'Nhat',
        completed: true,
        id: 1
      }
    ],
    visibilityFilter: 'SHOW_ALL'
  });
  const wrapper = shallow(<VisibleTodoList store={store} />);

  return {
    store,
    wrapper
  };
};

describe('VisibleTodoList', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('shows all todos when SHOW_ALL filter is active', () => {
    const { store, wrapper } = setup();
    const deeperWrapper = wrapper.shallow();
    store.dispatch(setVisibilityFilter('SHOW_ALL'));
    
    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_ALL')]);

  });

  it('shows active todos when SHOW_ACTIVE filter is active', () => {
    const { store, wrapper } = setup();
    const deeperWrapper = wrapper.shallow();    
    store.dispatch(setVisibilityFilter('SHOW_ACTIVE'));
    
    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_ACTIVE')]);
  });

  it('shows completed todos when SHOW_COMPLETED filter is active', () => {
    const { store, wrapper } = setup();
    const deeperWrapper = wrapper.shallow();
    store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_COMPLETED')]);
  });

  it('toggles todos when a todo is clicked', () => {
    const { store, wrapper } = setup();
   
    wrapper.shallow().find('Todo').last().simulate('click');
    expect(store.getActions()).toEqual([toggleTodo(1)]);
  });
});