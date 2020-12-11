import React from 'react'
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './AppText'
import colors from '../config/color'

const ListItem = ({ image, title, subTitle, IconComponent, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress} >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color={colors.medium} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  title: {
    fontWeight: '500',
    textTransform: 'capitalize'
  },
  subTitle: {
    color: colors.medium
  }
})

export default ListItem
