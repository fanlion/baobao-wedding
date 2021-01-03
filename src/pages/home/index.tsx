import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import requestBannerList, { BannerData } from 'Api/home/requestBannerList';
import requestGalleryList, { GalleryData } from 'Api/home/requestGalleryList';
import { Banner, PhotoCard, MusicPlayer } from '../../components';
import styles from './index.module.scss';

export default function Home() {
  const [bannerList, setBannerList] = useState<BannerData[]>([]);
  const [galleryList, setGalleryList] = useState<GalleryData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bList = await requestBannerList();
        const gList = await requestGalleryList();
        setBannerList(bList);
        setGalleryList(gList);
      } catch (e) {
        Taro.showToast({ title: '获取相册失败' });
      }
    };
    fetchData();
  }, []);

  return (
    <View className={styles.container}>
      <MusicPlayer src='' />
      <Banner list={bannerList} className={styles.banner} />
      {galleryList.map((item) => (
        <PhotoCard key={item.id} src={item.imgUrl} className={styles.card} title={item.name} />
      ))}
    </View>
  );
}
