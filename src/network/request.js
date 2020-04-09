import axios from 'axios'
export function request(config) {
     const instance = axios.create({
        baseURL: 'http://106.54.54.237:8000/xxt/ah8',
        timeout: 8000
    })
    instance.interceptors.request.use(config => {
        return config;
    }, err => {

    })
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);

    })
    return instance(config);
}