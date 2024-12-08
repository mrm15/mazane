import { useState, useEffect } from 'react';

interface WindowSize {
    widthWindowSize: number;
    heightWindowSize: number;
}

function useWindowSize(): WindowSize {
    // Initialize state with undefined width and height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<WindowSize>({
        widthWindowSize: typeof window !== 'undefined' ? window.innerWidth : 0,
        heightWindowSize: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                widthWindowSize: window.innerWidth,
                heightWindowSize: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

export default useWindowSize;
