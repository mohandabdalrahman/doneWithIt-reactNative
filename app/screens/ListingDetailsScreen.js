import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/color'

const ListingDetailsScreen = ({ route }) => {
  const { title, price, images } = route.params
  return (
    <View>
      <Image style={styles.image} source={images[0]} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>${price}</AppText>
        <View style={styles.userContainer}>
          <ListItem image={require('../assets/mohand.png')} title="Mohand" subTitle="5 listing items" />
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40
  }
})

export default ListingDetailsScreen
