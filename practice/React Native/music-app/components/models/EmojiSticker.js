import { View, Image } from 'react-native'
import React from 'react'

export default function EmojiSticker({ imageSize, stickerSource }) {

    // let val = -1 * (Math.floor(Math.random() * 400))
    val = -320
  return (
    <View style={{ top: val }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  )
}
