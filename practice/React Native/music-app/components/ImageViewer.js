import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function ImageViewer({imageSrc, placeholderImageSource}) {
    // console.log(imageSrc)

    const imageSource = imageSrc  ? { uri: imageSrc } : placeholderImageSource;
    // console.log("STARTS HERE ")
    // console.log(imageSource)
    // console.log(" ENDS HERE")
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
