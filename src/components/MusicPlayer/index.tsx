/*
 * @Author: fan.li
 * @Date: 2020-12-06 19:17:43
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-06 20:30:22
 *
 * 音乐播放器组件
 */
import React, { useState } from 'react';
import cls from 'classnames';
import { View, Image } from '@tarojs/components';
import musicCdIcon from './assets/music_icon.png';
import musicPlayIcon from './assets/music_play.png';
import './style.scss';

const prefix = 'BaMusicPlayer';

interface Props {
  className?: string;
  src: string;
  autoPlay?: boolean;
}

export default function MusicPlayer(props: Props) {
  const { className, src } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying((playing: boolean) => !playing);
  };

  const barCls = cls(`${prefix}_bar`, {
    [`${prefix}_bar__play`]: isPlaying,
    [`${prefix}_bar__pause`]: !isPlaying
  });

  const cdCls = cls(`${prefix}_cd`, {
    [`${prefix}_cd__play`]: isPlaying
  });

  return (
    <View className={cls(`${prefix}`, className)} onClick={handleClick}>
      <Image src={musicCdIcon} className={cdCls} />
      <Image src={musicPlayIcon} className={barCls} />
    </View>
  );
}
