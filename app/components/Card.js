import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Image } from 'react-native-expo-image-cache'
import colors from '../config/color'
import AppText from './AppText'
const Card = ({ title, subTitle, imageUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} uri={imageUrl} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  }
})

export default Card
