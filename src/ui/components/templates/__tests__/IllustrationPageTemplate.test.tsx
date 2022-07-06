import React from 'react';
import renderer from 'react-test-renderer';
import IllustrationPageTemplate from '../IllustrationPageTemplate';

describe('IllustrationPageTemplate', () => {
  it('Default', () => {
    const component = renderer
      .create(
        <IllustrationPageTemplate
          title='Test'
          description='testing'
          illustration='location'
          button={{ label: 'Test' }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Without title', () => {
    const component = renderer
      .create(
        <IllustrationPageTemplate
          description='testing'
          illustration='location'
          button={{ label: 'Test' }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Without description', () => {
    const component = renderer
      .create(
        <IllustrationPageTemplate
          title='Test'
          illustration='location'
          button={{ label: 'Test' }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Without illustration', () => {
    const component = renderer
      .create(
        <IllustrationPageTemplate
          title='Test'
          description='testing'
          button={{ label: 'Test' }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Without button', () => {
    const component = renderer
      .create(
        <IllustrationPageTemplate
          title='Test'
          description='testing'
          illustration='location'
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
