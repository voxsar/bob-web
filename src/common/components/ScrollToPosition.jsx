import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToPosition = ({ position }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: position, behavior: 'smooth' });
    }, [pathname, position]);

    return null;
};

export default ScrollToPosition;