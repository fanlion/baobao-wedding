import React from 'react';
import { View, Image } from '@tarojs/components';
import invIcon from '../../assets/image/inv.png';
import styles from './style.module.scss';
import MockImages from '../../constants/mockPhotos';

export default function Map() {
  return (
    <View className={styles.container}>
      <Image src={invIcon} className={styles.invite} />
      <Image src={MockImages[1]} className={styles.photo} />
      <View className={styles.message}>
        <View className={styles.name}>Mr李&Ms文</View>
        <View className={styles.info}>邀请你的到来</View>
        <View className={styles.info}>农历 2021年1月30日农历腊月十九 举办婚礼</View>
        {/* <View className={styles.info}>地址：湖南省永州市新田县</View> */}
      </View>
    </View>
  );
}
