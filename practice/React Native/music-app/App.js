import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import TextButton from './components/TextButton';
import * as ImagePicker from "expo-image-picker"
import { useState } from 'react';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from './components/models/EmojiPicker';
import EmojiList from './components/models/EmojiList';
import EmojiSticker from './components/models/EmojiSticker';


const AnImage = require("./assets/sample.jpg")
// const textLabel = "Click Here"

export default function App() {


  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
      setIsModalVisible(true)
  };

  const onModalClose = ()=>{
    setIsModalVisible(false);
  }

  const onSaveImageAsync = async () => {

  };





  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };


  return (
    <View style={styles.container}>
      {/* <Text>I am using Text</Text> */}

      {/* <Image 
      source={AnImage}
      style={styles.image}
      ></Image> */}

      <View>

        <Pressable onPress={() => { console.log("From Pressable ") }}>

          <ImageViewer
            placeholderImageSource={AnImage}
            imageSrc={selectedImage}
          />
                  {pickedEmoji && <EmojiSticker  imageSize={40} stickerSource={pickedEmoji} />}

          {/* <ImageViewer imageSrc={AnImage}></ImageViewer> */}
        </Pressable>

      </View>



      {/* <TouchableHighlight
        style={styles.button}
        onPress={() => console.log('http://www.someurl.com')}>
        <Text style={styles.buttonText} >
          Start
        </Text>
      </TouchableHighlight> */}

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>

            <IconButton label={"Reset"} icon={"refresh"} onPress={onReset}/>
            <CircleButton onPress={onAddSticker} />
            <IconButton label={"Save"} icon={"save-alt"} onPress={onSaveImageAsync} />

          </View>
        </View>
      ) : (

        <View style={styles.footerContainer}>
          <TextButton label={"Choose a Photo"} onPress={pickImageAsync} theme="primary" ></TextButton>
          <TextButton label={"Use this Photo"} onPress={() => { setShowAppOptions(true) }} ></TextButton>
        </View>

      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
         </EmojiPicker>

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

  image: {
    width: 200,
    height: 300,
    borderRadius: 50,
    // display: "absolute",
    // top: 0,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    marginTop: 20
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
