import React from 'react';
import { View } from '@tarojs/components';
import { Banner, PhotoCard, MusicPlayer } from '../../components';
import styles from './index.module.scss';
import MockPhotos from '../../constants/mockPhotos';

const fakeBanners = [
  {
    id: '1',
    src: MockPhotos[1]
  },
  {
    id: '2',
    src: MockPhotos[2]
  }
];

export default function Home() {
  return (
    <View className={styles.container}>
      <MusicPlayer src='' />
      <Banner list={fakeBanners} className={styles.banner} />
      <PhotoCard src={MockPhotos[1]} className={styles.card} title='宝宝婚礼' />
      <PhotoCard src={MockPhotos[2]} className={styles.card} title='宝宝婚礼' />
      <PhotoCard src={MockPhotos[3]} className={styles.card} title='宝宝婚礼' />
      <PhotoCard src={MockPhotos[4]} className={styles.card} title='宝宝婚礼' />
      <PhotoCard src={MockPhotos[5]} className={styles.card} title='宝宝婚礼' />
      <PhotoCard src={MockPhotos[6]} className={styles.card} title='宝宝婚礼' />
      <PhotoCard src={MockPhotos[7]} className={styles.card} title='宝宝婚礼' />
      <PhotoCard src={MockPhotos[8]} className={styles.card} title='宝宝婚礼' />
      <PhotoCard src={MockPhotos[9]} className={styles.card} title='宝宝婚礼' />
    </View>
  );
}
