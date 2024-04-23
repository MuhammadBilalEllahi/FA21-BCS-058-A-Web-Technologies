import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function TextButton({ label }) {
    return (
       <View styles={[styles.buttonContainer,{ borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
         <Pressable
            styles={[styles.button,, { backgroundColor: "#fff" }]}
            onPress={() => { console.log("Pressable button") }}
            
        >
              <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
            <Text style={styles.buttonLabel}>
                {label}
            </Text>
        </Pressable>
       </View>
    )
}


const styles = StyleSheet.create({
    // text: {
    //     margin: 10,
    //     color: "white"
    // },
    // textButton: {
    //     backgroundColor: "black",
    //     margin: 10,
        

    // },
    // view:{
    //     display:"flex"
    // }

    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
      },
      button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      buttonIcon: {
        paddingRight: 8,
      },
      buttonLabel: {
        color: '#fff',
        fontSize: 16,
      },
})