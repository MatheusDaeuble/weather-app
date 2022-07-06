import React from 'react';
import renderer from 'react-test-renderer';
import LoadingTemplate from '../LoadingTemplate';

describe('LoadingTemplate', () => {
  it('Default', () => {
    const component = renderer.create(<LoadingTemplate />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
