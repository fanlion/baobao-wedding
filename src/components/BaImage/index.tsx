/*
 * @Author: fan.li
 * @Date: 2020-12-06 15:30:08
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-06 17:10:12
 *
 * 图片组件
 */
import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { Image, ITouchEvent, View } from '@tarojs/components';
import cls from 'classnames';
import noop from 'lodash/noop';
import failedImg from './assets/img_failed_icon.png';
import './style.scss';

const prefix = 'BaImage';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  mode?: any;
  lazyLoad?: boolean;
  imgClassName?: string;
  onClick?:(e: MouseEvent, img: string) => void;
  canPreview?: boolean;
  src: string;
  onError?: () => void;
  onLoad?: () => void;
}

export default function BaImage(props: Props) {
  const { className = '', imgClassName = '', lazyLoad, mode, style, src, onError = noop, onLoad = noop, onClick = noop, canPreview } = props;
  const [localImg, setLocalImg] = useState(src);
  const [isLoadFail, setIsLoadFail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLocalImg(src);
    setIsLoading(true);
  }, [src]);

  const onImgError = () => {
    setIsLoading(false);
    setIsLoadFail(true);
    onError();
  };

  const onImgLoad = () => {
    setIsLoadFail(false);
    setIsLoading(false);
    onLoad();
  };

  const handleImgClick = (e: ITouchEvent) => {
    onClick(e, localImg);
    if (!canPreview) {
      return;
    }
    Taro.previewImage({ current: localImg, urls: [localImg] });
  }

  const isImgVisible = !isLoading && !isLoadFail;
  const wrapCls = cls({
    [prefix]: true,
    [className]: !!className,
    [`${prefix}--loading`]: isLoading
  });

  const imgCls = cls({
    [`${prefix}-img`]: true,
    [imgClassName]: !!imgClassName,
    [`${prefix}--visible`]: isImgVisible,
    [`${prefix}--hidden`]: !isImgVisible
  });

  return (
    <View className={wrapCls}>
      <Image
        className={imgCls}
        style={style}
        src={localImg}
        mode={mode}
        onError={onImgError}
        onLoad={onImgLoad}
        lazyLoad={lazyLoad}
        onClick={handleImgClick}
      />

      {isLoadFail && (
        <Image className={`${prefix}-error`}
          src={failedImg}
        />
      )}
    </View>
  );
}
