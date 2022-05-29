import { useState, useEffect } from 'react';

const useFetch = (url, requestInfo) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url, requestInfo)
            .then((result) => result.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return data;
}

export default useFetch;