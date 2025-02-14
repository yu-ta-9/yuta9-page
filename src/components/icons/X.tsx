import { forwardRef, type JSX } from 'react';

import type { Ref, SVGProps } from 'react';
const X = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 30 30' ref={ref} {...props}>
    <path
      fill='#fff'
      d='m26.37 26-8.795-12.822.015.012L25.52 4h-2.65l-6.46 7.48L11.28 4H4.33l8.211 11.971-.001-.001L3.88 26h2.65l7.182-8.322L19.42 26h6.95zM10.23 6l12.34 18h-2.1L8.12 6h2.11z'
    />
  </svg>
);
export const IconX = forwardRef(X);
