import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function ImageViewer({imageSrc, placeholderImageSource}) {

    const imageSource = imageSrc  ? { uri: imageSrc } : placeholderImageSource;

  return (
   
   <Image 
        source={imageSource}
        style={styles.image}
   ></Image>
   
  )
}

const styles = StyleSheet.create(
    {
        image:{
            width: 300 ,
            height: 400,
            borderRadius: 20
        }
    }
)
