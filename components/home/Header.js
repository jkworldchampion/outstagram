import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/logo_white.png')}/>
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image 
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/000000/plus-2-math.png'
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/000000/like--v1.png'
            }} 
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image 
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/000000/facebook-messenger.png'
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
     flexDirection: 'row',
     marginHorizontal: 20
  },

  logo: {
    width: 110,
    height: 50,
    resizeMode: 'contain'
  },

  iconsContainer: {
    flexDirection: 'row',
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },

  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },

  unreadBadgeText: {
    color: 'black',
    fontWeight: 600,
  }


})

export default Header
