import { useEffect, useRef, useState } from "react";



export const useNearScreen = ({ distance = '100px', externalRef, once = true }) => {
    const [showNearScreen, setShowNearScreen] = useState(false);
    const fromRef = useRef();

    useEffect(() => {
        const element = externalRef ? externalRef.current : fromRef.current;

        const onChange = (entries) => {
            const el = entries[0];
            if (el.isIntersecting) {
                setShowNearScreen(true);
                if (once) {
                    observer.disconnect();
                }
            } else {
                if (!once) {
                    setShowNearScreen(false);
                }
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance,
        });

        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    });
    return { showNearScreen, fromRef };
}
