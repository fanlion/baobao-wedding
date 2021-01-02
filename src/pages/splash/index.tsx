import React from 'react';
import { View, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { CallApi } from 'Utils/index';
import styles from './index.module.scss';

export default function Splash() {
  const handleAccept = async (res) => {
    try {
      if (!res.detail.userInfo) {
        Taro.showToast({
          title: '获取授权失败,请点击允许获取用户权限',
          icon: 'none',
          duration: 2000
        });
        return;
      }

      const { code } = await Taro.login();
      const { userInfo, encryptedData, iv } = await Taro.getUserInfo({ withCredentials: true });
      const token = await CallApi<string>({
        url: '/wxlogin',
        method: 'POST',
        data: { code, encryptedData, iv, userInfo }
      });
      Taro.setStorageSync('token', token);
      Taro.switchTab({ url: '/pages/home/index' });
    } catch (e) {
      Taro.showToast({ title: '出了点问题，新郎正在努力修复', icon: 'none', duration: 3000 });
    }
  };

  return (
    <View className={styles.container}>
      <Button openType='getUserInfo' onGetUserInfo={handleAccept}>
        接受
      </Button>
    </View>
  );
}
