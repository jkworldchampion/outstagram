import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POST } from '../data/post'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import { FIRESTORE_DB } from '../firebase'
import { collection, addDoc, onSnapshot, doc } from 'firebase/firestore'

const HomeScreen = ({navigation}) => {

  const db = FIRESTORE_DB;

  useEffect(() => {
    onSnapshot(collection(db, 'user'), snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <Stories />
      <ScrollView>
        {POST.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
})

export default HomeScreen