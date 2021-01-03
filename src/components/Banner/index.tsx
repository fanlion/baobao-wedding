/*
 * @Author: fan.li
 * @Date: 2020-12-06 15:17:45
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 00:37:12
 *
 * Banner组件
 */
import React from 'react';
import { View, Swiper, SwiperItem } from '@tarojs/components';
import cls from 'classnames';
import { BannerData } from 'Api/home/requestBannerList';
import './style.scss';
import Image from '../Image';

const prefix = 'BaBanner';

interface Props {
  className?: string;
  list: BannerData[];
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
        {list.map((item: BannerData) => (
          <SwiperItem key={item.id} className={`${prefix}__swiper-item`}>
            <Image src={item.imrUrl} className={`${prefix}__swiper-item-img`} mode='aspectFill' />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
}
