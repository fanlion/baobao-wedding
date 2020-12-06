import React from 'react'
import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro';
import styles from './index.module.scss';


export default function Splash() {
  const handleAccept = () => {
    Taro.switchTab({ url: '/pages/home/index'})
  };

  return <View className={styles.container}>
    <Button onClick={handleAccept}>接受</Button>
  </View>
}
