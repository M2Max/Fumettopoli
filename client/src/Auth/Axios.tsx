import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/api';

type Methods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";

const Axios = ({ url, method, body = null, headers = null }: {url: string, method: Methods, body: any, headers: any}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = (method: Methods, url: string, headers: any, body: any) => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res: any) => {
                setResponse(res.data);
            })
            .catch((err: any) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData(method, url, body, headers);
    }, [method, url, body, headers, fetchData]);

    return { response, error, loading };
};

export default Axios;