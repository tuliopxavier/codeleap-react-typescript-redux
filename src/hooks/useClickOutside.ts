import { RefObject, useEffect } from 'react';

const useClickOutside = (ref: RefObject<any>, handler: any) => {

  useEffect(() => {
    const listener = (e: Event) => {
      const item = ref?.current;
      if (!item || item.contains(e.target)) return;
      handler(e);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  },[ref, handler]);

};

export default useClickOutside;
