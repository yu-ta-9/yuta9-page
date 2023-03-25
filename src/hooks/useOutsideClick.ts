import { useCallback, useEffect, useRef } from 'react';

import type { RefObject } from 'react';

type UseOutsideClickArgs = {
  onOutSideClick: () => void;
};

type UseOutsideClickReturns<T> = {
  ref: RefObject<T>;
};

export const useOutsideClick = <T extends Node>({ onOutSideClick }: UseOutsideClickArgs): UseOutsideClickReturns<T> => {
  const ref = useRef<T>(null);

  const outSideClick = useCallback(
    (e: MouseEvent): void => {
      if (ref.current === null) {
        return;
      }

      const isInnerClicked = ref.current.contains(e.target as Node);

      if (isInnerClicked) {
        return;
      }

      onOutSideClick();
    },
    [onOutSideClick],
  );

  useEffect(() => {
    document.addEventListener('click', outSideClick, { passive: true });

    return () => {
      document.removeEventListener('click', outSideClick);
    };
  }, [outSideClick]);

  return { ref };
};
