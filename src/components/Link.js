// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

type LinkProps = {
  active: boolean,
  children: React.Node,
  onClick: () => void,
};

const Link = ({ active, children, onClick }: LinkProps) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
