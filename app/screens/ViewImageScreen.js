import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/color'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons style={styles.closeIcon} name="close" color="white" size={35} />
      <MaterialCommunityIcons style={styles.deleteIcon} name="trash-can-outline" color="white" size={35}></MaterialCommunityIcons>
      <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
export default ViewImageScreen
