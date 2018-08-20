// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Todo from './Todo';

const setup = (setupProps = {}) => {
  const defaultProps = {
    text: 'Codelink',
    completed: false,
    onClick: jest.fn()
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <Todo
      text={props.text}
      completed={props.completed}
      onClick={props.onClick}
    />
  );

  return {
    props,
    wrapper
  };
};

describe('Todo', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('puts a line through text when completed', () => {
    const { wrapper } = setup({ completed: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('calls onClick when clicked', () => {
    const { props, wrapper } = setup();
    wrapper.find('li').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});