
import * as ImagePicker from 'expo-image-picker';

export default function ImagePick() {
  const pickImageAsset = async ()=>{
    let res = await ImagePicker.launchImageLibraryAsync(
      {
        allowEditing: true,
        quality: 1
      }
      
    )
  }
  
}
