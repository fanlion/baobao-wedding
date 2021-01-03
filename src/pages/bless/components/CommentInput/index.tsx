/*
 * @Author: fan.li
 * @Date: 2021-01-03 14:45:55
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 22:56:01
 *
 * 评论输入组件
 */

import React from 'react';
import { View, Input, Button } from '@tarojs/components';
import cls from 'classnames';
import styles from './style.module.scss';

interface Props {
  className?: string;
}

export default function CommentInput(props: Props) {
  const { className } = props;

  return (
    <View className={cls(styles.container, className)}>
      <Input placeholder='在这里输入想说的话' />
      <View className={styles.btn}>留言</View>
    </View>
  );
}
