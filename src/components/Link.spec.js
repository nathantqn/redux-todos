// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

const setup = (setupProps = {}) => {
  const defaultProps = {
    active: false,
    onClick: jest.fn(),
    children: 'Test link'
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <Link active={props.active} onClick={props.onClick}>
      {props.children}
    </Link>
  );

  return {
    props,
    wrapper
  };
};

describe('Link', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a disabled button when active is true', () => {
    const { wrapper } = setup({ active: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onClick() on click', () => {
    const preventDefault = jest.fn();
    const { props, wrapper } = setup();
    expect(wrapper).toMatchSnapshot();

    const link = wrapper.find('button');
    link.simulate('click');

    expect(props.onClick).toBeCalled();
  });
});