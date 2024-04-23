import { Pressable, StyleSheet, Text } from "react-native";


export default function TextButton({ label }) {
    return (
        <Pressable
            onPress={() => { console.log("Pressable button") }}
            style={styles.textButton}
        >
            <Text style={styles.text}>
                {label}
            </Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    text: {
        margin: 10,
        color: "white"
    },
    textButton: {
        backgroundColor: "black",
        margin: 10,
        marginHorizontal: 20,

    }
})