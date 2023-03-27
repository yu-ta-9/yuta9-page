import { forwardRef } from 'react';

import type { Ref, SVGProps } from 'react';

const Toeic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 192.756 192.756' ref={ref} {...props}>
    <g fillRule='evenodd' clipRule='evenodd'>
      <path fill='#fff' d='M0 0h192.756v192.756H0V0z' />
      <path d='M13.057 89.05h34.361V78.619H13.057V89.05zm10.022 24.749h14.113v-22.09H23.079v22.09zm97.359 0h14.318v-35.18h-14.318v35.18z' />
      <path
        fill='#929496'
        d='M48.85 91.709c-.409 1.227-.409 2.659-.409 4.091 0 10.022 7.977 17.999 17.795 17.999 10.022 0 17.999-7.977 17.999-17.999 0-1.432-.205-2.864-.614-4.295l-34.771.204zm33.953-2.659c-2.659-6.545-9-11.045-16.567-11.045-7.363 0-13.704 4.5-16.567 10.84l33.134.205z'
      />
      <path d='M151.117 91.709h-13.908c-.205 1.227-.408 2.659-.408 4.091 0 10.022 7.977 17.999 17.998 17.999 8.387 0 15.545-5.932 17.385-13.908h-21.271l.204-8.182zm20.25-2.659c-2.863-6.545-9.205-11.045-16.568-11.045-7.568 0-13.908 4.5-16.566 10.84l33.134.205zm11.453-8.59c.613.613.818 1.227.818 2.045 0 .818-.205 1.636-.818 2.25-.613.613-1.432.817-2.25.817s-1.432-.204-2.045-.817c-.613-.614-.818-1.432-.818-2.25 0-.818.205-1.432.818-2.045.613-.614 1.227-1.023 2.045-1.023s1.637.409 2.25 1.023zm.409-.41c-.816-.613-1.637-1.022-2.658-1.022-.818 0-1.637.409-2.453 1.022a3.383 3.383 0 0 0-1.023 2.455c0 1.023.408 1.841 1.023 2.455.816.818 1.635 1.023 2.453 1.023 1.021 0 1.842-.205 2.658-1.023a3.383 3.383 0 0 0 1.023-2.455c0-1.023-.408-1.84-1.023-2.455zm-2.045 2.251c-.205.204-.408.204-.613.204h-.613v-1.432h.613c.205 0 .613 0 .818.205 0 0 .203.205.203.409 0 .409-.203.614-.408.614zm-2.045 2.045h.818v-1.432h.408c.41 0 .613 0 .818.205.205 0 .408.409.408.818v.409h.615v-.614c0-.205-.205-.409-.205-.614-.205-.205-.41-.409-.613-.409.203 0 .408-.205.408-.205.41-.204.41-.409.41-.818s-.205-.818-.615-1.022h-2.453v3.682h.001zM86.076 89.05h31.088V78.619H86.076V89.05zm0 24.749h31.088v-10.432h-16.771v-2.453h16.771v-9.409H86.076v22.294z' />
    </g>
  </svg>
);

export const IconToeic = forwardRef(Toeic);