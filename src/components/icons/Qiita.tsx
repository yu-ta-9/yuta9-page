import { forwardRef, type JSX } from 'react';

import type { Ref, SVGProps } from 'react';

const Qiita = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 25 25'
    ref={ref}
    {...props}
  >
    <path fill='url(#qiita_svg__a)' d='M0 0h25v25H0z' />
    <defs>
      <pattern id='qiita_svg__a' width={1} height={1} patternContentUnits='objectBoundingBox'>
        <use xlinkHref='#qiita_svg__b' transform='scale(.00333)' />
      </pattern>
      <image
        xlinkHref='data:image/png;base64,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'
        id='qiita_svg__b'
        width={300}
        height={300}
      />
    </defs>
  </svg>
);

export const IconQiita = forwardRef(Qiita);
