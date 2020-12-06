/*
 * @Author: fan.li
 * @Date: 2020-12-06 15:17:45
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-06 23:23:18
 *
 * Banner组件
 */
import React from 'react';
import { View, Swiper, SwiperItem } from '@tarojs/components';
import cls from 'classnames';
import './style.scss';
import Image from '../Image';

const prefix = 'BaBanner';

interface Item {
  id: string;
  src: string;
}

interface Props {
  className?: string;
  list: Item[];
}

export default function Banner(props: Props) {
  const { className, list } = props;

  return (
    <View className={cls(prefix, className)}>
      <Swiper
        className={cls(`${prefix}__swiper`, className)}
        circular
        autoplay
        indicatorDots
        indicatorActiveColor='rgb(178, 42, 49'
      >
        {list.map((item: Item) => (
          <SwiperItem key={item.id} className={`${prefix}__swiper-item`}>
            <Image src={item.src} className={`${prefix}__swiper-item-img`} mode='aspectFill' />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
}
