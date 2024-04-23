import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const AnImage = require("./assets/favicon.png")

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I am using Text</Text>

      <Image 
      source={AnImage}
      ></Image>

      
      <TouchableHighlight
        style={styles.button}
        onPress={() => this._onPressButton('http://www.someurl.com')}>
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
  }

});
