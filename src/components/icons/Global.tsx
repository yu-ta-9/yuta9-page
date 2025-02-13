import { forwardRef, type JSX } from 'react';

import type { Ref, SVGProps } from 'react';

const Global = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    style={{
      opacity: 1,
    }}
    viewBox='0 0 512 512'
    width='1em'
    height='1em'
    ref={ref}
    {...props}
  >
    <path
      d='M255.994.006C114.607.013.012 114.612 0 256c.012 141.387 114.607 255.986 255.994 255.994C397.393 511.986 511.992 397.387 512 256 511.992 114.612 397.393.013 255.994.006zM97.607 97.612c23.34-23.328 51.761-41.475 83.455-52.725-15.183 18.375-27.84 41.906-37.757 69.116H82.772a227.095 227.095 0 0 1 14.835-16.391zm-31.995 40.391h69.986c-9.008 31.929-14.41 67.834-15.363 105.997H32.327c2.047-38.804 13.973-74.912 33.285-105.997zm0 235.994C46.3 342.912 34.374 306.804 32.327 268h87.991c.961 38.124 6.21 74.092 15.206 105.998H65.612zm31.995 40.389a226.882 226.882 0 0 1-14.836-16.39h60.573c4.28 11.774 9.019 22.944 14.312 33.21 6.954 13.438 14.758 25.468 23.348 35.89-31.672-11.25-60.073-29.397-83.397-52.71zm146.391 65.281a219.568 219.568 0 0 1-11.164-.86c-5.89-2.64-11.722-6.25-17.5-10.961-17.632-14.359-33.976-38.671-46.398-69.85h75.061v81.671zm0-105.67h-83.436c-9.477-31.171-15.316-67.311-16.328-105.998h99.763v105.998zm0-129.997H144.31c1.008-38.71 6.875-74.819 16.359-105.997h83.33V244zm0-129.997h-74.951c3.109-7.79 6.367-15.312 9.934-22.195 10.64-20.625 23.17-36.89 36.354-47.656 5.777-4.71 11.609-8.32 17.5-10.96a219.48 219.48 0 0 1 11.164-.859v81.67zm202.394 24c19.312 31.085 31.234 67.194 33.281 105.997h-87.991c-.961-38.124-6.21-74.092-15.21-105.997h69.92zm-31.999-40.391a226.897 226.897 0 0 1 14.836 16.391h-60.577c-4.281-11.773-9.023-22.945-14.312-33.21-6.953-13.437-14.758-25.468-23.347-35.89 31.675 11.257 60.072 29.398 83.4 52.709zM267.998 32.333c3.746.195 7.469.484 11.16.859 5.89 2.649 11.723 6.25 17.504 10.96 17.636 14.359 33.976 38.671 46.397 69.85h-75.061V32.333zm0 105.67h83.436c9.476 31.171 15.32 67.31 16.328 105.997h-99.764V138.003zm0 129.997h99.685c-1.007 38.71-6.874 74.818-16.359 105.998h-83.326V268zm28.663 199.846c-5.781 4.711-11.614 8.313-17.504 10.961-3.691.375-7.414.664-11.16.86v-81.67h74.951c-3.109 7.789-6.367 15.312-9.933 22.195-10.639 20.624-23.17 36.889-36.354 47.654zm117.732-53.46c-23.336 23.328-51.764 41.476-83.459 52.725 15.187-18.375 27.835-41.905 37.757-69.115h60.538a226.693 226.693 0 0 1-14.836 16.39zm31.999-40.389h-69.998c9.008-31.929 14.414-67.842 15.367-105.998h87.912c-2.047 38.805-13.969 74.913-33.281 105.998z'
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);

export const IconGlobal = forwardRef(Global);
