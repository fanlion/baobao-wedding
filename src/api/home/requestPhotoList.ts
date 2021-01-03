/*
 * @Author: fan.li
 * @Date: 2021-01-03 14:07:22
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 14:23:36
 *
 * 获取图片列表
 */

import CallApi from 'Utils/CallApi/index';

export interface PhotoData {
  id: number;
  imgUrl: string;
  desc: string;
  galleryId: number;
  createTime: string;
  updateTime: string;
}

export default function requestPhotoList(id: number) {
  return CallApi<PhotoData[]>({ url: '/photo/item', method: 'POST', data: { id } });
}
