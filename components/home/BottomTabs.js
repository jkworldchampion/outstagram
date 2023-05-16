import React, { Component, useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import { Divider } from 'react-native-elements'


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
      <Image 
        source={{ uri: activeTab == icon.name ? icon.active : icon.inactive }} 
        style={[styles.icon,
          icon.name == 'Profile' ? styles.profilePic() : null,
          activeTab == 'Profile' && icon.name == activeTab 
          ? styles.profilePic(activeTab)
          : null,
        ]}
      />
    </TouchableOpacity>
  )
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical'/>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 999,
    backgroundColor: '#FFF'
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },

  icon: {
    width: 30,
    height: 30,

  },

  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab == 'Profile' ? 2 : 0,
    backgroundColor: '#FFF'
  })
})

export default BottomTabs
