/*
 * @Author: fan.li
 * @Date: 2020-12-06 17:46:02
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-06 19:13:42
 *
 * 首页的照片卡片
 */
import React from 'react';
import cls from 'classnames';
import { View } from '@tarojs/components';
import noop from 'lodash/noop';
import Image from '../Image';
import './style.scss';

const prefix = 'BaPhotoCard';

interface Props {
  className?: string;
  src: string;
  title: string;
  onClick?: () => void;
}

export default function PhotoCard(props: Props) {
  const { className, src, title, onClick = noop } = props;

  return (
    <View className={cls(`${prefix}`, className)}>
      <View className={`${prefix}_header`}>{title}</View>
      <Image src={src} className={`${prefix}_img`} />
      <View className={`${prefix}_detail`} onClick={onClick}>
        查看详情
      </View>
    </View>
  );
}
