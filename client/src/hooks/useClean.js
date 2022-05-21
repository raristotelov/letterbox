import { useEffect } from 'react';

const useClean = (cb) => {
    useEffect(() => {
        return cb;
    }, [cb]);
}

export default useClean;