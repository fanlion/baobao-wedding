import React from 'react';
import { View, ScrollView, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import requestLike from 'Api/bless/requestLike';
import styles from './style.module.scss';
import { Avatar, Comment, CommentInput } from './components';

const mockAvatarUrl =
  'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLT97V610J4bQs6sz1nY88u7Osxwvs3zUnPeo5A2ibArP1SCVOt4Y4PK9viaIwnQOzXY8dNybLR1otw/132';

export default function Bless() {
  const handleLike = async () => {
    try {
      const created = await requestLike();
      if (created) {
        Taro.showToast({ title: '收到了你点祝福，谢谢' });
      } else {
        Taro.showToast({ title: '你之前已祝福过了' });
      }
    } catch (error) {
      Taro.showToast({ title: '祝福没有被收到' });
    }
  };

  return (
    <View className={styles.container}>
      <View className={styles.content}>
        <View className={styles.title}>已收到611位好友的祝福</View>
        <ScrollView className={styles.avatar_wrap}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Avatar key={index} src={mockAvatarUrl} />
          ))}
        </ScrollView>

        <View className={styles.like_wrap}>
          <Button className={styles.bless_btn} size='mini' onClick={handleLike}>
            送上祝福
          </Button>
          <Button className={styles.share_btn} size='mini'>
            分享
          </Button>
        </View>

        <View className={styles.comments_wrap}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Comment src={mockAvatarUrl} key={index} className={styles.comment} />
          ))}
        </View>

        <View className={styles.footer}>
          <CommentInput />
        </View>
      </View>
    </View>
  );
}
