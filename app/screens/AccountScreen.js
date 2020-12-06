import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Icon from '../components/Icon'

import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../config/color'

const menuItems = [
  {
    title: 'My Listing',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    }
  }
]
const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem image={require('../assets/mohand.png')} title="Mohand" subTitle="mohand.abdalrahman@mondia.com" />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.title}
          renderItem={({ item }) => <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} />}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
        <ListItem title="Logout" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  },
  container: {
    marginVertical: 20
  }
})
export default AccountScreen
