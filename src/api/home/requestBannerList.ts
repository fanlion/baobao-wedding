/*
 * @Author: fan.li
 * @Date: 2021-01-02 22:20:03
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-02 23:30:49
 *
 * 获取首页需要的数据
 */
import CallApi from 'Utils/CallApi/index';

export interface BannerData {
  id: number;
  imrUrl: string;
  createTime: number;
  updateTime: number;
  redirectUrl?: string;
}

export default function requestBannerList() {
  return CallApi<BannerData[]>({ url: '/photo/banner', method: 'POST' });
}
