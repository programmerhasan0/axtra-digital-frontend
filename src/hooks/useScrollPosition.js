import { useEffect, useState } from "react";

// Custom Hook For getting scroll position

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", updatePosition);

        updatePosition();

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
};

export default useScrollPosition;
