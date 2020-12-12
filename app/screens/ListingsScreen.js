import React, { useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/color'
import routes from '../navigation/routes'
import { getListings } from '../api/listings'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'
const ListingsScreen = ({ navigation }) => {
  const { data: listings, error, loading, request: fetchListings } = useApi(getListings)

  useEffect(() => {
    fetchListings()
  }, [])

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>We can not retrieve listings</AppText>
          <AppButton title="Retry" onPress={fetchListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={listItem => listItem.id.toString()}
        renderItem={({ item }) => <Card title={item.title} subTitle={`$${item.price}`} imageUrl={item.images[0].url} onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)} />}
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
