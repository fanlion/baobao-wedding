import React from 'react'
import { View } from '@tarojs/components'
import { BaBanner } from '../../components';

import './index.scss'

const fakeBanners = [{
  id: '0',
  src: 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00605-894.jpg'
},
{
  id: '1',
  src: 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00605-894.jpg'
}]

export default function Home() {
  return <View>
    <BaBanner list={fakeBanners} />
  </View>
}
