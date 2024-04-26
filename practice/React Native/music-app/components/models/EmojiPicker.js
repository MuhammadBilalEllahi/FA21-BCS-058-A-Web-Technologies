
import { MaterialIcons } from '@expo/vector-icons'
import { Modal, Pressable, Text, View ,StyleSheet} from 'react-native'
// The Modal component is a basic way to present content above an enclosing view.

export default function EmojiPicker({isVisible,children,onClose}) {
  return (
   <Modal animationType='slide' transparent={true} visible={isVisible} >
    <View style={styles.modalContent}>
    <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose a Sticker</Text>
        <Pressable onPress={onClose}>
          <MaterialIcons name='close' color="#fff" size={32}/>
        </Pressable>
    </View>
    {children}
    </View>
   </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});
