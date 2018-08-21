// @flow

import reducer from './index';

describe('root reducer', () => {
  test('should combine all reducers', () => {
    expect(reducer({}, { type: '@@INIT' })).toEqual({
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    });
  });
});