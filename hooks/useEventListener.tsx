import { useEffect, useRef } from 'react';

const useEventListener = (
  event: string,
  callback: (event: Event) => void,
  element: EventTarget | null = window
) => {
  const listenerRef = useRef(callback);

  useEffect(() => {
    listenerRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!element) return;

    const eventListener = (event: Event) => {
      listenerRef.current(event);
    };

    (element as EventTarget).addEventListener(event, eventListener);

    return () => {
      (element as EventTarget).removeEventListener(event, eventListener);
    };
  }, [element, event]);
};

export default useEventListener;
