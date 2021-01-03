/*
 * @Author: fan.li
 * @Date: 2021-01-03 19:53:59
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 19:59:27
 *
 * 点赞
 */
import CallApi from 'Utils/CallApi/index';

export default function requestLike() {
  return CallApi<boolean>({ url: '/comment/like', method: 'POST' });
}
