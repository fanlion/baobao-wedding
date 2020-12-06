import React from 'react'
import { View, Button } from '@tarojs/components'

import './index.scss'

function Index () {
  const handleAccept = () => {
    console.log('======>accept');
  }

  return (
    <View className='index'>
      <Button onClick={handleAccept}>接受</Button>
    </View>
  )
}

export default Index
