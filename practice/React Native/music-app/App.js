import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import ImageViewer from './components/ImageViewer';

const AnImage = require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I am using Text</Text>

      {/* <Image 
      source={AnImage}
      style={styles.image}
      ></Image> */}

      <View>

      <Pressable onPress={()=>{console.log("From Pressable ")}}>
      <ImageViewer imageSrc={AnImage}></ImageViewer>
      </Pressable>

      </View>



      <TouchableHighlight
        style={styles.button}
        onPress={() => console.log('http://www.someurl.com')}>
        <Text style={styles.buttonText} >
          Start
        </Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    // position: "relative"
  },
  button: {
    backgroundColor: "#f3f3",
    color: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },

  image:{
    width: 200,
    height: 300,
    borderRadius: 50,
    // display: "absolute",
    // top: 0,
  }

});
