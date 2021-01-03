/*
 * @Author: fan.li
 * @Date: 2021-01-01 17:03:18
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 00:34:09
 *
 * 网络请求工具
 */
import Taro from '@tarojs/taro';

export interface Response {
  code: number;
  desc: string;
  data: any;
}

const interceptor: Taro.interceptor = (chain: Taro.Chain) => {
  const { requestParams } = chain;

  return chain
    .proceed(requestParams)
    .then((res: { data: Response }) => {
      const { code } = res.data;

      if (code === 0) {
        return res.data;
      } else if (code === 10001) {
        Taro.showToast({ title: '登录失效' });
        Taro.removeStorageSync('token');
        Taro.navigateTo({ url: '/pages/splash/index' });
        return Promise.reject(res.data);
      } else {
        return Promise.reject(res.data);
      }
    })
    .catch((e) => {
      throw new Error(e);
    });
};

const interceptors = [interceptor];
interceptors.forEach((i) => Taro.addInterceptor(i));

export default function callApi<T = any, U = any>(params: Taro.request.Option<U>): Promise<T> {
  const token = Taro.getStorageSync('token');
  const url = HOST_URL + params.url;
  const options: Taro.request.Option<U> = { ...params, url, header: { token: token } };

  return Taro.request<T, U>(options).then((res) => {
    const { data } = res;
    return data;
  });
}
