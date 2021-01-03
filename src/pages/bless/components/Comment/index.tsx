/*
 * @Author: fan.li
 * @Date: 2021-01-03 14:45:55
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 22:43:59
 *
 * 评论
 */

import React from 'react';
import { View } from '@tarojs/components';
import cls from 'classnames';
import styles from './style.module.scss';
import { Avatar } from '../../components';

interface Props {
  className?: string;
  src: string;
}

export default function Comment(props: Props) {
  const { className, src } = props;

  return (
    <View className={cls(styles.container, className)}>
      <Avatar src={src} />
      <View className={styles.right}>
        <View className={styles.right_top}>
          <View className={styles.nickname}>Random</View>
          <View className={styles.time}>2021年01月03日 15点19分</View>
        </View>
        <View className={styles.comment}>
          这是一条来自Random的祝福，有很长很长,有很长很长有很长很长有很长很长有很长很长有很长很长有很长很长有很长很长有很长很长
        </View>
      </View>
    </View>
  );
}
