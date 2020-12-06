import React from 'react';
import { View } from '@tarojs/components';
import { Banner, PhotoCard, MusicPlayer } from '../../components';
import styles from './index.module.scss';

const fakeImg =
  'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00605-894.jpg';
const fakeBanners = [
  {
    id: '0',
    src: fakeImg
  },
  {
    id: '1',
    src: fakeImg
  }
];

export default function Home() {
  return (
    <View className={styles.container}>
      <MusicPlayer src='' />
      <Banner list={fakeBanners} className={styles.banner} />
      <PhotoCard src={fakeImg} className={styles.card} title='酒吧一条街' />
      <PhotoCard src={fakeImg} className={styles.card} title='酒吧一条街' />
      <PhotoCard src={fakeImg} className={styles.card} title='酒吧一条街' />
      <PhotoCard src={fakeImg} className={styles.card} title='酒吧一条街' />
      <PhotoCard src={fakeImg} className={styles.card} title='酒吧一条街' />
      <PhotoCard src={fakeImg} className={styles.card} title='酒吧一条街' />
      <PhotoCard src={fakeImg} className={styles.card} title='酒吧一条街' />
      <PhotoCard src={fakeImg} className={styles.card} title='酒吧一条街' />
      <PhotoCard src={fakeImg} className={styles.card} title='酒吧一条街' />
      <PhotoCard src={fakeImg} className={styles.card} title='酒吧一条街' />
      <PhotoCard src={fakeImg} className={styles.card} title='酒吧一条街' />
    </View>
  );
}
