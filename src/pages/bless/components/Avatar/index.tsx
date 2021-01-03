/*
 * @Author: fan.li
 * @Date: 2021-01-03 14:45:55
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 17:33:04
 *
 * 头像
 */
import React from 'react';
import { View, Image } from '@tarojs/components';
import cls from 'classnames';
import styles from './style.module.scss';

interface Props {
  className?: string;
  src: string;
}

export default function Avatar(props: Props) {
  const { className, src } = props;

  return (
    <View className={cls(styles.container, className)}>
      <Image src={src} className={styles.img} />
    </View>
  );
}
