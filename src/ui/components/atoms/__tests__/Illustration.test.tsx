import React from 'react';
import renderer from 'react-test-renderer';
import Illustration from 'ui/components/atoms/Illustration';
import { decamelize } from 'humps';
import { IllustrationName } from '../Illustration/types';
import * as Illustrations from './../Illustration/illustrations';

describe('Illustration Atom', () => {
  describe('Render Illustrations', () => {
    Object.keys(Illustrations).forEach(name => {
      it(`Render name: ${name}`, () => {
        const component = renderer
          .create(
            <Illustration
              name={decamelize(name, { separator: '-' }) as IllustrationName}
              height={120}
            />
          )
          .toJSON();
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('Render height', () => {
    const heights = [...Array(91).keys()].slice(24);
    heights.forEach(height => {
      it(`Render height: ${height}`, () => {
        const component = renderer
          .create(<Illustration height={height + 200} name={'cloud'} />)
          .toJSON();
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('Render width', () => {
    const widths = [...Array(91).keys()].slice(24, 40);
    widths.forEach(width => {
      it(`Render width: ${width}`, () => {
        const component = renderer
          .create(<Illustration width={width + 200} name={'moon'} />)
          .toJSON();
        expect(component).toMatchSnapshot();
      });
    });
  });
});
