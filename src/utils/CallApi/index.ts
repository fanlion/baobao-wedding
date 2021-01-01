/*
 * @Author: fan.li
 * @Date: 2021-01-01 17:03:18
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-01 17:55:12
 *
 * 网络请求工具
 */
import Taro from '@tarojs/taro';

interface Response {
  code: number;
  desc: string;
  data: any;
}

const interceptor: Taro.interceptor = (chain: Taro.Chain) => {
  const { requestParams } = chain;

  return chain
    .proceed(requestParams)
    .then((res: Response) => {
      const { code, data } = res;

      if (code === 0) {
        return data;
      } else if (code === 10001) {
        return Promise.reject(res);
      } else {
        return Promise.reject(res);
      }
    })
    .catch((e) => {
      throw new Error(e);
    });
};

const interceptors = [interceptor];
interceptors.forEach((i) => Taro.addInterceptor(i));

export default function callApi<T = any, U = any>(params: Taro.request.Option<U>) {
  const url = HOST_URL + '/api' + params.url;
  const options: Taro.request.Option<U> = { ...params, url };

  return Taro.request<T, U>(options);
}
