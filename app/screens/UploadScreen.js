import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native'
import colors from '../config/color';


const UploadScreen = ({ onDone, progress, visible = false }) => {
  if (!visible) return null;
  return (
    <Modal>
      <View style={styles.container}>
        {progress < 1 ?
          <Progress.Bar progress={progress} width={200} color={colors.primary} /> : <LottieView
            onAnimationFinish={onDone}
            autoPlay
            loop={false}
            source={require('../assets/animations/done.json')} />
        }
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  animation: {
    width: 150
  }
})

export default UploadScreen