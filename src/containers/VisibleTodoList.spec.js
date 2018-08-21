// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import VisibleTodoList from './VisibleTodoList';
import { toggleTodo, setVisibilityFilter } from '../actions';

const setup = () => {
  const store = configureStore()({
    todos: [
      {
        text: 'Leo',
        completed: false,
        id: 0,
      },
      {
        text: 'Nhat',
        completed: true,
        id: 1,
      },
    ],
    visibilityFilter: 'SHOW_ALL',
  });
  const wrapper = shallow(<VisibleTodoList store={store} />);

  return {
    store,
    wrapper,
  };
};

describe('VisibleTodoList', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('shows all todos when SHOW_ALL filter is active', () => {
    const { store } = setup();
    store.dispatch(setVisibilityFilter('SHOW_ALL'));

    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_ALL')]);
  });

  test('shows active todos when SHOW_ACTIVE filter is active', () => {
    const { store } = setup();
    store.dispatch(setVisibilityFilter('SHOW_ACTIVE'));

    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_ACTIVE')]);
  });

  test('shows completed todos when SHOW_COMPLETED filter is active', () => {
    const { store } = setup();
    store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_COMPLETED')]);
  });

  test('toggles todos when a todo is clicked', () => {
    const { store, wrapper } = setup();

    wrapper
      .shallow()
      .find('Todo')
      .last()
      .simulate('click');
    expect(store.getActions()).toEqual([toggleTodo(1)]);
  });
});
