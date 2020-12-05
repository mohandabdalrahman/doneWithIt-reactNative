import React, { useState } from 'react'
import { FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'


const initialMessages = [
  {
    id: 1,
    title: 't1',
    description: 'd1',
    image: require('../assets/mohand.png')
  },
  {
    id: 2,
    title: 't2',
    description: 'd2',
    image: require('../assets/mohand.png')

  }
]

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id))
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => <ListItem title={item.title} subTitle={item.description} image={item.image} onPress={() => console.log('tet')} />}
        ItemSeparatorComponent={ListItemSeparator}
        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([{
            id: 2,
            title: 't2',
            description: 'd2',
            image: require('../assets/mohand.png')

          }])
        }}
      />
    </Screen>
  )
}

export default MessagesScreen
