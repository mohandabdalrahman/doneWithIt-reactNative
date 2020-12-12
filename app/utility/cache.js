import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'
const prefix = 'cache'
const expireDateTime = 5

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now()
    }
    await AsyncStorage.setItem(`${prefix}${key}`, JSON.stringify(item))
  } catch (error) {
    console.log('🚀 ~ file: cache.js ~ line 9 ~ store ~ error', error)
  }
}

const isExpired = item => {
  const now = moment(Date.now())
  const storedTime = moment(item.timestamp)
  return now.diff(storedTime, 'minutes') > expireDateTime
}

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(`${prefix}${key}`)
    const item = JSON.parse(value)
    if (!item) return null

    if (isExpired()) {
      await AsyncStorage.removeItem(`${prefix}${key}`)
      return null
    }
    return item.value
  } catch (error) {
    console.log('🚀 ~ file: cache.js ~ line 21 ~ get ~ error', error)
  }
}

export default {
  store,
  get
}