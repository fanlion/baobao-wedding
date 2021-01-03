/*
 * @Author: fan.li
 * @Date: 2021-01-03 13:44:03
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 14:25:34
 *
 * 相册
 */
import React, { useState, useEffect } from 'react';
import Taro, { useRouter } from '@tarojs/taro';
import { View, ScrollView, Image } from '@tarojs/components';
import requestPhotolist, { PhotoData } from 'Api/home/requestPhotoList';
import styles from './index.module.scss';

export default function Gallery() {
  const [photos, setPhotos] = useState<PhotoData[]>([]);
  const { params } = useRouter();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id === undefined) {
          return;
        }
        const result = await requestPhotolist(+id);
        setPhotos(result);
      } catch (e) {
        Taro.showToast({ title: '获取相册失败' });
      }
    };
    fetchData();
  }, [id]);

  return (
    <View className={styles.container}>
      <ScrollView>
        {photos.map((item) => (
          <Image key={item.id} src={item.imgUrl} />
        ))}
      </ScrollView>
    </View>
  );
}
