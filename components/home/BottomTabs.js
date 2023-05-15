import React, { Component, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/144/000000/home.png',
    inactive: 
    'https://img.icons8.com/fluency-systems-regular/48/000000/home.png',
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/ios-filled/500/000000/search--v1.png',
    inactive: 'https://img.icons8.com/ios/500/000000/search--v1.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/50/000000/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/500/000000/instagram-reel.png',
  },
  {
    name: 'Shop',
    active: 'https://img.icons8.com/fluency-systems-filled/48/000000/shop.png',
    inactive: 'https://img.icons8.com/fluency-systems-regular/48/000000/shop.png',
  },
  {
    name: 'Profile',
    active: 'https://img.wowtv.co.kr/wowtv_news/dnrs/20210621/2021062109070805812d3244b4fed182172186127.jpg',
    inactive: 'https://img.wowtv.co.kr/wowtv_news/dnrs/20210621/2021062109070805812d3244b4fed182172186127.jpg',
  },
]


const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image />
    </TouchableOpacity>
  )
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default BottomTabs
