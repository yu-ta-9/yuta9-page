module.exports = {
  configFile: './.svgrrc.js',
  icon: true,
  ignoreExisting: true,
  ref: true,
  typescript: true,
  template: (variables, { tpl }) => {
    const deleteSvgName = variables.componentName.replace('Svg', '');

    return tpl`
    import { forwardRef } from "react";

    import type { Ref, SVGProps } from 'react';

    const ${deleteSvgName} = (${variables.props}) => (
      ${variables.jsx}
    );

    export const ${'Icon' + deleteSvgName} = forwardRef(${deleteSvgName});
  `;
  },
  replaceAttrValues: { '#000': '{props.color}' },
};
