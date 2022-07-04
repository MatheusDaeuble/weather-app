const template = ({ template }, _, { componentName, jsx }) => {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });

  const attributes = jsx.openingElement.attributes;
  const viewBox = attributes.find(a => a.name && a.name.name === 'viewBox')
    .value.value;
  const [, , width, height] = viewBox.split(' ');
  const aspectRatio = Number(width) / Number(height);

  return typeScriptTpl.ast`

import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import ResizeHOC from '../hoc/ResizeHOC';

const ${componentName} = (props: SvgProps) => {
  return (
    ${jsx}
  );
};

export default ResizeHOC(${componentName}, ${String(aspectRatio)});

`;
};

module.exports = template;
