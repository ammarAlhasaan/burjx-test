import axios, {AxiosError, type AxiosResponse} from 'axios';

axios.defaults.baseURL = 'https://coingeko.burjx.com';


axios.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => {
    const {data, status} = error.response!;
    switch (status) {
      case 400:
        console.error(data);
        break;
      case 401:
        console.error('unauthorised');
        break;
      case 404:
        console.error('/not-found');
        break;

      case 500:
        console.error('/server-error');
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody),
};
