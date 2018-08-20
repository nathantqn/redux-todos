// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import AddTodo from './AddTodo';

const setup = (setupProps = {}) => {
  const store = configureStore()({ todos: [] });
  const wrapper = shallow(<AddTodo store={store} />);

  return {
    store,
    wrapper
  };
};

describe('AddTodo', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot()
  });

  it('onSubmit calls preventDefault to stop the form from submiting', () => {
    let preventDefault = jest.fn();
    let { wrapper } = setup();
    let form = wrapper.shallow().shallow().find('form');
    form.simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });

  it('onSubmit returns empty array of payloads if input.value is not set', () => {
    let { store, wrapper } = setup();
    const deeperWrapper = wrapper.shallow();
    let preventDefault = jest.fn();
    deeperWrapper.find('form').simulate('submit', { preventDefault });
    expect(store.getActions()).toEqual([]);
  });

  it('onSubmit dispatches action if input.value is set', () => {
    const { store, wrapper } = setup();
    let preventDefault = jest.fn();
    const deeperWrapper = wrapper.shallow();

    deeperWrapper
      .find('input')
      .simulate('change', { currentTarget: { value: 'Codelink' } });

    deeperWrapper.find('form').simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalled();
    expect(store.getActions()).toEqual([
      { id: 0, text: 'Codelink', type: 'ADD_TODO' }
    ]);
  });
});