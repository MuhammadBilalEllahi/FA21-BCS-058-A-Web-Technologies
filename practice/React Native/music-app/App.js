import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I am using Text</Text>
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
    backgroundColor: '#fff',
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
