import React from 'react';

import renderer from 'react-test-renderer';
import { Color, colors } from 'ui/theme/colors';
import { TextStyle } from 'react-native';
import { TypographyVariant } from '../Typography/types';
import Typography from '../Typography';

const variants: Array<TypographyVariant> = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'body1',
  'body2',
];

const aligns: Array<TextStyle['textAlign']> = [
  'auto',
  'center',
  'justify',
  'left',
  'right',
];

describe('Typography Atom', () => {
  describe('Render variant', () => {
    variants.forEach(variant => {
      it(`Render variant: ${variant}`, () => {
        const component = renderer
          .create(<Typography variant={variant}>{variant}</Typography>)
          .toJSON();
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('Render color', () => {
    Object.keys(colors).forEach((color: Color) => {
      it(`Render color: ${color}`, () => {
        const component = renderer
          .create(<Typography color={color}>{color}</Typography>)
          .toJSON();
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('Render align', () => {
    aligns.forEach(align => {
      it(`Render align: ${align}`, () => {
        const component = renderer
          .create(<Typography align={align}>{align}</Typography>)
          .toJSON();
        expect(component).toMatchSnapshot();
      });
    });
  });

  it('Render empty', () => {
    const component = renderer.create(<Typography>{''}</Typography>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
