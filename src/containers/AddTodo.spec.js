// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import AddTodo from './AddTodo';

const setup = () => {
  const store = configureStore()({ todos: [] });
  const wrapper = shallow(<AddTodo store={store} />);

  return {
    store,
    wrapper
  };
};

describe('<AddTodo/>', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot()
  });

  describe('handleChange', () => {
    const { wrapper } = setup();
    let preventDefault = jest.fn();
    const deeperWrapper = wrapper.shallow();

    expect(deeperWrapper.state().value).toBe('')
    deeperWrapper
      .find('input')
      .simulate('change', { currentTarget: { value: 'Codelink' } });

    test('should update value in state correctly', () => {
        expect(deeperWrapper.state().value).toBe('Codelink')
    });
  });

  describe('handleSubmit', () => {  
   test('should calls preventDefault to stop the form from submiting', () => {
      let preventDefault = jest.fn();
      let { wrapper } = setup();
      let form = wrapper.shallow().shallow().find('form');
      form.simulate('submit', { preventDefault });
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    describe('when value is empty', () => {
      test('should not do anything', () => {
        let { store, wrapper } = setup();
        const deeperWrapper = wrapper.shallow();
        let preventDefault = jest.fn();
        deeperWrapper.find('form').simulate('submit', { preventDefault });
        expect(store.getActions()).toEqual([]);
      });
    });

    describe('when value is present', () => {
      test('should dispatch addTodo action with correct value and reset value in state', () => {
          const { store, wrapper } = setup();
          let preventDefault = jest.fn();
          const deeperWrapper = wrapper.shallow();

          deeperWrapper
            .find('input')
            .simulate('change', { currentTarget: { value: 'Codelink' } });
          deeperWrapper.find('form').simulate('submit', { preventDefault });

          expect(preventDefault).toHaveBeenCalledTimes(1);
          expect(store.getActions()).toEqual([
            { id: 0, text: 'Codelink', type: 'ADD_TODO' }
          ]);
          expect(deeperWrapper.state().value).toEqual('')
      });
    });
  })
});