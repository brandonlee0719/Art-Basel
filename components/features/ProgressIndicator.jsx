import { useRef, useEffect, useCallback } from 'react';

const ProgressIndicator = () => {
    const progress = useRef(null);

    // const handleScroll = useCallback(() => {
      
    //   }, [])

    // useEffect(() => {
    //     document.querySelector("__next")?.addEventListener("scroll", handleScroll)
    // }, [handleScroll]);

    return (
        <div className="progress w-full fixed top-0 z-50">
            <div ref={progress} className="progress-bar bg-white w-full"></div>
        </div>
    )
}

export default ProgressIndicator;