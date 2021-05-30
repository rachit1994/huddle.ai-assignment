import { FC, useState, useEffect } from 'react';
import Loading from '../Loading/Loading.component';
import rest from '../../utils/fetch';

interface ContainerInterface {
    url: string;
    method: string;
    params?: Record<string, any>;
    children: (data: any) => any;
}

const Container: FC<ContainerInterface> = ({ url, method, params, children }) => {
    const [data, changeData] = useState({
        loading: true,
        data: [],
        error: null
    });
    useEffect(() => {
        rest[method](url, params).then((result: any) => {
            changeData({
                loading: false,
                data: result,
                error: null
            })
        }).catch((e: any) => {
            changeData({
                loading: false,
                data: [],
                error: e
            })
        })
    }, []);
    if (data?.loading) {
        return <Loading />
    } else if (data?.error) {
        return (
            <div> Error occurred {String(data.error)}</div>
        )
    }
    return (
        <>
            {children(data?.data)}
        </>
    );
}

export default Container;
