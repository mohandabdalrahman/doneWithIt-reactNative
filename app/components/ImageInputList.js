import React, { useRef } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import ImageInput from './ImageInput'

const ImageInputList = ({ imageUris = [], onDeleteImage, onAddImage }) => {
  const scrollView = useRef()
  return (
    <View>
      <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map(uri => (
            <View key={uri} style={styles.image}>
              <ImageInput imageUri={uri} onChangeImage={() => onDeleteImage(uri)} />
            </View>
          ))}
          <ImageInput onChangeImage={uri => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    marginRight: 10
  }
})

export default ImageInputList