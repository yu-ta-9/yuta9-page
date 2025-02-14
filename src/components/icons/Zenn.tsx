import { forwardRef, type JSX } from 'react';

import type { Ref, SVGProps } from 'react';

const Zenn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 25 24'
    ref={ref}
    {...props}
  >
    <path fill='url(#zenn_svg__a)' d='M0 0h25v24H0z' />
    <defs>
      <pattern id='zenn_svg__a' width={1} height={1} patternContentUnits='objectBoundingBox'>
        <use xlinkHref='#zenn_svg__b' transform='matrix(.00787 0 0 .0082 0 -.013)' />
      </pattern>
      <image
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB9CAYAAACLdbwYAAAACXBIWXMAAAsSAAALEgHS3X78AAAGTUlEQVR4nO2d7XkjNRSF383Df9wBogJCBQwVYCrAWwHuAKUCQgVoK2CpAKcCshWw6SCuIPwYO8+sI8djxdLR11uAb5zrc+de6Ujz7unpic4sroFb4IdE8bbAGnCxArzryZ+FAe6BrxPH3e5iP8b48KsYH1ohjvSJZxfTxPrwnvzTLElX6g95YKw4UejJf50F43NexSrmh/fkv84a+EYU+29gEzNAb/iOcw38K4q93cX/HDNIV/5xlOX+lsiJh678Y6yAP0WxH4jY4U/pyX/JglF1itEO4EciP+v39LL/Eosu8R9IlHjoyj9kAP4RxY66muejK/9LlE2eJWHioSd/yhr4ThT7E4IfXi/7I800eVO68kccusT/gSDx0JUPjTV5U7ryI5olZrBGlHjoybfoNm7u0P7wmi77Bo07Z8/3RNyrn0PLyndomzxp4qFd5S+Bv0SxHxi3a2XP+j0tKl/tzpE2eVNaTL7SnXMHfBTFfkFrZd8A/wnjf0sCk8ZcWlO+E8a+IaPEQ1vKX6F152TR5E1pJflNbtycopWyb9ElProFO5QWlF+9BTuUFpTvhLGTWLBDqV35a+B3UexkFuxQak5+b/JOUHPZv6URC3YotSp/oFF3zjnUqnwnjG0pIPFQZ/Ituo0biQU7lNrKvkHrzsm+yZtSm/KVTZ7Mgh1KTcpXunOKafKm1KL87s4JoJbkq905ThT7TdRQ9g1ad47cgh1KDcp3wthZWLBDKV35K7o7J5iSk6/euPmZjJy4IZRc9i26xGdlwQ6lVOUr3TmQmQU7lFKVr5zps7Ngh1Ji8tdob8EuZuPmFKWVfXWTV9TGzSlKU75y4yZbC3YoJSl/QOvOydaCHUpJyq/+FuzUlKJ8C/wmip29BTuUEpJv6O6cKJRQ9rsFOxK5K3+gW7CjkbPyF3QLdlRyTr7SnVOUBTuUXMu+QevOqbbJm5Kr8p0wdnEW7FByVH63YCfiK/UfcIC6yVNasA2RX586YQNsclP+LfCrKPYd42ipQPG93+eUfLU7R2XBVt0e8pBTw6ccrVQWbMO4niAhl+Sr3TlWFFu5dO1yKPtqd47Kgi2/9j0H5St//SoLtvpg6Qp4VCd/AH4Rxl+J4lp0S9fPdjR12b9H9xbLGzTPevWNoIbdWoZS+crXlyot2E4UFw52KlXKN7TpzlHeCPpiEUuV/I/AT4rAjM+8pSCuIbNXuSnK/oAu8VtG9SlQTjU3eBaxFMl3gph7VBbsJbof/NH+JnXZt7RnwV4wqk412h3tb1Iq36BLPDQ+0/tIqfwNuvX7D2iSn81M7yOV8pfoEq9s8pwoLsxwH6dIvnod26Jx5ygXsWa5j1OUfaU75xNj6U2NIbOZ3kds5V+jSzy0OdPPNqbEVv6G9po8+T49Mx9zMZO/QndBosqCrZ7pzzKmxCr76iZPZcG2aGf6s4wpsZTv0Jk0VBbsgcKujYmh/AGtO0fZ5KmwBOxZxEh+ixZsS+YzvY9Ll32lWUHV5BkKmOl9XFL5BuEBBHaOVEFcRwEzvY9LKl/pzlE1eUWfKL5U8gd0nS5obsEu/rDJpcq+u9DnhKC6BdtS+GGTSyjfonXnKF51MlDYTO/jrco36OZq0K3kVXEV7FuT79Degq04Z2fRzvT2Uh/2lrKv7nQVt2AbKjpsEqp89caNyoLtqOhFzaHKt7RnwVZXOsOF+5uQ5KvvzlGcsyt+pvcRUvaV5V71qhNL4TO9j3OVv6I9d85ABTO9j3OUr27yLH2mvyjnJN+iK32qW7At2gskbMwAc8v+gHbjRtHkGSqa6X3MVb6y9KledeKo/PUuc5TfojunupnexynlL9C6cxQbN83c/H0q+Q7tfOsEcS2NfOfXyv6AtslT3II90JAj6TXlu1R/hAeVBVvZ2CZ3JB1LvkV37GiLps+wVDzT+/CVfYN2vlXcgm2ofKb34VO+o8JNjBM4Kp/pfRwqXznfgsaC3cRM72OqfPXGjcKC3cxM72Oa/DW6Jk91C7alkZnex77sG7SvL1U0eQPtrWN8wV75Tvg3qCzY6kecNPEwKn+F1p2jsGAP6FSvOmX0git0d9LC2Gd8FsRV/uNX4vjPXKEpf1vgPbrHzT3jfJ2S/XfeJI57lH3Dd8049qTgkQyedzsMac4A5PSdn/kfaGI+T9XdQtMAAAAASUVORK5CYII='
        id='zenn_svg__b'
        width={127}
        height={125}
      />
    </defs>
  </svg>
);

export const IconZenn = forwardRef(Zenn);
