/*
 * @Author: fan.li
 * @Date: 2020-12-06 15:17:45
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-06 17:11:38
 *
 * Banner组件
 */
import React from 'react';
import { View, Swiper, SwiperItem } from '@tarojs/components';
import cls from 'classnames';
import './style.scss';
import BaImage from '../BaImage';

const prefix = 'BaBanner';

interface Item {
  id: string;
  src: string;
}

interface Props {
  className?: string;
  list: Item[];
}

export default function BaBanner(props: Props) {
  const { className, list } = props;

  return (
  <View className={prefix}>
      <Swiper
        className={cls(`${prefix}__swiper`, className)}
        circular
        autoplay
        indicatorDots
        indicatorActiveColor='rgb(178, 42, 49'
      >
      {list.map((item: Item) => (
        <SwiperItem key={item.id} className={`${prefix}__swiper-item`}>
          <BaImage src={item.src} className={`${prefix}__swiper-item-img`} />
        </SwiperItem>
      ))}
    </Swiper>
  </View>
)
}
