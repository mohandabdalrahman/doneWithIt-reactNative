import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/color'
import routes from '../navigation/routes'
const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Black jacket for sale',
    price: 2000,
    image: require('../assets/jacket.jpg')
  }
]
const ListingsScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listItem => listItem.id.toString()}
        renderItem={({ item }) => <Card title={item.title} subTitle={`$${item.price}`} image={item.image} onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)} />}
      />
    </Screen>
  )
}
const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.light
  }
})


export default ListingsScreen
